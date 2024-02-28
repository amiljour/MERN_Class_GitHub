from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DB

class Student:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.email = data["email"]

    @classmethod
    def create(cls, data):
        query = "INSERT INTO students (name, email) VALUES (%(name)s, %(email)s);"
        return connectToMySQL(DB).query_db(query, data)

    @classmethod
    def get_one(cls, id):
        query = "SELECT * FROM students WHERE id = %(id)s;"
        results = connectToMySQL(DB).query_db(query, { "id": id })
        if results:
            return results[0]

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM students;"
        return connectToMySQL(DB).query_db(query)

    @classmethod
    def update(cls, id, data):
        query = "UPDATE students SET name=%(name)s, email=%(email)s WHERE id=%(id)s;"
        connectToMySQL(DB).query_db(query, { **data, "id": id })

    @classmethod
    def delete(cls, id):
        query = "DELETE FROM students WHERE id=%(id)s;"
        connectToMySQL(DB).query_db(query, { "id": id })