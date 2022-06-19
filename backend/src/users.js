const e = require("express");
import {
  addOnlineRoom,
  getOnlineRoom,
  deleteOnlineRoom,
} from "./controllers/matchController";
const users = [];

const addUser = ({ id, name, room, uid, photoURL }) => {
  let userInRoom = users.filter((user) => user.room === room);
  const index = users.findIndex((user) => user.uid === uid);
  if (index !== -1) users.splice(index, 1)[0];
  if (!users.find((user) => user.uid === uid) && userInRoom.length < 2) {
    const user = { id, name, room, uid, photoURL };
    users.push(user);
    addOnlineRoom(room);
    return { user };
  } else {
    return { error: "Lỗi rồi nha" };
  }

  // console.log(user);
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
