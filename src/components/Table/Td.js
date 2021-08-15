import React from 'react';
import { useRecoilValue } from "recoil";
import { gameBoardState } from "../../states/game2048State";

const Td = ({rowIndex, colIndex}) => {
    const gameBoard = useRecoilValue(gameBoardState);

    return (
        <td>{gameBoard[0] && gameBoard[rowIndex][colIndex]}</td>
    );
};

export default Td;