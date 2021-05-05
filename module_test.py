import RPi.GPIO as GPIO
import dht11
import time
import sys

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
instance = dht11.DHT11(pin=17)
count=0

while True:
    result= instance.read()
    if result.is_valid():
        print("Temp: %d C" % result.temperature + ' '+"Humidity: %d %%" % result.humidity)
        count+=1
        time.sleep(3)
        
        if count==5:
            sys.exit("Taken 5 value")
