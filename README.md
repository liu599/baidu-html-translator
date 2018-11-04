# baidu-html-translator

一个中英文转换插件

## 使用方法

```html
  <script src="md5.js"></script>
  <script src="baiduTranslator.js"></script>
```

在html中调用`baiduHtmlTranslator(config, mode, replacement);`。

## 参数格式

**baiduHtmlTranslator** 接受三个参数`config, mode, replacement`。

### config

- 类型: Object
- 结构: 

```
  {
    // jQuery 调用的Dom, 节点要唯一。
    container: ['.cpbg']
    // 百度API的地址
    url: 'http://fanyi-api.baidu.com/api/trans/vip/translate',
    // 发送AJAX请求的阈值。积累多少个文本节点后才发送AJAX请求。
    // 如果有大段的文字需要翻译, 建议小于10
    // 如果有多个分散的文字数量稀少的文本节点可以提高此阈值
    threshold: 5,
    // 文本翻译的分割符号, 百度API建议使用回车符号 \n
    splitter: '\n',
    // 百度API的ID和Key
    appid: '<app id>',
    appKey: '<app key>',
    // 百度API中译英的参数
    params: {
      from: 'zh',
      to: 'en'
    }
  };
```

### mode

- 类型: String
- 值: 只有`write`或者`read`两种值, 
  - read: 默认值, 可以省略, 此时该函数返回一个promise, resolve的值为一个对象。
  
    ```
      {
         beforeTranslation: [所有翻译之前的字符],
         afterTranslation: [翻译之后的字符]
      }
    ```
  
  - write: 此时函数没有返回值, 是将replacement中的数值写入的操作。 

### replacement

- 类型: Array
- 值: 默认值为空, 当mode为`write`时, 会将数组内的字符串按照顺序替换DOM中的文本节点, 可以用这个功能在原文和翻译之间切换

## 案例

`npm start` 查看。

## 版本发布:

- 0.1.0版: 初版发布。基本功能实现。
- 0.2.0版: 第二版, 加入`Promise, Object.assign, Array.from`的polyfill, 简单的兼容性修复。

