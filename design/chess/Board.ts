class Board {
  boxes: Box[][];

  initializeBoard(): void {
    // white team
    this.setPawns(6, true);
    this.setRook(7, 0, true);
    this.setRook(7, 7, true);
    this.setKnight(7, 1, true);
    this.setKnight(7, 6, true);
    this.setBishop(7, 2, true);
    this.setBishop(7, 5, true);
    this.setKing(7, 3, true);
    this.setQueen(7, 4, true);

    // black team
    this.setPawns(1, false);
    this.setRook(0, 0, false);
    this.setRook(0, 7, false);
    this.setKnight(0, 1, false);
    this.setKnight(0, 6, false);
    this.setBishop(0, 2, false);
    this.setBishop(0, 5, false);
    this.setKing(0, 4, false);
    this.setQueen(0, 3, false);

    for (let i = 2; i < 6; i++) {
      for (let j = 0; j < 8; j++) {
        this.boxes[i][j] = new Box(null, i, j);
      }
    }
  }

  getBox(row: number, col: number): Box {
    if (row < 0 || row > 7 || col < 0 || col > 7) {
      throw new Error("Illegal index");
    }

    return this.boxes[row][col];
  }

  getBoard(): Box[][] {
    return this.boxes;
  }

  setQueen(row: number, col: number, white: boolean): void {
    let piece = new Queen(white);
    this.boxes[row][col] = new Box(piece, row, col);
  }

  setKing(row: number, col: number, white: boolean): void {
    let piece = new King(white);
    this.boxes[row][col] = new Box(piece, row, col);
  }

  setRook(row: number, col: number, white: boolean): void {
    let piece = new Rook(white);
    this.boxes[row][col] = new Box(piece, row, col);
  }

  setKnight(row: number, col: number, white: boolean): void {
    let piece = new Knight(white);
    this.boxes[row][col] = new Box(piece, row, col);
  }

  setBishop(row: number, col: number, white: boolean): void {
    let piece = new Bishop(white);
    this.boxes[row][col] = new Box(piece, row, col);
  }

  setPawns(row, white): void {
    for (let col = 0; col < 8; col++) {
      let piece = new Pawn(white);
      this.boxes[row][col] = new Box(piece, row, col);
    }
  }
}
