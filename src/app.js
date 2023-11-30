import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'

import libroRoutes from './routes/libro.js'
import usuarioRoutes from './routes/usuario.js'
import reservaRoutes from './routes/reserva.js'

var app = express();
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.json({ result: 'OK'})
})

app.use("/libro", libroRoutes)
app.use("/usuario", usuarioRoutes)
app.use("/reserva", reservaRoutes)

export default app;