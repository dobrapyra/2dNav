class Node {
  constructor(x, y, { id, neighbors }) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.neighbors = neighbors || [];
    this.isActive = false;
  }

  addNeighbor(node) {
    this.neighbors.push(node);
  }

  setActive(activeState) {
    this.isActive = activeState;
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
