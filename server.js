const express = require('express')
const schema = require('./src/schema/index')

const PORT = 8081
const app = express()

schema.applyMiddleware({ app })

app.listen(PORT, () => {
  console.log(`Graphql server is running on http://localhost:${PORT}/`)
})