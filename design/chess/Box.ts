class Box {
  x: number;
  y: number;
  piece: Piece;

  constructor(piece: Piece, x: number, y: number) {
    this.setX(x);
    this.setY(y);
    this.setPiece(piece);
  }

  setPiece(piece: Piece): void {
    this.piece = piece;
  }

  setY(y: number): void {
    this.y = y;
  }

  setX(x: number): void {
    this.x = x;
  }

  getY(): number {
    return this.y;
  }

  getPiece(): Piece {
    return this.piece;
  }

  getX(): number {
    return this.x;
  }
}
