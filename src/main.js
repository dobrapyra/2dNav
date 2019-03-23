/* globals Vue */
import './scss/main.scss';
import Graph from './graph';
import List from './List';
import DrawEngine from './drawEngine';

new Vue({
  el: '#app',
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
    onFindPathClick() {
      this.findPath();
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
    onKeyDown(e) {
      switch(e.key) {
      case 'a':
        this.onChangeModeClick('add_node');
        break;
      case 'd':
      case 'r':
        this.onChangeModeClick('remove_node');
        break;
      case 's':
        this.onChangeModeClick('select_node');
        break;
      case 'e':
        this.onChangeModeClick('toggle_edge');
        break;
      case 'm':
      case 'g':
        this.onChangeModeClick('move_node');
        break;
      case ',':
        this.onChangeModeClick('set_src_node');
        break;
      case '.':
        this.onChangeModeClick('set_dst_node');
        break;
      case 'f':
      case ' ':
        this.findPath();
        break;
      default: break;
      }
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
    findPath() { 
      let srcNode = null, dstNode = null,
        openList = new List(),
        closeList = new List(),
        path = [], iterations = 0;

      this.graph.nodes.forEach(node => {
        node.setReferer(null);
        node.setFlag('isPath', false);
        node.setFlag('isActive', false);
        if (node.isSrc) srcNode = node;
        if (node.isDst) dstNode = node;
      });

      if( !srcNode ) {
        console.warn('No source node'); // eslint-disable-line no-console
        return;
      }

      if( !dstNode ) {
        console.warn('No target node'); // eslint-disable-line no-console
        return;
      }

      srcNode.setFGH(dstNode);
      openList.add(srcNode);

      while (!openList.isEmpty()) {
        iterations++;

        openList.sort((a, b) => (a.f - b.f));
        const currentNode = openList.at(0);

        openList.remove(currentNode);
        closeList.add(currentNode);

        currentNode.neighbors.forEach(node => {
          if (closeList.has(node)) return;
          if (openList.has(node)) {
            if (node.checkIsBetterFGH(currentNode)) {
              node.setReferer(currentNode);
              node.setFGH(dstNode);
            }
            return;
          }
          node.setReferer(currentNode);
          node.setFGH(dstNode);
          openList.add(node);
        });
      }

      console.log('Iteration: ', iterations); // eslint-disable-line no-console
      if (closeList.has(dstNode)) {
        let referer = dstNode;
        while (referer) {
          if (!referer.isDst && !referer.isSrc) referer.setFlag('isPath', true);
          path.push(referer);
          referer = referer.referer;
        }
        path.reverse();
        console.log('Path length: ', dstNode.g); // eslint-disable-line no-console
        console.dir(path); // eslint-disable-line no-console
        this.drawEngine.draw();
      } else {
        console.warn('No path to target node'); // eslint-disable-line no-console
      }
    },
  }
});
