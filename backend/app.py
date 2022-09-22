from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow

app = Flask(__name__)
if __name__=="__main__":
  app.run(debug=True)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/apptrack'
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Jobapp(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  company = db.Column(db.String(100))
  position = db.Column(db.Text())
  date = db.Column(db.DateTime, default=datetime.datetime.now)
  status = db.Column(db.String(20), default="Applied")
  def __init__(self, company, position, status):
    self.company=company
    self.position=position

class JobSchema(ma.Schema):
  class Meta:
    fields = ('id', 'company', 'position', 'date', 'status')

job_schema = JobSchema()
jobs_schema = JobSchema(many=True)

@app.route('/job', methods=['GET'])
def get_all():
  jobs = Jobapp.query.all()
  results = jobs_schema.dump(jobs)
  return jsonify(results)

@app.route('/job', methods=['POST'])
def add_job():
  company = request.json['company']
  position = request.json['position']
  status = request.json['status']
  jobs = Jobapp(company, position, status)
  db.session.add(jobs)
  db.session.commit()
  return jsonify(jobs)

@app.route('/job/<id>', methods=['PUT'])
def edit_job(id):
  job = Jobapp.query.get(id)
  position = request.json['position']
  company = request.json['company']
  status = request.json['status']
  job.position = position
  job.company = company
  job.status = status
  db.session.commit()
  return job_schema.jsonify(job)

@app.route('/job/<id>', methods=['DELETE'])
def delete_job(id):
  job = Jobapp.query.get(id)
  db.session.delete(job)
  db.session.commit()
  return job_schema.jsonify(job)