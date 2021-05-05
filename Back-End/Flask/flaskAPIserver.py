
try:
    from flask import Flask
    from flask_restful import Resource,Api
    from flask_restful import reqparse
    from flask import request
    import time
    import RPi.GPIO as GPIO
    import datetime
    import json
    import dht11
    print("All Module loaded")
except Exception as e:
    print("Error: {}".format(e))

app = Flask(__name__)
api = Api(app)

# I have connected to GPIO 17 pin
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
instance = dht11.DHT11(pin=17)

class Sensors(object):

    def __init__(self):
        pass

    def get(self):

        while True:
            result= instance.read()
            if result.is_valid():

                return{
                    'Temperature in Celcius':result.temperature,
                    "humidity in Percentage":result.humidity
                }


class Controller(Resource):

    def __init__(self):
        pass

    def get(self):
        helper = Sensors()
        return helper.get()

api.add_resource(Controller, "/")

if __name__ == "__main__":
    app.run(host='0.0.0.0')
