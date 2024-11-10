from flask_restx import Api
from api.task_planner import generate_plans

api = Api()

api.add_namespace(generate_plans, '/')