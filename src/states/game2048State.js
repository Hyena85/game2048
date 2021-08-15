import { atom } from "recoil";

export const boardState = atom ({
    key: 'boardState',
    default: {
        boardSize: {
            row: 4,
            col: 4,
        },
    },
});

export const gameBoardState = atom({
    key: 'gameBoardState',
    default: [],
});