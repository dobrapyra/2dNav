class DrawEngine {
  constructor(graph) {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.w = this.canvas.width;
    this.h = this.canvas.height;
    this.graph = graph;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.w, this.h);

    this.ctx.beginPath();
    this.ctx.strokeStyle = '#333333';
    this.ctx.strokeWidth = 2;
    this.graph.edges.forEach(edge => edge.draw(this.ctx));
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.fillStyle = '#686868';
    const inactiveNodes = this.graph.nodes.filter(node => !node.isActive && !node.isSrc && !node.isDst);
    inactiveNodes.forEach(node => node.draw(this.ctx));
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.fillStyle = '#53abdc';
    const activeNodes = this.graph.nodes.filter(node => node.isActive);
    activeNodes.forEach(node => node.draw(this.ctx));
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.fillStyle = '#5cdc52';
    const srcNodes = this.graph.nodes.filter(node => node.isSrc);
    srcNodes.forEach(node => node.draw(this.ctx));
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.fillStyle = '#dc5d52';
    const dstNodes = this.graph.nodes.filter(node => node.isDst);
    dstNodes.forEach(node => node.draw(this.ctx));
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.fillStyle = '#dcd052';
    const pathNodes = this.graph.nodes.filter(node => node.isPath);
    pathNodes.forEach(node => node.draw(this.ctx));
    this.ctx.fill();
    this.ctx.closePath();
  }
}

export default DrawEngine;
