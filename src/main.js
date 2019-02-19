/* globals Vue */
import Graph from './graph';
import DrawEngine from './drawEngine';

new Vue({
  el: '#tools',
  data: {
    mode: 'add_node',
    graph: new Graph(),
    selectedNodes: [],
  },
  mounted() {
    this.drawEngine = new DrawEngine(this.graph);
    this.canvas = document.getElementById('canvas');
  },
  methods: {
    onChangeModeClick(mode) {
      this.mode = mode;
    },
    onCanvasClick(e) {
      switch(this.mode) {
      case 'add_node':
        this.addNode(e);
        break;
      case 'select_node':
        this.selectNode(e, 'isActive');
        break;
      case 'toggle_edge':
        this.toggleEdge(e);
        break;
      case 'remove_node':
        this.removeNode(e);
        break;
      case 'set_src_node':
        this.selectNode(e, 'isSrc');
        break;
      case 'set_dst_node':
        this.selectNode(e, 'isDst');
        break;
      default: break;
      }
      this.drawEngine.draw();
    },
    onCanvasMouseDown(e) {
      switch(this.mode) {
      case 'move_node':
        this.beginMove(e);
        break;
      default: break;
      }
      this.drawEngine.draw();
    },
    beginMove(e) {
      this.selectNode(e, 'isActive');
      this.canvas.addEventListener('mousemove', this.moveNode);
      this.canvas.addEventListener('mouseup', this.endMove);
      this.canvas.addEventListener('mouseleave', this.endMove);
    },
    endMove() {
      this.canvas.removeEventListener('mousemove', this.moveNode);
      this.canvas.removeEventListener('mouseup', this.endMove);
      this.canvas.removeEventListener('mouseleave', this.endMove);
    },
    eachNode(e, allCallback, activeCallback, inactiveCallback) {
      let activeNode = null;
      this.graph.nodes.forEach(node => {
        allCallback && allCallback(node);
        if (!activeNode && node.checkCollision(e.offsetX, e.offsetY)) {
          activeNode = node;
          activeCallback && activeCallback(node);
        } else {
          inactiveCallback && inactiveCallback(node);
        }
      });
      return activeNode;
    },
    addNode(e) {
      this.graph.addNode(e.offsetX, e.offsetY);
      this.selectNode(e, 'isActive');
    },
    selectNode(e, flag) {
      this.selectedNodes = [];
      this.eachNode(e, null, activeNode => {
        this.selectedNodes.push(activeNode);
        activeNode.setFlag(flag, true);
      }, inactiveNode => {
        inactiveNode.setFlag(flag, false);
      });
    },
    toggleEdge(e) {
      this.eachNode(e, null, activeNode => {
        this.selectedNodes.forEach(selectedNode => {
          const edge = this.graph.hasEdge(selectedNode, activeNode);
          if (edge) {
            this.graph.removeEdge(edge);
          } else {
            this.graph.addEdge(selectedNode, activeNode);
          }
        });
      });
    },
    removeNode(e) {
      this.graph.removeNode(this.eachNode(e));
    },
    moveNode(e) {
      this.selectedNodes.forEach(selectedNode => {
        selectedNode.setPosition(e.offsetX, e.offsetY);
      });
      this.drawEngine.draw();
    },
  }
});
