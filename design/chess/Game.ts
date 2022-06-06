class Chess {}

class Player {
  name: string;
  isWhiteSide: boolean;
}

class Move {
  player: Player;
  start: Box;
  end: Box;
  pieceMoved: boolean;
  pieceKilled: boolean;

  constructor(player: Player, start: Box, end: Box) {
    this.player = player;
    this.start = start;
    this.end = end;
  }
}
