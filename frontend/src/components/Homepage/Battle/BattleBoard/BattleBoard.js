import React, { useEffect, useState } from "react";
import { useDrag, DragPreviewImage } from "react-dnd";
import { useDrop } from "react-dnd";
import './BattleBoard.scss';
import SquareBoard from "./SquareBoard/SquareBoard";

const BattleBoard = ({ targetPlayer, setTargetPlayer, readyForBattle, sendSquare, square, user, id, socket, ready, turn }) => {

    let numberOfSquare = 100;
    let battleBoard = [];
    for (let i = 1; i <= numberOfSquare; i++) {
        battleBoard.push(
            <SquareBoard
                value={i}
                id={id}
                user={user}
                sendSquare={sendSquare}
                square={square}
                setBoard={setTargetPlayer}
                board={targetPlayer}
                key={i}
                socket={socket}
                active1={id === 0 && targetPlayer.includes(i) ? true : false}
                active2={id === 1 && targetPlayer.includes(i) ? true : false}
                ready={ready}
                turn={turn}
            />
        )
    };

    let Player;
    if (user) {
        Player = user;
    }

    return (
        <>
            <div className='flex-battle-board'>
                <div className="battle-boat" >
                    {battleBoard}
                    <div>Player Name: {Player ? Player.name : ""} - ID: {id}</div>
                </div>

            </div>
            <button onClick={() => readyForBattle(id)}>Ready</button>
            <div> Ready? {ready ? 'Có' : "Không"}</div>
        </>
    );
}

export default BattleBoard;