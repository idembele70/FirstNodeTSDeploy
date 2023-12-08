
import express, { Router } from 'express'
import helmet from 'helmet'
import cors from 'cors'

const app = express()
const router = Router()
// Package that app use
app.use(helmet())
app.use(cors())

router.get('/', (req,res) => {
  res.status(200).send('HELLO WORLD')
})

router.get('/home', (req,res) => {
  return res.json({message: 'Welcome home !'})
})

app.use(router)
app.listen(80, () => {
  console.log("App is listenning at port 80")
})