import express, { json, Request, Response } from 'express'
import 'dotenv/config'
import connectToMongo from './config'
import { saveData } from './service'
import cors from 'cors'

const PORT = process.env.PORT || 3000

const app = express()

connectToMongo()

app.use(express.json())
app.use(cors())

app.post('/', async (req: Request, res: Response) => {
  try {
    const result = await saveData(req.body)
    res.status(201).send(result)
  } catch (err) {
    res.status(400).send((err as Error).message)
  }
})

app.listen(PORT, () => {
  console.log(`Server is up and runing on port ${PORT}!`)
})
