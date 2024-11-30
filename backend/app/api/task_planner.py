import hashlib
import os
from flask import request, redirect
from urllib.parse import urlparse
from flask_restx import Resource, Namespace, fields

generate_plans = Namespace('Planora', description="API for creating and fetching plans")