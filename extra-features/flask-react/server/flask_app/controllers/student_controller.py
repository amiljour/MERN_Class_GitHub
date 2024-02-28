from flask_app import app
from flask_app.models.student_model import Student
from flask import jsonify, request

@app.get("/api/students")
def getAllStudents():
    return jsonify(Student.get_all())

@app.get("/api/students/<int:id>")
def getOneStudent(id):
    return jsonify(Student.get_one(id))

@app.post("/api/students")
def createStudent():
    student_id = Student.create(request.json)
    return jsonify(id=student_id, **request.json)

@app.delete("/api/students/<int:id>")
def deleteStudent(id):
    Student.delete(id)
    return "success", 200

@app.put("/api/students/<int:id>")
def updateStudent(id):
    Student.update(id, request.json)
    return "success", 200