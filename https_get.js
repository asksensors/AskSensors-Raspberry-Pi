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
// Configuration
var host = 'https://asksensors.com';		// server host
var ApiKeyIn = '........................'; // TODO: Put your Api Key In
var module1 = 0;				// module 
var timerInterval = 20000;		// timer interval
// Function declaration: send data
function send_data(){
	var url = host + '/api.asksensors/write/';	
		url+= ApiKeyIn;
		url+= '?module1='
		url+= 100*Math.random();//module1++;
	console.log('Data sent to:' + url);
	request(url, { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }

	});
}
send_data();// send first data
// Send data every timerInterval
setInterval(send_data, timerInterval);		// setInterval 
