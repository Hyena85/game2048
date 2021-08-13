import React, {useEffect} from 'react';
import Table from "./components/Table/Table";
import {
    useRecoilState, useRecoilValue
} from "recoil";
import Game2048 from "./services/Game2048";
import { tableState, gameTableState } from "./states/game2048State";

const Keyboard = {
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,
}

const App = () => {
    const [gameTable, setGameTable] = useRecoilState(gameTableState);
    const { tableSize } = useRecoilValue(tableState);
    const game = new Game2048();

    const onClickStart = () => {
        let table = game.startGame(tableSize.row, tableSize.col)
        setGameTable(table);
    };

    const onClickTest = () => {
        game.rotateLeft(gameTable);
    }

    const onKeypress = (e) => {
        if (e.keyCode === Keyboard.Down) {
            console.log("press down");
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', onKeypress);
    },[])

    return (
        <>
            <Table />
            <button onClick={onClickStart}>시작!!</button>
            <button onClick={onClickTest}>Test</button>
        </>
    );
};

export default App;