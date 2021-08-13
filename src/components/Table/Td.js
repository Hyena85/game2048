import React from 'react';
import { useRecoilValue } from "recoil";
import { gameTableState } from "../../states/game2048State";

const Td = ({rowIndex, colIndex}) => {
    const gameTable = useRecoilValue(gameTableState);

    return (
        <td>{gameTable[0] && gameTable[rowIndex][colIndex]}</td>
    );
};

export default Td;