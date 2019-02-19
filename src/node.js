class Node {
  constructor(x, y, { id, neighbors }) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.neighbors = neighbors || [];
    this.isActive = false;
    this.isSrc = false;
    this.isDst = false;
  }

  addNeighbor(node) {
    this.neighbors.push(node);
  }

  setFlag(flag, flagState) {
    if (flag === 'isActive') {
      if (flagState) {
        this.isSrc = false;
        this.isDst = false;
      }
    }

    this[flag] = flagState;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  checkCollision(x, y) {
    return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2)) < 5;
  }

  draw(ctx) {
    ctx.moveTo(this.x, this.y);
    ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
  }
}

export default Node;
