from Flask import request, make_response, Resource, Namespace
from flask_jwt_extended import jwt_required, get_jwt_identity
from app import db
from app.api import api

profile = Namespace('Profile', description="API for creating and fetching profile details")

class ProfileResource(Resource):
    @jwt_required()
    def get(self):
        current_user = get_jwt_identity()
        return make_response({'message': 'Profile fetched', 'user': current_user}, 200)


# Add resources to API
profile.add_resource(ProfileResource, '/profile')