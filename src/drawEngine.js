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
    const inactiveNodes = this.graph.nodes.filter(node => !node.isActive);
    inactiveNodes.forEach(node => node.draw(this.ctx));
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.fillStyle = '#54dc54';
    const activeNodes = this.graph.nodes.filter(node => node.isActive);
    activeNodes.forEach(node => node.draw(this.ctx));
    this.ctx.fill();
    this.ctx.closePath();
  }
}

export default DrawEngine;
