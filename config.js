
  var config = {
    address: "0.0.0.0",
    port: 8090,
    basePath: "/",
    language: "en",
    locale: "en-IN",
    logLevel: [
      "INFO",
      "LOG",
      "WARN",
      "ERROR",
//      "DEBUG"
    ],
    timeFormat: 24,
    units: "metric",
    useHttps: false,
    ipWhitelist: [],
    modules: [
      {
        module: "alert",
        order: "*",
        disabled: false,
        label: "instance 1",
        index: 0
      },
      {
        module: "MMM-pages",
        config: {
          modules: [
            [
              "MMM-FlipClock",
              "MMM-LocalTemperature",
              "weather",
              "MMM-AQI",
              "newsFeed"
            ],
            [
              "MagicMirror-QuoteCatalog",
              "Calendar",
              "MMM-MoonPhase",
              "newsFeed",
              "MMM-TelegramBot",
              "MMM-PIR-Sensor"
            ],
            [
              "MMM-GooglePhotos",
              "MMM-TelegramBot"
            ],
            [
              "MMM-GooglePhotos",
              "MMM-TelegramBot"
            ],
            [
              "MMM-GooglePhotos",
              "MMM-TelegramBot"
            ],
            [
              "MMM-GooglePhotos",
              "MMM-TelegramBot"
            ],
            [
              "MMM-GooglePhotos",
              "MMM-TelegramBot"
            ],
            [
              "MMM-GooglePhotos",
              "MMM-TelegramBot"
            ]
          ],
          fixed: [
            "MMM-page-indicator"
          ],
          animationTime: 1000,
          rotationTime: 10000,
          rotationDelay: 10000,
          homePage: 0,
          excludes: []
        },
        order: "*",
        disabled: false,
        index: 1
      },
      {
        module: "updatenotification",
        position: "top_bar",
        order: "*",
        disabled: false
      },
      {
        module: "clock",
        position: "top_left",
        config: {},
        order: "*",
        disabled: false,
        label: "instance 1",
        index: 1
      },
      {
        module: "calendar",
        header: "Rags Calendar",
        position: "top_left",
        config: {
          colored: true,
          coloredSymbolOnly: false,
          tableClass: "small",
          maximumNumberOfDays: 183,
          maximumEntries: 12,
          customEvents: [
            {
              keyword: "Birthday",
              symbol: "birthday-cake",
              color: "Gold"
            },
            {
              keyword: "Anniversary",
              symbol: "star",
              color: "White"
            }
          ],
          calendars: [
            {
              //url: "https://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics",
              //url: "http://localhost:8090/modules/default/calendar/fribble.ics".
              url: "http://localhost:8090/modules/default/calendar/calendar_test_recurring.ics",
              symbol: "calendar",
              color: "#efefef",
              name: "Rags Calendar"
            }
          ],
          titleReplace: {
            "De verjaardag van ": "",
            "'s birthday": ""
          },
          locationTitleReplace: {
            "street ": ""
          }
        },
        order: "*",
        disabled: false,
        label: "instance 1",
        index: 0
      },
      {
        module: "MMM-PIR-Sensor",
        disabled: true,
        position: "top_center",
        config: {
          sensorPin: 17,
          presenceIndicator: "fa-eye",
          presenceOffIndicator: "fa-eye",
          presenceIndicatorColor: "#f51d16",
          presenceOffIndicatorColor: "#2b271c",
          powerSavingNotification: true,
          powerSavingMessage: "No presence detected monitor will be turned off"
        },
        order: "*"
      },
      {
        module: "MMM-Config",
        position: "top_right",
        config: {
          debug: true,
          restart: "none"
        },
        order: "*",
        disabled: false
      },
      {
        module: "weather",
        position: "top_right",
        config: {
          weatherProvider: "openweathermap",
          type: "current",
          degreeLabel: "true",
          timeFormat: 24,
          appendLocationNameToHeader: true,
          showHumidity: true,
          showIndoorTemperature: true,
          showIndoorHumidity: true,
          tableClass: "small",
          colored: true,
          maxNumberOfDays: 3,
          locationID: "1277333",
          location: "Bengaluru",
          apiKey: "a6bf9feaa86bc2677df1e5f46bd79d55",
          windUnits: "mph"
        },
        order: "*",
        disabled: false
      },
      {
        module: "MMM-GooglePhotos",
        position: "top_right",
        config: {
          albums: [
            "MagicMirror"
          ],
          updateInterval: 30000,
          sort: "random",
          showWidth: 800,
          showHeight: 600,
          timeFormat: "YYYY/MM/DD HH:mm"
        },
        order: "*",
        disabled: false,
        index: 1
      },
      {
        module: "TextMessageModule",
        position: "middle_center",
        order: "*",
        disabled: false
      },
      {
        module: "newsfeed",
        position: "bottom_bar",
        config: {
          feeds: [
            {
              title: "Google News",
              url: "xxxx"
            }
          ],
          showSourceTitle: true,
          showPublishDate: true,
          broadcastNewsFeeds: true,
          broadcastNewsUpdates: true
        },
        order: "*",
        disabled: false
      },
      {
        module: "MMM-TelegramBot",
        position: "bottom_left",
        config: {
          allowedUser: [
            "Rags"
          ],
          useWelcomeMessage: true,
          verbose: false,
          favourites: [
            "/commands",
            "/modules",
            "/hideall",
            "/showall"
          ],
          screenshotScript: "scrot",
          detailOption: {},
          customCommands: [],
          telecast: "true",
          telecastLife: 21600000,
          telecastLimit: 5,
          telecastHideOverflow: true,
          commandAllowed: {},
          useSoundNotification: true,
          dateFormat: "DD-MM-YYYY HH:mm:ss",
          telecastContainer: 300,
          TelegramBotServiceAlerte: true
        },
        order: "*",
        disabled: false,
        index: 1
      }
    ]
  }
;

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}