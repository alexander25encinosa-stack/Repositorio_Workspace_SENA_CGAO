import { Router } from "express"

const router = Router()

router.get('/Contact_Us', (req, res) => res.render('Contact_us.ejs', {etiqueta: 'Contact us', pagina: 'contacto'}))
router.get('/About_Us', (req, res) => res.render('About_us.ejs', {etiqueta: 'About us', pagina: 'sobre'}))
router.get('/Login', (req, res) => res.render('Login.ejs', {etiqueta: 'Inicio de Sesion', pagina: 'login', mensaje: null}))
router.get('/Menu', (req, res) => res.render('menu.ejs', {etiqueta: 'Menu', pagina: 'Menu'}))
router.get('/Login', (req, res) => res.render('Login.ejs', {etiqueta: 'Vista Inicio de Sesion', pagina: 'login'}))
router.get('/', (req, res) => res.render('index', {etiqueta: 'Multisales Store', hora: new Date().toLocaleString('es-CO'), pagina: 'inicio'}))


//RUTA GET PARA EL LOGIN (UNICA CON MENSAJES INCLUIDOS)

router.get('/login',(req,res)=>{

    res.render('login',{
        etiqueta:'Vista inicio de sesion',mensaje:null
    })
})

//RUTA POST PARA REGRESAR A LOGIN

router.post('/Login', (req, res) => {
    const {usuario, contraseña} = req.body;

    if (usuario === 'admin' && contraseña === '1234'){
        return res.redirect('/menu');
    }
    return res.render('Login', {
        etiqueta: 'vista de inicio de sesion',
        mensaje: 'Usuario o contraseña son incorrectos'
    })
})

export default router

// Ejercicios de creacion de objetos en NodeJS

const MacBook = {
    Marca: "Apple",
    Modelo: "MacBook PRO",
    Pantalla: "14 Pulgadas",
    Procesador: "M4 PRO",
    Almacenamiento: "512 SSD",

    mostrarinformacion: function(){
        console.log("INFORMACION ACERCA DE MACBOOK")
        console.log("Marca:", this.Marca)
        console.log("Modelo:",this.Modelo)
        console.log("Pantalla:", this.Pantalla)
        console.log("Procesador:", this.Procesador)
        console.log("Almacenamiento:", this.Almacenamiento)
    }
} 
MacBook.mostrarinformacion()

// 1. Objeto de un celular
// Crear un objeto celular con: marca, modelo, color, almacenamiento, memoriaRAM, precio, disponible
// Reto: Crear un método mostrarInformacion() que imprima todas las características en consola.

const Celular = {
    Marca: "Apple",
    Modelo: "iPhone 14 Pro Max",
    Color: "Morado Oscuro",
    Almacenamiento: "256 GB",
    MemoriaRAM: "6 GB",
    Precio: 5499000,
    Disponible: true,

    mostrarInformacion: function(){
        console.log("***INFORMACION DEL CELULAR***")
        console.log("Marca:", this.Marca)
        console.log("Modelo:", this.Modelo)
        console.log("Color:", this.Color)
        console.log("Almacenamiento:", this.Almacenamiento)
        console.log("Memoria RAM:", this.MemoriaRAM)
        console.log("Precio: $" + this.Precio.toLocaleString('es-CO'))
        console.log("Disponible:", this.Disponible)
    }
}

// EJECUTAR EL METODO

Celular.mostrarInformacion();

// 2. Objeto de un automóvil Crear un objeto automovil con: marca, modelo, año, color, motor, kilometraje 
// Reto: Crear dos métodos: encender() → mostrar "El automóvil está encendido". mostrarInformacion() 
// → mostrar sus características.

const Automovil = {
    Marca: "BMW",
    Modelo: "i7 xDrive60",
    Año: "2026",
    Color: "Negro Sapphire Metallic",
    Motor: "2 motores eléctricos, tracción integral xDrive",
    Kilometraje: "0 km",

    encender: function(){
        console.log("El automovil esta encendido")
    },

    mostrarinformacion: function(){
        console.log("***MOSTRAR INFORMACION DEL BMW***")
        console.log("Marca:", this.Marca)
        console.log("Modelo:", this.Modelo)
        console.log("año:", this.Año)
        console.log("Color:", this.Color)
        console.log("Motor:", this.Motor)
        console.log("kilometraje:", this.Kilometraje)
    }
}

// EJECUTAR LOS METODOS 

Automovil.encender();
Automovil.mostrarinformacion();

// 3. Objeto de un estudiante
// Crear un objeto estudiante con: nombre, edad, programa, ficha, nota1, nota2, nota3
// Reto: Crear un método calcularPromedio() que calcule las tres notas y muestre el resultado.

const Estudiante = {
    Nombre: "Laura Gómez",
    Edad: 22,
    Programa: "Ingeniería de Sistemas",
    Ficha: "2589341",
    Nota1: 4.5,
    Nota2: 3.8,
    Nota3: 4.2,

    calcularPromedio: function(){
        const promedio = (this.Nota1 + this.Nota2 + this.Nota3) / 3
        console.log("***PROMEDIO DEL ESTUDIANTE***")
        console.log("Nombre:", this.Nombre)
        console.log("Promedio:", promedio)
    }
}

Estudiante.calcularPromedio();

// 4. Objeto de una cuenta bancaria
// Crear un objeto cuenta con: titular, numeroCuenta, saldo, tipoCuenta
// Reto: Crear tres métodos: depositar(), retirar(), mostrarSaldo()

//Titular: Juan
// Saldo inicial: $500.000

//Depósito: $200.000
// Nuevo saldo: $700.000

//Retiro: $100.000
//Nuevo saldo: $600.000

// 4. Objeto de una cuenta bancaria
// Crear un objeto cuenta con: titular, numeroCuenta, saldo, tipoCuenta
// Reto: Crear tres métodos: depositar(), retirar(), mostrarSaldo()

const Cuenta = {
    Titular: "Juan",
    NumeroCuenta: "0123456789",
    Saldo: 500000,
    TipoCuenta: "Ahorros",

    mostrarSaldo: function(){
        console.log("Titular:", this.Titular)
        console.log("Saldo inicial: $" + this.Saldo.toLocaleString('es-CO'))
    },

    depositar: function(monto){
        this.Saldo = this.Saldo + monto
        console.log("")
        console.log("Depósito: $" + monto.toLocaleString('es-CO'))
        console.log("Nuevo saldo: $" + this.Saldo.toLocaleString('es-CO'))
    },

    retirar: function(monto){
        this.Saldo = this.Saldo - monto
        console.log("")
        console.log("Retiro: $" + monto.toLocaleString('es-CO'))
        console.log("Nuevo saldo: $" + this.Saldo.toLocaleString('es-CO'))
    }
}

// EJECUTAR LOS METODOS

Cuenta.mostrarSaldo();
Cuenta.depositar(200000);
Cuenta.retirar(100000);

// EJECUTAR LOS METODOS

Cuenta.mostrarSaldo();
Cuenta.depositar(200000);
Cuenta.retirar(100000);

//5.	Creear un objeto de su propia elección: una consola de videojuegos, una mascota, una película, 
// una computadora, una bicicleta, etc. Con la condición que tenga mínimo 5 propiedades y 2 métodos, 
// y que toda la información sea mostrada mediante console.log() en Node.js.

const Mascota = {
    Nombre: "Rocky",
    Especie: "Perro",
    Raza: "Golden Retriever",
    Edad: 3,
    Peso: "28 kg",
    Dueño: "Alexander",

    hacerSonido: function(){
        console.log(this.Nombre, "dice: ¡Guau guau!")
    },

    mostrarInformacion: function(){
        console.log("***INFORMACION DE LA MASCOTA***")
        console.log("Nombre:", this.Nombre)
        console.log("Especie:", this.Especie)
        console.log("Raza:", this.Raza)
        console.log("Edad:", this.Edad, "años")
        console.log("Peso:", this.Peso)
        console.log("Dueño:", this.Dueño)
    }
}

Mascota.hacerSonido();
Mascota.mostrarInformacion();
