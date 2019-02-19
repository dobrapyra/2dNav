class Edge {
  constructor(a, b, { id }) {
    this.a = a;
    this.b = b;
    this.id = id;
  }

  draw(ctx) {
    ctx.moveTo(this.a.x, this.a.y);
    ctx.lineTo(this.b.x, this.b.y);
  }
}

export default Edge;
