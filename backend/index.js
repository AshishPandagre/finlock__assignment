require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')
const dbConnect = require('./dbConnect')
const cors = require('cors');

const corsOption = {
  origin: ['http://localhost:5173'],
};
// app.use(cors(corsOption));
app.use(cors())

dbConnect()

app.use(express.json())

app.use(routes)


// error handlers

// in case if an error is thrown by any controller
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong." } = err

  if (status === 500) {
    // mail the administrator about the error. 
  }

  return res.status(status).json({
    status: 'ERROR',
    message: message
  })
})


// in case if url did not match any of the available routes.
app.get('*', function (req, res) {
  return res.status(404).json({
    message: 'Page not found.'
  })
})


app.listen(process.env.PORT, () => {
  console.log('Listening on port ', process.env.PORT)
})
