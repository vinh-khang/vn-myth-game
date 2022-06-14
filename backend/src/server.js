const http = require('http');
const express = require('express');
const cors = require('cors');
import initWebRoutes from './route/web';
import { addUser, removeUser, getUser, getUsersInRoom } from './users';

const app = express();
const server = http.createServer(app);
const socketIo = require("socket.io")(server, {
    cors: {
        origin: "*",
    }
});

socketIo.on("connection", (socket) => { ///Handle khi có connect từ client tới
    console.log("New client connected with ID: " + socket.id);

    socket.on("join", function ({ name, room }, callback) { // Handle khi có sự kiện tên là sendDataClient từ phía client
        const { error, user } = addUser({ id: socket.id, name, room });
        if (error) return callback(error);

        socket.join(user.room);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

        socketIo.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        // console.log({ room: user.room, users: getUsersInRoom(user.room) })
        callback();
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        socketIo.to(user.room).emit('message', { user: user.name, text: message });

        callback();
    });

    socket.on('actackPlayer1', (value, callback) => {
        const user = getUser(socket.id);
        socketIo.to(user.room).emit('squareActackPlayer1', value);

        callback();
    });

    socket.on('actackPlayer2', (value, callback) => {
        const user = getUser(socket.id);
        socketIo.to(user.room).emit('squareActackPlayer2', value);

        callback();
    });

    socket.on('readyForBattle1', (value) => {
        const user = getUser(socket.id);
        socketIo.to(user.room).emit('readyForBattle1', value);
    });

    socket.on('readyForBattle2', (value) => {
        const user = getUser(socket.id);
        socketIo.to(user.room).emit('readyForBattle2', value);

    });

    socket.on('actackPlayer2', (value, callback) => {
        const user = getUser(socket.id);
        socketIo.to(user.room).emit('square', { user: user.name, square: value });

        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            socketIo.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
            socketIo.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
            console.log(`${user.name} has left.`)
        }

    })

});

initWebRoutes(app);



server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));