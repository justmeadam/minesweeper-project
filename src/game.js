import { Board } from './board';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    //If there is a bomb at flipped location, tell player they lost
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Game Over! Here was the Final Board:');
      this._board.print();
    }
    //If there is not a bomb at flipped location and game is not over
    else if (!this._board.hasNonBombEmptySpaces()) {
      console.log('Congratulations, you won!');
    } else {
      console.log('Current board:');
      this._board.print();
    }
  }
}
