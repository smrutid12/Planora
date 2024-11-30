from flask import request, make_response
from flask_restx import Resource, Namespace
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, jwt_required, get_jwt
from app.model import User
from app.db import db

# Initialize Bcrypt
bcrypt = Bcrypt()

auth = Namespace('Authentication', description="API for user authentication")

# Token blacklist for logout functionality
revoked_tokens = set()

class RegisterResource(Resource):
    def post(self):
        data = request.get_json()
        name = data.get('name')
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        confirm_password = data.get('confirm_password')

        if not username or not email or not password or not name:
            return make_response({'error': 'All fields are required'}, 400)

        # Check if user exists
        if User.query.filter_by(email=email).first() or User.query.filter_by(user_name=username).first():
            return make_response({'error': 'User already exists'}, 409)

        if password != confirm_password:
            return make_response({'error': 'Passwords do not match'}, 422)
        # Hash password
        hashed_password = bcrypt.generate_password_hash(password)

        # Create user
        new_user = User(user_name=username, email=email, password=hashed_password, name=name)
        db.session.add(new_user)
        db.session.commit()

        return make_response({'message': 'User registered successfully'}, 201)


class LoginResource(Resource):
    def post(self):
        data = request.get_json()
        user_name = data.get('username')
        password = data.get('password')

        if not user_name or not password:
            return make_response({'error': 'Username and password are required'}), 400

        # Find user
        user = User.query.filter_by(user_name=user_name).first()
        if not user or not bcrypt.check_password_hash(user.password, password):
            return make_response({'error': 'Invalid email or password'}), 401

        # Create JWT, use username as identity
        access_token = create_access_token(identity=user.user_name, additional_claims={'email': user.email})
        print(access_token, 'Generated JWT token')

        return make_response({'message': 'Login successful', 'access_token': access_token}, 200)


class LogoutResource(Resource):
    @jwt_required()
    def post(self):
        print(f"Authorization Header: {request.headers.get('Authorization')}")
        # Get the current JWT token ID (JTI)
        jti = get_jwt().get("jti")
        if jti:
            # Add the token to the revoked list
            revoked_tokens.add(jti)
            return make_response({'message': 'Successfully logged out'}, 200)
        else:
            return make_response({'error': 'Invalid token'}, 400)


auth.add_resource(RegisterResource, '/register')
auth.add_resource(LoginResource, '/login')
auth.add_resource(LogoutResource, '/logout')