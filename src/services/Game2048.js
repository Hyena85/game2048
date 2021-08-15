class Game2048 {
    getBoard(gameBoard) {
        const table = [...gameBoard];
        let result = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];

        table.forEach((row, i) => {
            table[i] = [...gameBoard[i]];
            table[i].forEach((col, j) => {
                result[i][j] = table[i][j];
            });
        });

        return result;
    }

    startGame(row, col) {
        const board = [];

        for (let i = 0; i < row; i++) {
            const rowData = [];
            board.push(rowData);
            for (let j = 0; j < col; j++) {
                rowData.push(0);
            }
        }

        return this.addRandomBlock(this.addRandomBlock(board));
    }

    rotateLeft(gameBoard, direction)  {
        const board = this.getBoard(gameBoard);
        // const count = 37- direction;
        //
        // let result = [
        //     [0, 0, 0, 0],
        //     [0, 0, 0, 0],
        //     [0, 0, 0, 0],
        //     [0, 0, 0, 0]
        // ];
        // const maxCol = table[0].length;
        //
        // table.forEach((row, i) => {
        //     table[i] = [...gameTable[i]];
        //     table[i].forEach((col, j) => {
        //         const k = Math.abs(j - (maxCol - 1));
        //         result[k][i] = table[i][j];
        //     });
        // });

        board[1][1] = 2;

        console.log('origin', board);
        return board;
    };

    moveTable(gameBoard) {
        const board = [...gameBoard];

        board.forEach((row, i) => {
            board[i] = [...gameBoard[i]];
            const filteredRow = board[i].filter(v => v !== 0 );

            board[i].forEach((col, j) => {
                board[i][j] = filteredRow[j] || 0;
            });
        });

        console.log(board);
    };

    addRandomBlock (gameBoard) {
        const board = [...gameBoard];
        const emptyBoard = [];

        board.forEach((row, i) => {
            row.forEach((col, j) => {
                if (board[i][j] === 0) {
                    emptyBoard.push([i, j]);
                }
            });
        });

        const randomBlock = emptyBoard[Math.floor(Math.random() * emptyBoard.length)];
        board[randomBlock[0]] = [...gameBoard[randomBlock[0]]];
        board[randomBlock[0]][randomBlock[1]] = 2;

        return board;
    }
}

export default Game2048;