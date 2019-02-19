import Node from './node';
import Edge from './edge';

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
    this.lastIdTime = null;
  }

  static removeFromArray(array, element) {
    const index = array.indexOf(element);
    if( index > -1 ) {
      array.splice(index, 1);
    }
  }

  newId(prefix) {
    let now = Date.now();
    if( now === this.lastIdTime ) now++;

    this.lastIdTime = now;
    return `${prefix}-${now}`;
  }

  addNode(x, y) {
    const node = new Node(x, y, {
      id: this.newId('node'),
    });

    this.nodes.push(node);

    return node;
  }

  removeNode(node) {
    const edgesToRemove = this.edges.filter(edge => (
      edge.a === node || edge.b === node)
    );
    edgesToRemove.forEach(edge => {
      this.removeEdge(edge);
    });

    Graph.removeFromArray(this.nodes, node);
  }

  addEdge(a, b) {
    if( a === b ) return;

    const edge = new Edge(a, b, {
      id: this.newId('edge'),
    });

    this.edges.push(edge);

    a.addNeighbor(b);
    b.addNeighbor(a);

    return edge;
  }

  removeEdge(edge) {
    const {a, b} = edge;

    Graph.removeFromArray(a.neighbors, b);
    Graph.removeFromArray(b.neighbors, a);

    Graph.removeFromArray(this.edges, edge);
  }

  hasEdge(a, b) {
    return this.edges.filter(edge => (
      ( edge.a === a && edge.b === b ) || 
      ( edge.a === b && edge.b === a )
    ))[0];
  }

}

export default Graph;
