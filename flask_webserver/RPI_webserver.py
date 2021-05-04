from bottle import route, run, template, request
import RPi.GPIO as GPIO
import Adafruit_DHT


#setarea modului de citire a pinilor
GPIO.setmode(GPIO.BCM)


#setare pin senzor umiditate/temperatura
type = Adafruit_DHT.DHT11
dht11 = 25
GPIO.setup(dht11, GPIO.IN)

#setare pini leduri
GPIO.setup(14, GPIO.OUT)
GPIO.setup(15, GPIO.OUT)
GPIO.setup(18, GPIO.OUT)


#stabilirea rutelor
@route('/')
def index():
    setLedsOnLow()
    GPIO.output(14,GPIO.HIGH)
    return template('index.html')

@route('/umiditate')
def umiditate():
    setLedsOnLow()
    GPIO.output(18,GPIO.HIGH)
    umiditate,temperatura= Adafruit_DHT.read(type, dht11)
    return {'umiditate':umiditate}

@route('/temperatura')
def temperatura():
    setLedsOnLow()
    GPIO.output(15,GPIO.HIGH)
    umidiate,temperatura = Adafruit_DHT.read(type, dht11)
    return {'temperatura':temperatura}

@route('/stop')
def stop():
    setLedsOnLow()
    GPIO.output(14,GPIO.HIGH)
    return {'stop':'Nimic de afisat...'}

def setLedsOnLow():
    GPIO.output(14,GPIO.LOW)
    GPIO.output(15,GPIO.LOW)
    GPIO.output(18,GPIO.LOW)
#start server
run(host = '0.0.0.0', port = '6789')
#la stop server, stinge leduri si curata pini
setLedsOnLow()
GPIO.cleanup()