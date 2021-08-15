import React from 'react';
import Tr from './Tr';
import { useRecoilValue } from 'recoil';
import { boardState } from "../../states/game2048State";

const Table = () => {
    const { boardSize } = useRecoilValue(boardState);

    return (
        <table>
            {Array(boardSize.row).fill().map((tr, i) => <Tr key={i} rowIndex={i}/>)}
        </table>
    );
};

export default Table;