require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const connectDB = require('./db/connect')
const bodyParser = require('body-parser')

// authentication
const authenticationUser = require('./middleware/authentication')

const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
)
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

// routes
const authRouter = require('./routes/auth')
const userData = require('./routes/userData')
const TellsRouter = require('./routes/tells')
const usersRouter = require('./routes/users')

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/user', authenticationUser, userData)
app.use('/api/v1/tells', authenticationUser, TellsRouter)
app.use('/api/v1/users', authenticationUser, usersRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 3000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`),
    )
  } catch (error) {
    console.log(error)
  }
}

start()
