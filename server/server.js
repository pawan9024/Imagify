import express from 'express'
import cors from 'cors'
import  'dotenv/config' 
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 4000 || "https://imagify-client-lemon.vercel.app"
const app = express()


app.use(express.json())
app.use(cors())
await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.get('/', (req, res) => res.send('IMAGIFY SERVER IS RUNNING'))

app.listen(PORT, () => console.log('Server is running on port ' + PORT ));