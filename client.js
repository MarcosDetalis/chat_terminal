#!/usr/bin/env node
const io = require("socket.io-client");
const socket = io("http://localhost:3000/");
const readline = require('readline');
var NombreUsuario
console.log("Conectando al servidor...");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

        rl.question("Ingrese su Nombre: ",(name)=>{
        NombreUsuario = name;
        validarNombre(NombreUsuario)
        aviso()
        socket.on("connect", () => {
           NombreUsuario !== undefined ? aviso():end 
        }); 
        socket.on("disconnect", (reason) => {
            console.log("[INFO]: servidor desconectado, razon: %s", reason);
        });
        rl.on("line", (input) => {
             var str = input;
             "ls;" === str ?
             (socket.emit("ListaUsuario", {"Usuariolist": NombreUsuario})):
             (socket.emit("mesaje", {"UsuarioSms": NombreUsuario, "sms": str}))

            
            
        });

        //mesajes recibidos del servidor
        socket.on("mesaje_recibe", (data) => {
        
            console.log('\x1b[36m%s\x1b[0m',data.UsuarioSms,"Dice:",data.sms);
        });

        socket.on("private", (data) => {
        
            console.log('\x1b[36m%s\x1b[0m',data.user,"Privado:",data.smspriv);
        });
        socket.on("msg",(data) =>{
                console.log(data)

        })


        socket.on("union_recibe", (data) => {
            console.log("\n[INFO]: %s Se a unido al chat", data.usuarioUnido);
        });
        socket.on("listaUsuario_recibe", (data) => {
            console.log("[INFO]: Lista de Usuarios:");
            for (var i = 0; i < data.listaUsuarios.length; i++) {
                console.log(data.listaUsuarios[i]);
            }
        });
    rl.prompt(true);

function validarNombre(valiNombre){
    if(valiNombre == ""){ 
     console.error("Ingrese un nombre valido")
     process.exit(1)
    } 
}

});


const aviso=()=>{
    console.log("             _____¶¶")
    console.log("            ______¶¶¶")
    console.log("            _____¶¶_¶¶")
    console.log("            _____¶¶__¶¶¶")
    console.log("            ____¶¶___¶¶¶¶¶¶")
    console.log("            __¶¶¶______¶¶¶¶")
    console.log("            ¶¶¶¶¶¶___¶¶¶¶")
    console.log("            ___¶_¶¶_¶¶")
    console.log("            ______¶¶¶¶")
    console.log("            ¶______¶¶___________¶¶")
    console.log("            ¶¶__________________¶¶¶")
    console.log("            ¶¶_________________¶¶_¶¶")
    console.log("            _¶¶________________¶¶__¶¶¶")
    console.log("            __¶_______________¶¶____¶¶¶¶¶¶")
    console.log("            __¶¶____________¶¶¶_______¶¶¶¶")
    console.log("            __¶¶¶¶________¶¶¶¶¶¶¶___¶¶¶¶")
    console.log("            __¶¶_¶¶___________¶_¶¶_¶¶")
    console.log("            __¶¶__¶¶_____________¶¶¶¶")
    console.log("            __¶¶___¶¶_____________¶¶__________¶¶")
    console.log("            __¶¶____¶¶¶_______________________¶¶¶")
    console.log("            __¶¶_____¶¶¶_____________________¶¶_¶¶")
    console.log("            __¶¶_______¶¶____________________¶¶__¶¶¶")
    console.log("            __¶¶________¶¶__________________¶¶____¶¶¶¶¶¶")
    console.log("            __¶¶________¶¶¶_______________¶¶¶_______¶¶¶¶")
    console.log("            __¶¶___¶¶¶¶¶¶_¶¶_____________¶¶¶¶¶¶¶__¶¶¶¶")
    console.log("            __¶¶¶¶¶¶¶¶¶____¶¶________________¶_¶¶_¶¶")
    console.log("            __¶¶___¶¶¶¶¶¶__¶¶¶__________________¶¶¶¶")
    console.log("            __¶¶___¶____¶¶__¶¶___________________¶¶")
    console.log("            ___¶¶__¶____¶¶___¶¶")
    console.log("            ___¶¶___¶¶¶¶¶_____¶")
    console.log("            ____¶¶____________¶¶¶")
    console.log("            ____¶¶_____________¶¶¶¶¶")
    console.log("            _____¶¶_____¶______¶¶_¶¶¶¶¶")
    console.log("            _____¶¶_____¶¶______¶¶___¶¶¶¶")
    console.log("            _____¶¶¶_____¶¶______¶_____¶¶¶¶¶")
    console.log("            ____¶¶_¶_____¶¶______¶¶_______¶¶¶¶")
    console.log("            ____¶¶_¶¶_____¶¶______¶__________¶¶")
    console.log("            ___¶¶___¶¶_____¶¶_____¶¶__________¶¶")
    console.log("            ___¶¶___¶¶_____¶¶______¶___________¶¶")
    console.log("            ___¶_____¶¶_____¶¶_____¶¶__________¶¶")
    console.log("            __¶¶______¶______¶______¶¶__________¶¶")
    console.log("            __¶_______¶¶_____¶¶____¶¶¶__________¶¶")
    console.log("            _¶¶________¶¶_____¶¶¶¶¶¶¶¶___________¶¶")
    console.log("            _¶__________¶_¶¶¶¶¶¶_____¶¶___________¶¶")
    console.log("            _¶¶__________¶_____¶¶_____¶¶__________¶¶")
    console.log("            _¶¶__________¶¶_____¶¶_____¶¶¶¶¶_______¶¶")
    console.log("            __¶¶_________¶¶_____¶¶_______¶¶¶¶¶¶_____¶")
    console.log("            ___¶¶_________¶¶_____¶¶_________¶¶¶¶¶¶__¶¶")
    console.log("            ___¶¶_________¶_______¶_____________¶¶¶¶¶¶")
    console.log("            ____¶¶_______¶¶_______¶¶________________¶¶")
    console.log("            ____¶¶______¶¶_________¶¶")
    console.log("            _____¶¶_____¶¶_________¶¶")
    console.log("            ______¶¶___¶¶___________¶¶")
    console.log("            ______¶¶__¶¶")
    console.log("            _______¶¶_¶")
    console.log("            ________¶¶¶")
    
        console.log("Bienvenido",NombreUsuario)
        socket.emit("union", {"usuarioUnido":NombreUsuario  });
    }



