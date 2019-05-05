/*
 * Connect Raspberry Pi to AskSensors
 * Description: This code sends dummy data to askSensors IoT platform over HTTPS GET Request.
 *  Author: https://asksensors.com, 2018
 *  github: https://github.com/asksensors
 * Instructables: https://www.instructables.com/id/Connect-Raspberry-Pi-to-Asksensors-IoT-Platform-Us/
 */

// includes
var https = require('https');
const request = require('request');

// TODO: Raspberry Pi user Configuration
var ApiKeyIn = '...................'; // TODO: fill your sensor Api Key In given by https://asksensors.com
var writeInterval = 25000;	// TODO: adjust timerInterval (in ms)
// API host name
var host = 'https://api.asksensors.com';

// Function declaration: send data
function send_data(){
	var url = host + '/write/';	
		url+= ApiKeyIn;
		url+= '?module1='
		url+= 100*Math.random(); // random data in module 1
		url+= '&module2='
		url+= 100*Math.random(); // random data in module 2
	console.log('Data sent to:' + url);
	request(url, { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }

	});
}
send_data();// send first data
// Send data every timerInterval
setInterval(send_data, writeInterval); // setInterval 
