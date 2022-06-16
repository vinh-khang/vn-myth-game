import React from "react";
import io from "socket.io-client";

export const socket = io(process.env.REACT_APP_ENDPOINT);
export const SocketContext = React.createContext();
