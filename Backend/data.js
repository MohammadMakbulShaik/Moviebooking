const bookingData = [
  {
    bookingId: 1,
    filmId: 7772,
    filmName: "Raiders of the Lost Ark",
    locationId: 201,
    name: "Cinema-1",
    date: "2022-05-16",
    ticketsCount: 5,
    start_time: "11:20",
  },
  {
    bookingId: 2,
    filmId: 184126,
    filmName: "The Martian",
    locationId: 206,
    name: "Cinema-4",
    date: "2022-05-18",
    ticketsCount: 2,
    start_time: "13:20",
  },
  {
    date: "2022-05-20",
    filmId: 7772,
    filmName: "Raiders of the Lost Ark",
    locationId: 202,
    name: "Cinema-2",
    start_time: "17:00",
    ticketsCount: 2,
  },
  {
    date: "2022-05-21",
    filmId: 1685,
    filmName: "The Adventures of Priscilla",
    locationId: 202,
    name: "Cinema-2",
    start_time: "17:00",
    ticketsCount: "10",
  },
  {
    date: "2022-05-22",
    filmId: 4167,
    filmName: "Woman in the Dunes",
    locationId: 201,
    name: "Cinema-1",
    start_time: "11:20",
    ticketsCount: 3,
  },
  {
    date: "2022-05-21",
    filmId: 4167,
    filmName: "Woman in the Dunes",
    locationId: 202,
    name: "Cinema-2",
    start_time: "15:30",
    ticketsCount: 6,
  },
  {
    date: "2022-05-20",
    filmId: 21448,
    filmName: "Three Kings",
    locationId: 201,
    name: "Cinema-1",
    start_time: "15:30",
    ticketsCount: 5,
  },
  {
    date: "2022-05-28",
    filmId: 6650,
    filmName: "The English Patient",
    locationId: 201,
    name: "Cinema-1",
    start_time: "12:00",
    ticketsCount: 7,
  },
  {
    date: "2022-05-29",
    filmId: 3427,
    filmName: "From Dusk Till Dawn",
    locationId: 205,
    name: "Cinema-5",
    start_time: "17:05",
    ticketsCount: 13,
  },
];

const genres = [
  {
    genreId: 101,
    name: "Action",
  },
  {
    genreId: 102,
    name: "Comedy",
  },
  {
    genreId: 103,
    name: "Horror",
  },
  {
    genreId: 104,
    name: "Mystery",
  },
];

const langs = [
  {
    langugageId: 1001,
    name: "English",
  },
  {
    langugageId: 1002,
    name: "Spanish",
  },
  {
    langugageId: 1003,
    name: "French",
  },
  {
    langugageId: 1004,
    name: "Portuguese",
  },
  {
    langugageId: 1005,
    name: "Dutch",
  },
];

const locs = [
  {
    locationId: 201,
    name: "Cinema-1",
    address: {
      address1: "1745 T Street Southeast",
      address2: "",
      city: "Washington",
      state: "DC",
      postalCode: "20020",
    },
  },
  {
    locationId: 202,
    name: "Cinema-2",
    address: {
      address1: "6007 Applegate Lane",
      address2: "",
      city: "Louisville",
      state: "KY",
      postalCode: "40219",
    },
  },
  {
    locationId: 203,
    name: "Cinema-3",
    address: {
      address1: "2203 7th Street Road",
      address2: "",
      city: "Louisville",
      state: "KY",
      postalCode: "40208",
    },
  },
  {
    locationId: 204,
    name: "Cinema-4",
    address: {
      address1: "314 South 17th Street",
      address2: "",
      city: "Nashville",
      state: "TN",
      postalCode: "37206",
    },
  },
  {
    locationId: 205,
    name: "Cinema-5",
    address: {
      address1: "1513 Cathy Street",
      address2: "",
      city: "Savannah",
      state: "GA",
      postalCode: "31415",
    },
  },
  {
    locationId: 206,
    name: "Cinema-6",
    address: {
      address1: "1267 Martin Street",
      address2: "#203",
      city: "Nashville",
      state: "TN",
      postalCode: "37203",
    },
  },
];

const upcomingMovies = [
  {
    film_id: 253705,
    imdb_id: 1745960,
    imdb_title_id: "tt1745960",
    film_name: "Top Gun: Maverick",
    other_titles: null,
    release_dates: [
      {
        release_date: "2022-05-27",
        notes: "IND",
      },
    ],
    age_rating: [
      {
        rating: "U/A ",
        age_rating_image:
          "https://assets.movieglu.com/age_rating_logos/in/u/a.png",
        age_advisory: "",
      },
    ],
    film_trailer: "https://trailer.movieglu.com/253705_high_V3.mp4",
    synopsis_long:
      'After more than thirty years of service as one of the Navy\'s top aviators, Pete "Maverick" Mitchell (Tom Cruise) is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. When he finds himself training a detachment of Top Gun graduates for a specialized mission the likes of which no living pilot has ever seen, Maverick encounters Lt. Bradley Bradshaw (Miles Teller), call sign: "Rooster," the son of Maverick\'s late friend and Radar Intercept Officer Lt. Nick Bradshaw, aka "Goose".\n\n Facing an uncertain future and confronting the ghosts of his past, Maverick is drawn into a confrontation with his own deepest fears, culminating in a mission that demands the ultimate sacrifice from those who will be chosen to fly it.',
    images: {
      poster: {
        1: {
          image_orientation: "portrait",
          region: "IN",
          medium: {
            film_image: "https://image.movieglu.com/253705/IND_253705h0.jpg",
            width: 239,
            height: 300,
          },
        },
      },
      still: {
        1: {
          image_orientation: "landscape",
          medium: {
            film_image: "https://image.movieglu.com/253705/253705h2.jpg",
            width: 300,
            height: 200,
          },
        },
      },
    },
  },
  {
    film_id: 297543,
    imdb_id: 6455162,
    imdb_title_id: "tt6455162",
    film_name: "Bhool Bhulaiyaa 2",
    other_titles: {
      HI: "Bhool Bhulaiyaa 2",
    },
    release_dates: [
      {
        release_date: "2022-05-20",
        notes: "IND",
      },
    ],
    age_rating: [
      {
        rating: "0 ",
        age_rating_image:
          "https://assets.movieglu.com/age_rating_logos/in/uc.png",
        age_advisory: "",
      },
    ],
    film_trailer: null,
    synopsis_long:
      "Set within the sprawling halls of a haveli, Bhool Bhulaiyaa 2 is a horror movie that is a sequel to the 2007 movie of the same name.",
    images: {
      poster: {
        1: {
          image_orientation: "portrait",
          region: "IN",
          medium: {
            film_image: "https://image.movieglu.com/297543/IND_297543h0.jpg",
            width: 187,
            height: 300,
          },
        },
      },
    },
  },
  {
    film_id: 315779,
    imdb_id: 13144110,
    imdb_title_id: "tt13144110",
    film_name: "Visithiran (Vichithiran)",
    other_titles: {
      TA: "Visithiran",
    },
    release_dates: [
      {
        release_date: "2022-05-20",
        notes: "IND",
      },
    ],
    age_rating: [
      {
        rating: "U/A ",
        age_rating_image:
          "https://assets.movieglu.com/age_rating_logos/in/u/a.png",
        age_advisory: "",
      },
    ],
    film_trailer: null,
    synopsis_long: "",
    images: {
      poster: {
        1: {
          image_orientation: "portrait",
          region: "IN",
          medium: {
            film_image: "https://image.movieglu.com/315779/IND_315779h0.jpg",
            width: 185,
            height: 300,
          },
        },
      },
    },
  },
  {
    film_id: 306266,
    imdb_id: 11318364,
    imdb_title_id: "tt11318364",
    film_name: "Belashuru",
    other_titles: {
      BE: "????????",
    },
    release_dates: [
      {
        release_date: "2022-05-20",
        notes: "IND",
      },
    ],
    age_rating: [
      {
        rating: "0 ",
        age_rating_image:
          "https://assets.movieglu.com/age_rating_logos/in/uc.png",
        age_advisory: "",
      },
    ],
    film_trailer: null,
    synopsis_long:
      "The story revolves around an elderly couple Biswanath Sarkar (Soumitra Chattopadhyay) and Arati Sarkar (Swatilekha Sengupta). It focuses on different relationships that exist within a family and the bond that parents, children and other members of the family share together.",
    images: {
      poster: {
        1: {
          image_orientation: "portrait",
          region: "IN",
          medium: {
            film_image:
              "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/belashuru-et00095543-15-03-2021-05-16-26.jpg",
            width: 185,
            height: 300,
          },
        },
      },
    },
  },
  {
    film_id: 267244,
    imdb_id: 8041270,
    imdb_title_id: "tt8041270",
    film_name: "Jurassic World Dominion",
    other_titles: null,
    release_dates: [
      {
        release_date: "2022-06-10",
        notes: "IND",
      },
    ],
    age_rating: [
      {
        rating: "U/A ",
        age_rating_image:
          "https://assets.movieglu.com/age_rating_logos/in/u/a.png",
        age_advisory: "",
      },
    ],
    film_trailer: "https://trailer.movieglu.com/267244_high_V2.mp4",
    synopsis_long:
      "From Jurassic World architect and director Colin Trevorrow, Dominion takes place four years after Isla Nublar has been destroyed. Dinosaurs now live - and hunt - alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history's most fearsome creatures.",
    images: {
      poster: {
        1: {
          image_orientation: "portrait",
          region: "IN",
          medium: {
            film_image: "https://image.movieglu.com/267244/IND_267244h0.jpg",
            width: 190,
            height: 300,
          },
        },
      },
      still: {
        1: {
          image_orientation: "landscape",
          medium: {
            film_image: "https://image.movieglu.com/267244/267244h2.jpg",
            width: 300,
            height: 200,
          },
        },
      },
    },
  },
];

const runningMovies = [
  {
    filmId: 7772,
    filmName: "Raiders of the Lost Ark",
    filmImage: "https://image.movieglu.com/7772/GBR_007772h0.jpg",
    filmTrailer: "https://trailer.movieglu.com/7772_high.mp4",
    ageRating: "PG",
    language: "English",
    Genre: "Action",
    locations: ["Cinema-1", "Cinema-2", "Cinema-4", "Cinema-5", "Cinema-6"],
    cast: [
      {
        cast_id: 775,
        cast_name: "Harrison Ford",
      },
      {
        cast_id: 3605,
        cast_name: "Karen Allen",
      },
      {
        cast_id: 4478,
        cast_name: "John Rhys-Davies",
      },
      {
        cast_id: 4479,
        cast_name: "Paul Freeman",
      },
      {
        cast_id: 4480,
        cast_name: "Ronald Lacey",
      },
      {
        cast_id: 4478,
        cast_name: "John Rhys-Davies",
      },
      {
        cast_id: 3931,
        cast_name: "Denholm Elliott",
      },
      {
        cast_id: 1587,
        cast_name: "Alfred Molina",
      },
      {
        cast_id: 4481,
        cast_name: "Wolf Kahler",
      },
      {
        cast_id: 4482,
        cast_name: "Anthony Higgins",
      },
    ],
    directors: [
      {
        director_id: 24,
        director_name: "Steven Spielberg",
      },
    ],
  },
  {
    filmId: 184126,
    filmName: "The Martian",
    filmImage: "https://image.movieglu.com/184126/GBR_184126h0.jpg",
    filmTrailer: "https://trailer.movieglu.com/184126_uk_high.mp4",
    ageRating: "12A",
    language: "English",
    Genre: "Mystery",
    locations: ["Cinema-3", "Cinema-4", "Cinema-6"],
    cast: [
      {
        cast_id: 1085,
        cast_name: "Matt Damon",
      },
      {
        cast_id: 2057,
        cast_name: "Jessica Chastain",
      },
      {
        cast_id: 1091,
        cast_name: "Kristen Wiig",
      },
      {
        cast_id: 2530,
        cast_name: "Kate Mara",
      },
      {
        cast_id: 1212,
        cast_name: "Michael Pena",
      },
      {
        cast_id: 2531,
        cast_name: "Jeff Daniels",
      },
      {
        cast_id: 2370,
        cast_name: "Chiwetel Ejiofor",
      },
      {
        cast_id: 2367,
        cast_name: "Donald Glover",
      },
    ],
    directors: [
      {
        director_id: 555,
        director_name: "Ridley Scott",
      },
    ],
  },
  {
    filmId: 59906,
    filmName: "There Will Be Blood",
    filmImage: "https://image.movieglu.com/59906/059906h1.jpg",
    filmTrailer: null,
    ageRating: "15",
    language: "Spanish",
    Genre: "Horror",
    locations: ["Cinema-1", "Cinema-3"],
    cast: [
      {
        cast_id: 123,
        cast_name: "Daniel Day-Lewis",
      },
      {
        cast_id: 6198,
        cast_name: "Paul Dano",
      },
      {
        cast_id: 2545,
        cast_name: "Kevin J. O'Connor",
      },
      {
        cast_id: 1592,
        cast_name: "Ciarán Hinds",
      },
      {
        cast_id: 6199,
        cast_name: "Russell Harvard",
      },
      {
        cast_id: 6200,
        cast_name: "Paul F. Tompkins",
      },
      {
        cast_id: 6201,
        cast_name: "Jim Meskimen",
      },
      {
        cast_id: 6202,
        cast_name: "John Kerry",
      },
      {
        cast_id: 6203,
        cast_name: "January Welsh",
      },
      {
        cast_id: 6204,
        cast_name: "Colleen Foy",
      },
    ],
    directors: [
      {
        director_id: 597,
        director_name: "Paul Thomas Anderson",
      },
    ],
  },
  {
    filmId: 3427,
    filmName: "From Dusk Till Dawn",
    filmImage: "https://image.movieglu.com/3427/GBR_003427h0.jpg",
    filmTrailer: null,
    ageRating: "18",
    language: "French",
    Genre: "Action",
    locations: ["Cinema-1", "Cinema-3", "Cinema-4", "Cinema-5", "Cinema-6"],
    cast: [
      {
        cast_id: 6024,
        cast_name: "Quentin Tarantino",
      },
      {
        cast_id: 1738,
        cast_name: "George Clooney",
      },
      {
        cast_id: 2090,
        cast_name: "Harvey Keitel",
      },
      {
        cast_id: 790,
        cast_name: "Juliette Lewis",
      },
    ],
    directors: [
      {
        director_id: 38,
        director_name: "Robert Rodriguez",
      },
    ],
  },
  {
    filmId: 1685,
    filmName: "The Adventures of Priscilla",
    filmImage: "https://image.movieglu.com/1685/GBR_001685h0.jpg",
    filmTrailer: null,
    ageRating: "15",
    language: "English",
    Genre: "Comedy",
    locations: [
      "Cinema-1",
      "Cinema-2",
      "Cinema-3",
      "Cinema-4",
      "Cinema-5",
      "Cinema-6",
    ],
    cast: [
      {
        cast_id: 81,
        cast_name: "Terence Stamp",
      },
      {
        cast_id: 82,
        cast_name: "Hugo Weaving",
      },
      {
        cast_id: 83,
        cast_name: "Guy Pearce",
      },
      {
        cast_id: 84,
        cast_name: "Bill Hunter",
      },
      {
        cast_id: 85,
        cast_name: "Rebel Russell",
      },
    ],
    directors: [
      {
        director_id: 23,
        director_name: "Stephan Elliott",
      },
    ],
  },
  {
    filmId: 25,
    filmName: "Stargate",
    filmImage: "https://image.movieglu.com/25/000025h1.jpg",
    filmTrailer: null,
    ageRating: "PG",
    language: "French",
    Genre: "Action",
    locations: ["Cinema-6"],
    cast: [
      {
        cast_id: 1357,
        cast_name: "Kurt Russell",
      },
      {
        cast_id: 7523,
        cast_name: "James Spader",
      },
      {
        cast_id: 8690,
        cast_name: "Alexis Cruz",
      },
      {
        cast_id: 8691,
        cast_name: "Viveca Lindfors",
      },
      {
        cast_id: 8692,
        cast_name: "Mili Avital",
      },
      {
        cast_id: 8693,
        cast_name: "John Diehl",
      },
      {
        cast_id: 8694,
        cast_name: "Leon Rippy",
      },
      {
        cast_id: 8695,
        cast_name: "Carlos Lauchu",
      },
      {
        cast_id: 3451,
        cast_name: "Djimon Hounsou",
      },
      {
        cast_id: 868,
        cast_name: "Erick Avari",
      },
    ],
    directors: [
      {
        director_id: 636,
        director_name: "Roland Emmerich",
      },
    ],
  },
  {
    filmId: 6650,
    filmName: "The English Patient",
    filmImage: "https://image.movieglu.com/6650/006650h1.jpg",
    filmTrailer: null,
    ageRating: "15",
    language: "Dutch",
    Genre: "Comedy",
    locations: ["Cinema-1", "Cinema-4", "Cinema-5", "Cinema-6"],
    cast: [
      {
        cast_id: 1898,
        cast_name: "Ralph Fiennes",
      },
      {
        cast_id: 1878,
        cast_name: "Juliette Binoche",
      },
      {
        cast_id: 1017,
        cast_name: "Kristin Scott Thomas",
      },
      {
        cast_id: 285,
        cast_name: "Willem Dafoe",
      },
      {
        cast_id: 1814,
        cast_name: "Colin Firth",
      },
    ],
    directors: [
      {
        director_id: 899,
        director_name: "Anthony Minghella",
      },
    ],
  },
  {
    filmId: 4167,
    filmName: "Woman in the Dunes",
    filmImage:
      "https://m.media-amazon.com/images/P/0679733787.01._SCLZZZZZZZ_SX500_.jpg",
    filmTrailer: null,
    ageRating: "PG",
    language: "English",
    Genre: "Comedy",
    locations: ["Cinema-3", "Cinema-4", "Cinema-5", "Cinema-6"],
    cast: [
      {
        cast_id: 9363,
        cast_name: "Kyoko Kishida",
      },
      {
        cast_id: 9364,
        cast_name: "Eisi Okada",
      },
    ],
    directors: [
      {
        director_id: 2280,
        director_name: "Hiroshi Teshigahara",
      },
    ],
  },
  {
    filmId: 8675,
    filmName: "Lawrence Of Arabia - 70mm",
    filmImage: "https://image.movieglu.com/8675/GBR_008675h0.jpg",
    filmTrailer: null,
    ageRating: "PG",
    language: "Portuguese",
    Genre: "Action",
    locations: ["Cinema-1", "Cinema-4", "Cinema-6"],
    cast: [
      {
        cast_id: 5615,
        cast_name: "Peter O'Toole",
      },
      {
        cast_id: 10417,
        cast_name: "Alec Guinness",
      },
      {
        cast_id: 6079,
        cast_name: "Anthony Quinn",
      },
      {
        cast_id: 9403,
        cast_name: "Jack Hawkins",
      },
      {
        cast_id: 2774,
        cast_name: "Omar Sharif",
      },
      {
        cast_id: 1279,
        cast_name: "José Ferrer",
      },
      {
        cast_id: 10418,
        cast_name: "Anthony Quayle",
      },
      {
        cast_id: 829,
        cast_name: "Claude Rains",
      },
      {
        cast_id: 5360,
        cast_name: "Arthur Kennedy",
      },
      {
        cast_id: 10419,
        cast_name: "Donald Wolfit",
      },
    ],
    directors: [
      {
        director_id: 168,
        director_name: "David Lean",
      },
    ],
  },
  {
    filmId: 21448,
    filmName: "Three Kings",
    filmImage: "https://image.movieglu.com/21448/021448h1.jpg",
    filmTrailer: null,
    ageRating: "15",
    language: "English",
    Genre: "Horror",
    locations: ["Cinema-5"],
    cast: [
      {
        cast_id: 1738,
        cast_name: "George Clooney",
      },
      {
        cast_id: 1086,
        cast_name: "Mark Wahlberg",
      },
      {
        cast_id: 2121,
        cast_name: "Ice Cube",
      },
      {
        cast_id: 4070,
        cast_name: "Spike Jonze",
      },
      {
        cast_id: 12525,
        cast_name: "Nora Dunn",
      },
    ],
    directors: [
      {
        director_id: 3103,
        director_name: "David O. Russell",
      },
    ],
  },
];


module.exports = {
  bookingData,
  genres,
  langs,
  locs,
  upcomingMovies,
  runningMovies,
};
