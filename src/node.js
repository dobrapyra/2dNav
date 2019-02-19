class Node {
  constructor(x, y, { id, neighbors }) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.neighbors = neighbors || [];
    this.isActive = false;
    this.isPath = false;
    this.isSrc = false;
    this.isDst = false;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.referer = null;
  }

  addNeighbor(node) {
    this.neighbors.push(node);
  }

  setFlag(flag, flagState) {
    if (flag === 'isActive') {
      if (flagState) {
        this.isPath = false;
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

  checkDistance(node) {
    return Math.sqrt(Math.pow(this.x - node.x, 2) + Math.pow(this.y - node.y, 2));
  }

  setReferer(referer) {
    this.referer = referer;
  }

  setFGH(targetNode) {
    if (!this.referer) {
      this.g = 0;
    } else {
      this.g = this.referer.g + this.checkDistance(this.referer);
    }
    this.h = this.checkDistance(targetNode);
    this.f = this.g + this.h;
  }

  checkIsBetterFGH(referer) {
    const g = referer.g + this.checkDistance(referer);
    return (g + this.h) < this.f;
  }

  draw(ctx) {
    ctx.moveTo(this.x, this.y);
    ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
  }
}

export default Node;
