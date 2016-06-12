from flask import Flask, request
from werkzeug.utils import redirect

app = Flask(__name__)


@app.route('/')
def index():
    return redirect("/static/index.html")


@app.route('/strategy', methods=['GET'])
def strategy():
    strategyType = request.args.get('strategyType', '')
    strategyName = request.args.get('strategyName', '')
    return strategyType + "***" + strategyName


if __name__ == "__main__":
    app.run()
