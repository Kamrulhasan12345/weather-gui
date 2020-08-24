import requests
import json
import pytemperature
import sys
import eel

eel.init('web')

@eel.expose
def get_weather(city):
    api_url = "http://api.openweathermap.org/data/2.5/weather"
    if city == None:
        return "Please enter a city"
    else:
        r = requests.post(url = api_url, params = {'q':city, 'APPID':"b614ca4e1df7691d6dd68413b31db5e3", 'units': 'metric'})
        if r.status_code == 200:
            response = json.loads(r.content)
            temp = response['main']['temp']
            desc = response['weather'][0]['description']
        return "It's " + str(desc) + " in " + city.capitalize() + ", with a temperature of " + str(pytemperature.c2f(temp)) +"° Farenheit."



options = {
	'mode': 'custom',
	'args': ['node_modules/electron/dist/electron.exe', '.']
}

#eel.start('index.html', size=(800, 600), mode='electron')
eel.start('index.html', port=3131, mode='custom', cmdline_args=['node_modules/electron/dist/electron.exe', '.'])
