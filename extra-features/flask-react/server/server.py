from flask_app import app
from flask_app.controllers import student_controller

if __name__ == "__main__":
    app.run(port=8080, debug=True)