import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import button from '../../../assets/element/find_game_btn.png';
import buttonSoundEffect from '../../../assets/sound/button_effect/find_game_sound_effect.mp3';
import './FindBattle.scss';
import MatchTimer from "./MatchTimer/MatchTimer";

const FindBattle = () => {
    const [start, setStart] = useState(false);

    let FindMatch = () => {
        setStart(!start);
        new Audio(buttonSoundEffect).play();
    }

    return (
        <nav className="find-battle-container">
            {/* <MatchTimer start={start}></MatchTimer> */}
            <Link to='/battle-waiting' className="find-battle-content">
                <div>
                    <img src={button}
                        className="img-fluid find-battle-btn"
                        alt="Avatar's player"
                        onClick={() => FindMatch()}
                        draggable={false} />
                </div>
            </Link>
        </nav>

    );
}

export default FindBattle;