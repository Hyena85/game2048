import React, {useEffect} from 'react';
import Table from "./Table";
import {
    atom, useRecoilState, useRecoilValue
} from "recoil";

import Game2048 from "./Game2048/Game2048";

export const tableState = atom({
    key: 'tableState',
    default: {
        tableSize: {
            row: 4,
            col: 4,
        }
    },
});

export const gameTableState = atom({
    key: 'gameTableState',
    default: [],
});

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
        // moveTable(gameTable);
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