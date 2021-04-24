import express, { Express, Request, Response, NextFunction } from 'express'
import classportal from '../../../classportal.json'

const app: Express = express()
const PORT = 8080

const allowCrossDomain = (req: Request, res: Response, next: NextFunction): void => {
  res.header('Access-Control-Allow-Origin', classportal.server.allowOrigin)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
}

app.use(allowCrossDomain)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.status(200).send('OK')
})

app.listen(PORT, 'localhost', () => {
  console.log(`Start on port ${PORT}.`)
})
