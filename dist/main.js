!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n(1);var i=o(n(2)),s=o(n(5)),r=o(n(6));function o(e){return e&&e.__esModule?e:{default:e}}new Vue({el:"#app",data:{mode:"add_node",graph:new i.default,selectedNodes:[]},mounted:function(){this.drawEngine=new r.default(this.graph),this.canvas=document.getElementById("canvas")},methods:{onChangeModeClick:function(e){this.mode=e},onFindPathClick:function(){this.findPath()},onCanvasClick:function(e){switch(this.mode){case"add_node":this.addNode(e);break;case"select_node":this.selectNode(e,"isActive");break;case"toggle_edge":this.toggleEdge(e);break;case"remove_node":this.removeNode(e);break;case"set_src_node":this.selectNode(e,"isSrc");break;case"set_dst_node":this.selectNode(e,"isDst")}this.drawEngine.draw()},onKeyDown:function(e){switch(e.key){case"a":this.onChangeModeClick("add_node");break;case"d":case"r":this.onChangeModeClick("remove_node");break;case"s":this.onChangeModeClick("select_node");break;case"e":this.onChangeModeClick("toggle_edge");break;case"m":case"g":this.onChangeModeClick("move_node");break;case",":this.onChangeModeClick("set_src_node");break;case".":this.onChangeModeClick("set_dst_node");break;case"f":case" ":this.findPath()}},onCanvasMouseDown:function(e){switch(this.mode){case"move_node":this.beginMove(e)}this.drawEngine.draw()},beginMove:function(e){this.selectNode(e,"isActive"),this.canvas.addEventListener("mousemove",this.moveNode),this.canvas.addEventListener("mouseup",this.endMove),this.canvas.addEventListener("mouseleave",this.endMove)},endMove:function(){this.canvas.removeEventListener("mousemove",this.moveNode),this.canvas.removeEventListener("mouseup",this.endMove),this.canvas.removeEventListener("mouseleave",this.endMove)},eachNode:function(e,t,n,i){var s=null;return this.graph.nodes.forEach(function(r){t&&t(r),!s&&r.checkCollision(e.offsetX,e.offsetY)?(s=r,n&&n(r)):i&&i(r)}),s},addNode:function(e){this.graph.addNode(e.offsetX,e.offsetY),this.selectNode(e,"isActive")},selectNode:function(e,t){var n=this;this.selectedNodes=[],this.eachNode(e,null,function(e){n.selectedNodes.push(e),e.setFlag(t,!0)},function(e){e.setFlag(t,!1)})},toggleEdge:function(e){var t=this;this.eachNode(e,null,function(e){t.selectedNodes.forEach(function(n){var i=t.graph.hasEdge(n,e);i?t.graph.removeEdge(i):t.graph.addEdge(n,e)})})},removeNode:function(e){this.graph.removeNode(this.eachNode(e))},moveNode:function(e){this.selectedNodes.forEach(function(t){t.setPosition(e.offsetX,e.offsetY)}),this.drawEngine.draw()},findPath:function(){var e=null,t=null,n=new s.default,i=new s.default,r=[],o=0;if(this.graph.nodes.forEach(function(n){n.setReferer(null),n.setFlag("isPath",!1),n.setFlag("isActive",!1),n.isSrc&&(e=n),n.isDst&&(t=n)}),e)if(t){e.setFGH(t),n.add(e);for(var a=function(){o++,n.sort(function(e,t){return e.f-t.f});var e=n.at(0);n.remove(e),i.add(e),e.neighbors.forEach(function(s){i.has(s)||(n.has(s)?s.checkIsBetterFGH(e)&&(s.setReferer(e),s.setFGH(t)):(s.setReferer(e),s.setFGH(t),n.add(s)))})};!n.isEmpty();)a();if(console.log("Iteration: ",o),i.has(t)){for(var c=t;c;)c.isDst||c.isSrc||c.setFlag("isPath",!0),r.push(c),c=c.referer;r.reverse(),console.log("Path length: ",t.g),console.dir(r),this.drawEngine.draw()}else console.warn("No path to target node")}else console.warn("No target node");else console.warn("No source node")}}})},function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=o(n(3)),r=o(n(4));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.nodes=[],this.edges=[],this.lastIdTime=null}return i(e,[{key:"newId",value:function(e){var t=Date.now();return t===this.lastIdTime&&t++,this.lastIdTime=t,e+"-"+t}},{key:"addNode",value:function(e,t){var n=new s.default(e,t,{id:this.newId("node")});return this.nodes.push(n),n}},{key:"removeNode",value:function(t){var n=this;this.edges.filter(function(e){return e.a===t||e.b===t}).forEach(function(e){n.removeEdge(e)}),e.removeFromArray(this.nodes,t)}},{key:"addEdge",value:function(e,t){if(e!==t){var n=new r.default(e,t,{id:this.newId("edge")});return this.edges.push(n),e.addNeighbor(t),t.addNeighbor(e),n}}},{key:"removeEdge",value:function(t){var n=t.a,i=t.b;e.removeFromArray(n.neighbors,i),e.removeFromArray(i.neighbors,n),e.removeFromArray(this.edges,t)}},{key:"hasEdge",value:function(e,t){return this.edges.filter(function(n){return n.a===e&&n.b===t||n.a===t&&n.b===e})[0]}}],[{key:"removeFromArray",value:function(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var s=function(){function e(t,n,i){var s=i.id,r=i.neighbors;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n,this.id=s,this.neighbors=r||[],this.isActive=!1,this.isPath=!1,this.isSrc=!1,this.isDst=!1,this.f=0,this.g=0,this.h=0,this.referer=null}return i(e,[{key:"addNeighbor",value:function(e){this.neighbors.push(e)}},{key:"setFlag",value:function(e,t){"isActive"===e&&t&&(this.isPath=!1,this.isSrc=!1,this.isDst=!1),this[e]=t}},{key:"setPosition",value:function(e,t){this.x=e,this.y=t}},{key:"checkCollision",value:function(e,t){return Math.sqrt(Math.pow(this.x-e,2)+Math.pow(this.y-t,2))<5}},{key:"checkDistance",value:function(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))}},{key:"setReferer",value:function(e){this.referer=e}},{key:"setFGH",value:function(e){this.referer?this.g=this.referer.g+this.checkDistance(this.referer):this.g=0,this.h=this.checkDistance(e),this.f=this.g+this.h}},{key:"checkIsBetterFGH",value:function(e){return e.g+this.checkDistance(e)+this.h<this.f}},{key:"draw",value:function(e){e.moveTo(this.x,this.y),e.arc(this.x,this.y,5,0,2*Math.PI)}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var s=function(){function e(t,n,i){var s=i.id;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.a=t,this.b=n,this.id=s}return i(e,[{key:"draw",value:function(e){e.moveTo(this.a.x,this.a.y),e.lineTo(this.b.x,this.b.y)}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.elements=[]}return i(e,[{key:"add",value:function(e){this.elements.push(e)}},{key:"has",value:function(e){return this.elements.indexOf(e)>-1}},{key:"remove",value:function(e){var t=this.elements.indexOf(e);t>-1&&this.elements.splice(t,1)}},{key:"at",value:function(e){return this.elements[e]}},{key:"isEmpty",value:function(){return 0===this.elements.length}},{key:"sort",value:function(e){this.elements.sort(e)}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.w=this.canvas.width,this.h=this.canvas.height,this.graph=t}return i(e,[{key:"draw",value:function(){var e=this;this.ctx.clearRect(0,0,this.w,this.h),this.ctx.beginPath(),this.ctx.strokeStyle="#333333",this.ctx.strokeWidth=2,this.graph.edges.forEach(function(t){return t.draw(e.ctx)}),this.ctx.stroke(),this.ctx.closePath(),this.ctx.beginPath(),this.ctx.fillStyle="#686868",this.graph.nodes.filter(function(e){return!e.isActive&&!e.isSrc&&!e.isDst}).forEach(function(t){return t.draw(e.ctx)}),this.ctx.fill(),this.ctx.closePath(),this.ctx.beginPath(),this.ctx.fillStyle="#53abdc",this.graph.nodes.filter(function(e){return e.isActive}).forEach(function(t){return t.draw(e.ctx)}),this.ctx.fill(),this.ctx.closePath(),this.ctx.beginPath(),this.ctx.fillStyle="#5cdc52",this.graph.nodes.filter(function(e){return e.isSrc}).forEach(function(t){return t.draw(e.ctx)}),this.ctx.fill(),this.ctx.closePath(),this.ctx.beginPath(),this.ctx.fillStyle="#dc5d52",this.graph.nodes.filter(function(e){return e.isDst}).forEach(function(t){return t.draw(e.ctx)}),this.ctx.fill(),this.ctx.closePath(),this.ctx.beginPath(),this.ctx.fillStyle="#dcd052",this.graph.nodes.filter(function(e){return e.isPath}).forEach(function(t){return t.draw(e.ctx)}),this.ctx.fill(),this.ctx.closePath()}}]),e}();t.default=s}]);