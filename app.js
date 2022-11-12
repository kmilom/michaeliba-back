import  express  from "express";
import cors from "cors";
import db from "./database/db.js";
import questionRoutes from "./routes/routes.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use('/questions', questionRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log(`Cule error: ${error}`)
}

app.get('/', (req, res) => {
    res.send('HOLA MUNDO')
})

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})