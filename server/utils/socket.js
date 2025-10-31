import {Server} from "socket.io";

const UserSocketMap = {};

let io;

 export function initSocket(server){
    io = new Server(server,{
        cors: {
            origin: [process.env.FRONTEND_URL],
        },
    });

    io.on("connection",(socket)=>{
        console.log("A user connected to the server", socket.id);

        const userId = socket.handshake.query.userId;

        if (userId) UserSocketMap[userId] = socket.id;

        io.emit("getOnlineUsers", Object.keys(UserSocketMap));

        socket.on("disconnect",()=>{
            console.log("A user disconnected" ,socket.io);
            delete UserSocketMap[userId];
            io.emit("getOnlineUsers",Object.keys(UserSocketMap));
        });
 });
}

export function getReceiverSocketId(userId){
    return UserSocketMap[userId];
}
    export {io};
