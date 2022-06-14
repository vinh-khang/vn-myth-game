import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import { useDrag, useDrop, DragPreviewImage } from "react-dnd";
import { getEmptyImage } from 'react-dnd-html5-backend'
import anya from '../../../../../assets/anya.jpg';
import './SquareBoard.scss';

const SquareBoard = ({ sendSquare, square, value, setBoard, board, active1, active2, selected, id, socket, user, turn, ready }) => {
    const [style, setStyle] = useState({ opacity: "1.0" });
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: "image",
        item: { id: "tau1" },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (item) => {
        if (item.id) {
            setBoard([value, value - 1, value + 1]);
        }
    };

    let squareClass1 = 'squareOfBattleBoard';
    let squareClass2 = 'squareOfBattleBoard';
    let dragBoat1 = drop;
    let dragBoat2 = drop;

    if (id === 0 && active1 && user && socket === user.id) {
        squareClass1 = 'placeOfBoat';
        if (!ready) {
            dragBoat1 = drag;
        }

    } else if (id === 1 && active2 && user && socket === user.id) {
        squareClass2 = 'placeOfBoat';
        if (!ready) {
            dragBoat2 = drag;
        }
    }

    if (square.includes(value)) {
        if (board.includes(value)) {
            squareClass1 = `${squareClass1} boom`;
            squareClass2 = `${squareClass2} boom`;

        } else {
            squareClass1 = `${squareClass1} miss`;
            squareClass2 = `${squareClass2} miss`;
        }

    }

    return (
        <>
            <DragPreviewImage connect={preview} className="drag-preview" src={anya} />
            <div
                className={id === 0 ? squareClass1 : squareClass2}
                key={value}
                ref={id === 0 ? dragBoat1 : dragBoat2}
                style={style}
                onClick={ready && turn === id ? () => sendSquare(value, id, user.id) : undefined}
            >
            </div>
        </>
    )


};

export default SquareBoard;