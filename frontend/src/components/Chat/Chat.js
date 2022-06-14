import queryString from 'query-string';
import io from "socket.io-client";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import BattleBoard from '../Homepage/Battle/BattleBoard/BattleBoard';

import './Chat.scss';

const Chat = () => {
    const searchLocation = useLocation().search;
    const ENDPOINT = 'localhost:5000';
    let socket = '';
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [square, setSquare] = useState([]);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [net, setNet] = useState({});

    useEffect(() => {
        const { name, room } = queryString.parse(searchLocation);
        socket = io(ENDPOINT);
        setRoom(room);
        setName(name);
        setNet(socket);
        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });
    }, [ENDPOINT, searchLocation]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        });

        socket.on('square', squareValue => {
            setSquare(square => [...square, squareValue.square]);
        })

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });

    }, []);

    let sendMessage = (event) => {
        event.preventDefault();

        if (message && net) {
            net.emit('sendMessage', message, () => setMessage(''));
        }
    }

    let sendSquare = (value) => {
        if (value && net) {
            net.emit('actackSquare', value, () => setSquare([...square, value]));
        }
    }


    return (
        <div className="container">
            <InfoBar room={room} />
            <Messages messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            <BattleBoard square={square} setSquare={setSquare} sendSquare={sendSquare} />
        </div>
    );
}

export default Chat;