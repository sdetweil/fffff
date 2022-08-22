/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8090,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			disabled: true,
			position: "top_right",
			config: {
				weatherProvider: "weatherbit",
				type: "current",
				lat: 30.4548443,
				lon: -97.6222674,
				//location: "New York",
				//locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "67f41759a9c74d8a917ac984155286f0"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				updateInterval: 15*1000,
				initialLoadDelay: 2,
				weatherProvider: "weatherbit",
				//weatherEndpoint:"/forecast/daily",
				type: "forecast",
				lat: 30.4548443,
				lon: -97.6222674,
				//location: "New York",
				//locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "67f41759a9c74d8a917ac984155286f0",
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
    module: "MMM-EyeCandy",
    position: "top_center",
    config: {
        maxWidth: "75%",       // Sizes the images. Retains aspect ratio.
        style: '2',            // Style number or use ownImagePath to override style
  //      ownImagePath: '',      // ex: 'modules/MMM-EyeCandy/pix/YOUR_PICTURE_NAME.jpg', or internet url to image
  //ownImagePath: 'https://radar.weather.gov/ridge/lite/KCLE_loop.gif'
    }
},
{
  module: 'MMM-awesome-alexa',
  position: 'bottom_bar',
  config: {
    wakeWord: 'Alexa',
    clientId: 'amzn1.application-oa2-client.42c6a76b62ee4d7b9115e4c6a6623d9a',
    clientSecret: 'f1de191638c33f140c47ce2a11947677b3cc2782e79552eb668aee0b51738d1d',
    deviceId: '1234567890',
    refreshToken: 'Atzr|IwEBIH_Da06Gs1e0cA-uNHNI9keBkpcgPARqH4V-CdWFTfRCWA4Z5KS3Nw8cOxSIYrqD25UKzjnkIh5J_SFbDNeif5S9X01RUrJfUHKZY7T3zvjNn9fxpT-c3iHw7yEh5a90bMZ13HSPIk-1i8KjIZqHzNSbhL0IwexLMRRjgQnRKHFof6a6dSAy8w6n8WUoqI-i4lMYPZ_2uvMGK7Fdn_pFuDl_42IeNJaK-fZGG_ytItee26GaLoZzl7j4xuRXl18RDkXSxkwbuPo5TZd40hRcNTr7Le8o_4PluRvab0y1qz34vmzVCT1uxaQJYTgoQvKUoCvSh99-6JIrY6egOk528KusMTjklaxpeI9i6caOxaQumg',
    lite: false,
    isSpeechVisualizationEnabled: false
  }
},
{
 	module: 'MMM-SimpleText',
 	position: 'top_center',
 	config: {
			text: {
			  'value': 'Hello World!'
			},
			fontURL: {
			  'value': 'Tahoma, Geneva, sans-serif'
			},
			fontSize: {
			  'value': 'xx-large'
			},
			fontStyle: {
			  'value': 'italic'
			},
			color: {
			  'value': '#FFFFFF'
			},
			filePath: {
				'value':"../../config/config.js"
			}
		}
},

	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
