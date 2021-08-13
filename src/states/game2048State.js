import { atom } from "recoil";

export const tableState = atom ({
    key: 'tableSate',
    default: {
        tableSize: {
            row: 4,
            col: 4,
        },
    },
});

export const gameTableState = atom({
    key: 'gameTableState',
    default: [],
});