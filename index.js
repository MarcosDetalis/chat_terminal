const port = process.env.PORT||3000;
const io = require("socket.io")(port);
var  lisus = {}
io.on("connect", (socket) => {

    console.log("Usuario conectado");

    socket.on("union", (data) => {
        console.log("\nUsuario: ", data.usuarioUnido, ", ID: ", socket.id);
        console.log("Numero de Usuarios: %d", io.of('/').server.engine.clientsCount);
        socket.usuarios= data.usuarioUnido;

        lisus[data.usuarioUnido]=socket.id;//guardamos a los usarios en una lista
      
        socket.broadcast.emit("union_recibe", data);
    });
    
    socket.on("mesaje", (data) => {

        var msg = data.sms.trim();

     
      if(msg.substr(0, 5) === 'priv '){//obtenemos los datos adelante del comando priv
        msg = msg.substr(5);
        console.log(msg)
        var index = msg.indexOf(' ');//buscamos el espacio para obtener los datos lo cual nos dara el indice
        if(index !== -1){//si no tenemos errores
            console.log(index)
        var name = msg.substring(0, index);//obtenemos el nombre del usuario citado
        console.log(name)
        var msg = msg.substring(index + 1);//obtenemos el mensaje
        console.log(msg)
         console.log("usaioo",lisus)
         if(name in lisus ){
            console.log("aqui estamos")
            io.to(lisus[name]).emit('private', {"smspriv": msg,"user":data.UsuarioSms });
         }else{socket.emit("msg","Usuario no existe");}
      }else{socket.emit("msg","No hay mensaje");}
    }else{
    console.log("%s", data,"server");
    socket.broadcast.emit("mesaje_recibe", data);  
    }
    });

    socket.on("ListaUsuario", (data) => {
        var users = [];
        for (const [key, value] of io.of("/").sockets) {
            users.push(value.usuarios);
        }
        socket.emit("listaUsuario_recibe", {"listaUsuarios": users});
    });

    socket.on("disconnect", (reason) => {
        console.log("El usuario se desconecto: %s", reason);
        console.log("Numero de usuarios: %d", io.of('/').server.engine.clientsCount);
    });

});

console.log("Servidor en el puerto: %d", port);