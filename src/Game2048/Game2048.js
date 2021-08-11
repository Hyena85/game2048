class Game2048 {
    rotateLeft(gameTable)  {
        const table = [...gameTable];
        let result = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        const maxCol = table[0].length;

        table.forEach((row, i) => {
            table[i] = [...gameTable[i]];
            table[i].forEach((col, j) => {
                const k = Math.abs(j - (maxCol - 1));
                result[k][i] = table[i][j];
            });
        });

        console.log('origin', table);
        console.log('rotate', result);
    };

    moveTable(gameTable) {
        const table = [...gameTable];

        table.forEach((row, i) => {
            table[i] = [...gameTable[i]];
            const filteredRow = table[i].filter(v => v !== 0 );

            table[i].forEach((col, j) => {
                table[i][j] = filteredRow[j] || 0;
            });
        });

        console.log(table);
    };

    makeRandomBlock (gameTable) {
        const table = [...gameTable];
        const emptyTable = [];

        table.forEach((row, i) => {
            row.forEach((col, j) => {
                if (table[i][j] === 0) {
                    emptyTable.push([i, j]);
                }
            });
        });

        const randomBlock = emptyTable[Math.floor(Math.random() * emptyTable.length)];
        table[randomBlock[0]] = [...gameTable[randomBlock[0]]];
        table[randomBlock[0]][randomBlock[1]] = 2;

        return table;
    }

    startGame(row, col) {
        const table = [];

        for (let i = 0; i < row; i++) {
            const rowData = [];
            table.push(rowData);
            for (let j = 0; j < col; j++) {
                rowData.push(0);
            }
        }

        return this.makeRandomBlock(this.makeRandomBlock(table));
    }

}

export default Game2048;