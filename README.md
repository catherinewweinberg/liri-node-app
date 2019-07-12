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
command: node liri.js concert-this <artist/band name here>
This command will search the bands in Town Artist Events API and render the following information:

- Name of the Venue
- Venue Location
- Date of the Event
- Time of the Event

Example:
node liri.js concert-this Garth Brooks
![concert-this](/assets/images/liri_concert_this.png)
