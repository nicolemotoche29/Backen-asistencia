import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import routerUsuario from './routers/usuario_routes.js'
import routerClientes from './routers/clientes_routes.js'
import routerTecnicos from './routers/tecnicos_routes.js'
import routerTickets from './routers/tickets_routes.js'

// Inicializaciones
const app = express()
dotenv.config()

// Configuraciones 
app.set('port',process.env.port || 8080)
app.use(cors())

// Middlewares 
app.use(express.json())


// Variables globales


// Rutas 
app.use('/api',routerUsuario)
app.use('/api',routerTickets)
app.use('/api',routerTecnicos)
app.use('/api',routerClientes)

// Manejo de una ruta que no sea encontrada
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))

export default  app