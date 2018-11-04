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
// import _ from 'lodash';
import BFStraversal from './BFStraversal';
import translate from './translate';

const isHTMLElement = node => typeof node === 'object' && node !== null && node.nodeType && node.nodeName;
const isString = str => typeof str === 'string';
const isArray = Array.isArray;

export default function (config) {
  config = {
    // tag selector
    container: '.cpbg',
    tags: [],
    // baidu api url
    url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
    // Max Array Length which prevents too much words.
    threshold: 5,
    splitter: '\n',
    // baidu api info
    appid: '20180111000113976',
    appKey: '2M1lNQRCPqRaILrRkf4i',
    // query string
    params: {
      from: 'zh',
      to: 'en'
    }
  };

  // BFStraversal(document.querySelectorAll(config.container), 1);

  const st = translate(config, ['苹果']);

  console.log(st, 'ddd100');
}
