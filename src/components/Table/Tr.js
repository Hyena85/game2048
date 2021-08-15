import React from 'react';
import {useRecoilValue} from "recoil";
import Td from "./Td";
import { boardState } from "../../states/game2048State";

const Tr = ({ rowIndex }) => {
    const { boardSize } = useRecoilValue(boardState);

    return (
        <tr>
            {Array(boardSize.col).fill().map((td, i) => <Td key={i} rowIndex={rowIndex} colIndex={i}/>)}
        </tr>
    );
};

export default Tr;