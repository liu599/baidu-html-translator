const printInfo = (node, layer) => {
  let str = '';
  for (let i = 1; i < layer; i++) {
    str += ' '
  }
  console.log(`${layer}:${str}${node.tagName} .${node.className}`);
};

export default (rootNodes, rootLayer) => {
  const roots = Array.from(rootNodes);
  const rootsLayer = []; // 单用一个数组存放每个节点的的层级

  // 初始化
  for (let i = 0; i < roots.length; i++) {
    rootsLayer.push(rootLayer)
  }
  let rootIdx = 0; // 记录当前处理roots中的第几个节点，方便查找rootsLayer中对应的层级
  while (roots.length) {
    const root = roots.shift(); // 出队
    // 如果有子节点，将子节点放到roots队列中
    if (root.children.length) {
      Array.prototype.push.apply(roots, Array.from(root.children));
      // 将当前层级加1得到子节点的层级
      rootLayer = rootsLayer[rootIdx] + 1;
      for (let i = 0; i < root.children.length; i++) {
        rootsLayer.push(rootLayer)
      }
    } else {
      // 如果没有, 执行回调函数。
      console.log('currentRoot', root);
      printInfo(root, rootsLayer[rootIdx]);
    }
    // 处理下一个root节点
    rootIdx++
  }
}
