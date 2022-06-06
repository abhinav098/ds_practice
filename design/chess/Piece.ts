abstract class Piece {
  white = false;
  killed = false;

  constructor(white: boolean) {
    this.white = white;
  }

  public isKilled(): boolean {
    return this.killed === true;
  }

  public isWhite(): boolean {
    return this.white === true;
  }

  public setWhite(white: boolean): void {
    this.white = true;
  }

  public setKilled(killed: boolean): void {
    this.killed = true;
  }

  abstract canMove(board: Board, start: Box, end: Box);
}

class King extends Piece {
  constructor(isWhite: boolean) {
    super(isWhite);
  }

  canMove(board: Board, start: Box, end: Box) {
    if (end.getPiece() && end.getPiece().isWhite() == this.isWhite()) {
      return false;
    }

    let x = Math.abs(start.getX() - end.getX());
    let y = Math.abs(start.getY() - end.getY());
    if (x + y === 2 || x + y === 1) {
      return true;
    }

    return false;
  }
}

class Queen extends Piece {
  canMove(board: Board, start: Box, end: Box) {
    if (end.getPiece() && end.getPiece().isWhite() == this.isWhite()) {
      return false;
    }

    let x = Math.abs(start.getX() - end.getX());
    let y = Math.abs(start.getY() - end.getY());

    if (x === 0 || y === 0 || x === y) {
      return true;
    }

    return false;
  }
}

class Knight extends Piece {
  constructor(white: boolean) {
    super(white);
  }

  canMove(board: Board, start: Box, end: Box): Boolean {
    if (end.getPiece() && end.getPiece().isWhite() == this.isWhite()) {
      return false;
    }

    let x = Math.abs(start.getX() - end.getX());
    let y = Math.abs(start.getY() - end.getY());

    if (x * y === 2) {
      return true;
    }

    return false;
  }
}

class Pawn extends Piece {
  constructor(white: boolean) {
    super(white);
  }

  canMove(board: Board, start: Box, end: Box) {
    if (end.getPiece() && end.getPiece().isWhite() == this.isWhite()) {
      return false;
    }

    let x = start.getX() - end.getX();
    let y = Math.abs(start.getY() - end.getY());

    // check for black forward direction 0,1 rows
    if (!this.isWhite() && x == -1 && y == 0) {
      return true;
    }

    // check for white forward direction (6,7)th rows
    if (this.isWhite() && x == 1 && y == 0) {
      return true;
    }

    // check for killing position
    if (end.getPiece().isWhite() != this.isWhite()) {
      if (this.isWhite()) {
        return y === 1 && x === -1;
      } else {
        return y === 1 && x === 1;
      }
    }

    return false;
  }
}

class Rook extends Piece {
  constructor(white: boolean) {
    super(white);
  }

  canMove(board: Board, start: Box, end: Box) {
    if (end.getPiece() && end.getPiece().isWhite() == this.isWhite()) {
      return false;
    }

    let x = Math.abs(start.getX() - end.getX());
    let y = Math.abs(start.getY() - end.getY());

    if (x === 0 || y === 0) {
      return true;
    }

    return false;
  }
}

class Bishop extends Piece {
  constructor(white: boolean) {
    super(white);
  }

  canMove(board: Board, start: Box, end: Box) {
    if (end.getPiece() && end.getPiece().isWhite() == this.isWhite()) {
      return false;
    }

    let x = Math.abs(start.getX() - end.getX());
    let y = Math.abs(start.getY() - end.getY());

    if (x === y) {
      return true;
    }

    return false;
  }
}
