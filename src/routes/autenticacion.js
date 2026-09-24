import { Router } from "express";

const router = Router ()


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

 export default router
