import express from 'express'
import  {dirname, join} from 'path'
import { fileURLToPath } from 'url'

import indexRoutes from './routes/index.js'
import autRoutes from './routes/autenticacion.js'

console.log('hola mundo')

const app = express()

//FORMULARIO
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//RUTA ABSOLUTA

const __dirname = dirname(fileURLToPath (import.meta.url)) 
console.log(join(__dirname, '/views'))

app.set('views',join(__dirname, '/views'))
app.set('view engine', 'ejs')

//MIDOLEWARES PARA LEER DATOS DE FORMULARIOS (CRUCIAL PARA req.body)
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

//RUTA PARA LLAMAR LA APLICACION
app.use(indexRoutes)
app.use(autRoutes)

//RUTA DE LA CARPETA PUBLICA  PARA ARCHIVOS ESTATICOS (CSS,IMG,VIDEOS)
app.use(express.static(join(__dirname,'/public')))

// RUTA PARA INICIAR EL SERVIDOR CON SU RESPECTIVO PUERTO
app.listen(3000)
console.log('Hola mundo')
console.log('El servidor me esta escuchando el puerto es', 3000);