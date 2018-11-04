var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * BAIDU-HTML-TRANSLATE
 * PIPELINE
 * 1. BFS NODE SCAN
 * 2. BAIDU-API TRANSLATE
 * 3. ADD THE TRANSLATE TEXT BACK TO NODE
 * @param node
 * @returns {boolean|ActiveX.IXMLDOMNodeType|number|string}
 */

// Load the full build.
import _ from 'lodash';
import BFStraversal from './BFStraversal';

var isHTMLElement = function isHTMLElement(node) {
  return (typeof node === 'undefined' ? 'undefined' : _typeof(node)) === 'object' && node !== null && node.nodeType && node.nodeName;
};
var isString = function isString(str) {
  return typeof str === 'string';
};
var isArray = Array.isArray;

export default function (config) {
  var bbc = _.chunk(['a', 'b', 'c', 'd'], 3);
  console.log(bbc);

  config = {
    container: '.cpbg',
    tags: []
  };

  BFStraversal(document.querySelectorAll(config.container), 1);
}