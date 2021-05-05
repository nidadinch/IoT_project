import RPi.GPIO as GPIO
import dht11
import time
import datetime
from flask import Flask, request, render_template                                    # (1)
from flask_restful import Resource, Api, reqparse, inputs   

# Flask & Flask-RESTful instance variables
app = Flask(__name__) # Core Flask app.                                              # (4)
api = Api(app) # Flask-RESTful extension wrapper                                     # (5)



# initialize GPIO
GPIO.setwarnings(True)
GPIO.setmode(GPIO.BCM)

# read data using pin 14
instance = dht11.DHT11(pin=17)


@app.route("/")
 
def main():
   return render_template('main.html')
   
try:
	while True:
	    result = instance.read()
	    if result.is_valid():
	        print("Last valid input: " + str(datetime.datetime.now()))

	        print("Temperature: %-3.1f C" % result.temperature)
	        print("Humidity: %-3.1f %%" % result.humidity)
	        
	        state = {
				'temperature' : result.temperature
				'humidity': result.humidity
			}

	    time.sleep(60)

except KeyboardInterrupt:
    print("Cleanup")
    GPIO.cleanup()