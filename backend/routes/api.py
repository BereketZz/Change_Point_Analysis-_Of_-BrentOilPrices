from flask import Blueprint, jsonify
import pandas as pd
import json

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/prices')
def get_prices():
    df = pd.read_csv('data/brent_prices.csv')
    return jsonify(df.to_dict(orient='records'))

@api_blueprint.route('/events')
def get_events():
    with open('data/events.json') as f:
        events = json.load(f)
    return jsonify(events)

@api_blueprint.route('/change-points')
def get_change_points():
    with open('models/change_points.json') as f:
        cps = json.load(f)
    return jsonify(cps)
