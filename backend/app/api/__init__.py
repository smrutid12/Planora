from flask_restx import Api
from app.api.authentication import auth
from app.api.task_planner import generate_plans


api = Api()

api.add_namespace(auth, '/')
api.add_namespace(generate_plans, '/')