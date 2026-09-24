import { Router } from "express";

const router = Router ()

// RUTA POST PARA PROCESAR LOGIN

router.post('/api/login', (req,res) => {
    const {usuario, contraseña} =req.body;

    console.log("usuario recibido:", usuario)
    console.log("contraseña recibida", contraseña)

    if (usuario === 'admin' && contraseña === '1234'){
        res.redirect('/contact_us');
    } else {
        res.send("Usuario o contraseña incorrectos");
    }
    
})

//3 BOTON - CREAR USUARIO
router.get('/registro', (req, res) => {
    res.render('registro.ejs', {etiqueta: 'Crear Usuario', pagina: 'registro'})
})


//4 ENLACE PARA "REESTABLECER CONTRASEÑA"
router.get('/recuperar-password',(req,res) => {
    res.send('Vista o logica para enviar el correo de recuperacion de usuario');
})


//5 ENLACE PARA "RECORDAR USUARIO"
router.get('/recordar-usuario',(req,res) => {
    res.send('Vista o logica para recordar el nombre del usuario');
})

//6 RUTA DE EXITO PARA REGISTRAR USUARIO 
router.get('/contact_us',(req,res) => {
    res.send('Bienvenido al sistema');
})

 export default router
