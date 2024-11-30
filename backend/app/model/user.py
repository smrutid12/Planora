from app.db import db
from sqlalchemy import LargeBinary


class User(db.Model):
    __tablename__ = 'users' 
    user_id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(150), unique=True, nullable=False)
    name = db.Column(db.String(150), unique=True, nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(LargeBinary, nullable=False) 