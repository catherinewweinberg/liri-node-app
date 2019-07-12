//code to read and set any environment variables with the dotenv package
require("dotenv").config();

// code required to import the keys.js file
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
var fs = require("fs");
var axios = require("axios");
var nodeArgs = process.argv;
var value = "";
var action = nodeArgs[2];
// console.log(keys);
// console.log(keys.spotify);

// This will pull in all words when searching not just the first word/name
for (var i = 3; i < nodeArgs.length; i++) {
  if (i > 3 && i < nodeArgs.length) {
    value = value + " " + nodeArgs[i];
  } else {
    value += nodeArgs[i];
  }
}
console.log(value);
switch (action) {
  case "concert-this":
    concertThis(value);
    break;
  case "spotify-this-song":
    spotifyThisSong(value);
    break;
  case "movie-this":
    movieThis(value);
    break;
  case "do-what-it-says":
    doWhat(value);
    break;
}

function concertThis(value) {
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        value +
        "/events?app_id=codingbootcamp"
    )
    .then(function(response) {
      // console.log(response);
      console.log(response.status);
      console.log(response.data);

      var results = response.data;

      console.log(results[0].datetime);

      for (var i = 0; i < response.data.length; i++) {
        var concertDate = response.data[i].datetime;
        var concertThisResults =
          "-----------------------------------" +
          "\nVenue Name: " +
          response.data[i].venue.name +
          "\nVenue Location: " +
          response.data[i].venue.city +
          "\nDate of the Event " +
          moment(concertDate).format("MM/DD/YYYY") +
          "\nTime of the Event " +
          moment(concertDate).format("HH:mm");

        console.log(concertThisResults);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}
// Program will default to Ace of Base if no song is provided
function spotifyThisSong(value) {
  if (value === undefined) {
    value = "The Sign";
  }
  spotify
    .search({ type: "track", query: value, limit: 1 })
    .then(function(response) {
      // console.log(JSON.stringify(response, null, 2));

      // REQUIRED: Artist(s), Song Name, Preview Link of song via Spotify, & Album
      var musicInfo =
        "-----------------------------------" +
        "\nArtist(s): " +
        response.tracks.items[0].album.artists[0].name +
        "\nSong Name: " +
        response.tracks.items[0].name +
        "\nAlbum: " +
        response.tracks.items[0].album.name +
        "\nPreview Song: " +
        response.tracks.items[0].preview_url;

      console.log(musicInfo);
    })

    .catch(function(error) {
      console.log(error);
    });
}
// REQUIRED:
// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.

function movieThis(value) {
  if (value === undefined) {
    value = "Mr. Nobody";
  }
  axios
    .get("http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy")
    .then(function(response) {
      var movieThisResults =
        "-----------------------------------" +
        "\nMovie Title: " +
        response.data.Title +
        "\nYear Released: " +
        response.data.Year +
        "\nIMDB Rating: " +
        response.data.imdbRaiting +
        "\nRotton Tomatoes Rating: " +
        response.data.Ratings[1].Value +
        "\nCountry Produced: " +
        response.data.Country +
        "\nLanguage: " +
        response.data.Language +
        "\nPlot: " +
        response.data.Plot +
        "\nActors: " +
        response.data.Actors +
        "-----------------------------------";
      console.log(movieThisResults);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function doWhat() {
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    var dataArr = data.split(",");

    if (dataArr[0] === "spotify-this-song") {
      spotify
        .search({ type: "track", query: dataArr[1], limit: 1 })
        .then(function(response) {
          // console.log(JSON.stringify(response, null, 2));

          // REQUIRED: Artist(s), Song Name, Preview Link of song via Spotify, & Album
          var musicInfo =
            "-----------------------------------" +
            "\nArtist(s): " +
            response.tracks.items[0].album.artists[0].name +
            "\nSong Name: " +
            response.tracks.items[0].name +
            "\nAlbum: " +
            response.tracks.items[0].album.name +
            "\nPreview Song: " +
            response.tracks.items[0].preview_url;

          console.log(musicInfo);
        })

        .catch(function(error) {
          console.log(error);
        });
    }
  });
}
