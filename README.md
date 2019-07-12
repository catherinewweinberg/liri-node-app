# liri-node-app

Welcome to the LIRI App! LIRI is a Language Interpretation and Recognition Interface. This app utalizes a command line node that can take in set parameters and return data.

Node Packages Used:

- Node-Spotify-API
- Axios
  - OMDB API
  - Bands In Town API
- Moment
- DOTENV

LIRI Commands:

- concert-this
- spotify-this-song
- movie-this
- do-what-it says

What Each Command Should Do:
concert-this:
This command will search the bands in Town Artist Events API and render the following information:

- Name of the Venue
- Venue Location
- Date of the Event
- Time of the Event

Example:
command line: node liri.js concert-this Garth Brooks
![concert-this](/assets/images/liri_concert_this.png)

spotify-this-song:
This command utilizes the node-spotify-api package in order to retrieve song information from the Spotify API. If no song is provided your program will default to "The Sign" by Ace of Base.

Song information provided:

- Artist('s)
- Song Name
- Album Name
- Preview Link from Spotify

Example:
command line: node liri.js spotify-this-song Never Gonna Give You Up
![spotify-this-song](/assets/images/liri_spotify_this_song.png)

movie-this:
This command will utilize axios to retrieve data from the OMDB API. If the user doesn't type in a movie the program will output data for the movie "Mr. Nobody".

Movie information provided:

- Title of the movie
- Year the movie came out
- IMDB Rating
- Rotten Tomatoes Rating
- Country where the movie was produced
- Language
- Plot
- Actors

Example:
command line: node liri.js movie-this hook
![movie-this](/assets/images/liri_movie_this.png)

do-what-it-says:
This command will utilize the fs node package and read the information that is inside of the random.txt file.

Example:
command line: node liri.js do-what-it-says
![do-what-it-says](/assets/images/liri_do_what.png)
