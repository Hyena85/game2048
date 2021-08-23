import React, {useEffect} from 'react';
import Table from "../components/Table/Table";
import {
    useRecoilState, useRecoilValue
} from "recoil";
import Game2048 from "../services/Game2048";
import { boardState, gameBoardState } from "../states/game2048State";

const Keyboard = {
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,
}

const App = () => {
    const [gameBoard, setGameBoard] = useRecoilState(gameBoardState);
    const { boardSize } = useRecoilValue(boardState);
    const game2048 = new Game2048();

    const onClickStart = () => {
        let board = game2048.startGame(boardSize.row, boardSize.col)
        setGameBoard(board);
    };

    const onClickTest = () => {
        let board = game2048.addRandomBlock(gameBoard);
        setGameBoard(board);
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