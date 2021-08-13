import React from 'react';
import {useRecoilValue} from "recoil";
import Td from "./Td";
import { tableState } from "../../states/game2048State";

const Tr = ({ rowIndex }) => {
    const { tableSize } = useRecoilValue(tableState);

    return (
        <tr>
            {Array(tableSize.col).fill().map((td, i) => <Td key={i} rowIndex={rowIndex} colIndex={i}/>)}
        </tr>
    );
};

export default Tr;