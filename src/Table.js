import React from 'react';
import Tr from './Tr';
import { useRecoilValue } from 'recoil';
import {tableState} from "./App";

const Table = () => {
    const { tableSize } = useRecoilValue(tableState);

    return (
        <table>
            {Array(tableSize.row).fill().map((tr, i) => <Tr key={i} rowIndex={i}/>)}
        </table>
    );
};

export default Table;