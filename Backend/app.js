const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mysql = require('mysql')
const {
  bookingData,
  genres,
  langs,
  locs,
  upcomingMovies,
  runningMovies,
} = require('./data')
dotenv.config()

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Summer@2023',
  database: 'new_schema',
  // insecureAuth: true,
  // port: '3306',
})

db.connect((error) => {
  if (error) {
    throw error
  }
  console.log('My SQL connected')
})

const bookings = [...bookingData]

const app = express()
app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('nuv evaro nak teleedu')
})

app.get('/bookings', (req, res) => {
  const command = 'SELECT * FROM `movie-booking`.bookings;'
  db.query(command, (err, result) => {
    if (err) throw err
    // res.send(result)
    res.json(result)
  })
})
app.post('/registerBooking', (req, res) => {
  const booking_data = req.body
  const {
    booking_id,
    film_id,
    film_name,
    location_id,
    name,
    date,
    tickets_count,
    start_time,
  } = booking_data
  const command =
    'INSERT INTO `movie-booking`.`bookings`' +
    `VALUES (${booking_id}, ${film_id}, '${film_name}' , ${location_id}, '${name}', '${date}', ${tickets_count}, '${start_time}');`
  db.query(command, (err, result) => {
    if (err) throw err
    if (result) {
      const command_two = 'SELECT * FROM `movie-booking`.bookings;'
      db.query(command_two, (error, result_two) => {
        if (error) throw error
        res.json(result_two)
      })
    }
  })
})

app.get('/filmShowTimes', (req, res) => {
  const film_id = req.query.film_id
  const date = req.query.date
  const response = {
    date: date,
    cinemas: [],
  }
  const getRandomTimes = () => {
    return [
      {
        start_time: '10:30',
        end_time: '12:44',
      },
      {
        start_time: '12:00',
        end_time: '14:14',
      },
      {
        start_time: '12:30',
        end_time: '14:44',
      },
      {
        start_time: '13:00',
        end_time: '15:14',
      },
      {
        start_time: '14:30',
        end_time: '16:44',
      },
      {
        start_time: '15:00',
        end_time: '17:14',
      },
      {
        start_time: '15:30',
        end_time: '17:44',
      },
      {
        start_time: '17:00',
        end_time: '19:14',
      },
      {
        start_time: '17:30',
        end_time: '19:44',
      },
      {
        start_time: '18:00',
        end_time: '20:14',
      },
      {
        start_time: '19:30',
        end_time: '21:44',
      },
      {
        start_time: '20:00',
        end_time: '22:14',
      },
    ]
  }

  const film_data = runningMovies.filter((film) => film.filmId == film_id)
  const movies = film_data[0].locations
  response.cinemas = locs.filter((cinema) => movies.includes(cinema.name))
  response.cinemas = response.cinemas.map((cinema) => ({
    ...cinema,
    times: getRandomTimes().slice(0, Math.floor(Math.random() * 11) + 1),
  }))

  res.json(response)
})

app.get('/genres', (req, res) => {
  res.json(genres)
})

app.get('/languages', (req, res) => {
  res.json(langs)
})

app.get('/locations', (req, res) => {
  res.json(locs)
})

app.get('/upcommingfilms', (req, res) => {
  res.json(upcomingMovies)
})

app.get('/runningMovies', (req, res) => {
  res.json(runningMovies)
})

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`API Running on ${PORT}`)
})
