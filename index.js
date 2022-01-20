const port = process.env.PORT||3000;
const io = require("socket.io")(port);

io.on("connect", (socket) => {

    console.log("Usuario conectado");

    socket.on("union", (data) => {
        console.log("\nUsuario: ", data.usuarioUnido, ", ID: ", socket.id);
        console.log("Numero de Usuarios: %d", io.of('/').server.engine.clientsCount);
        socket.usuarios= data.usuarioUnido;
        socket.broadcast.emit("union_recibe", data);
    });
    
    socket.on("mesaje", (data) => {
        console.log("%s", data,"server");
        socket.broadcast.emit("mesaje_recibe", data);
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