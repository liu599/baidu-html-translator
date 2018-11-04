import axios from 'axios';
import md5 from 'md5';

const qs = require('qs');

const utf8 = require('utf8');

const defaultConfig = {
  threshold: 10,
  splitter: '------'
};

const generateSign =
  ({
    appid,
    appKey
  }, content, salt) => {

  // appid+q+salt+密钥
  console.log('cc', content);
  // console.log(md5(`${appid}${content}${salt}${appKey}`));
  // console.log(md5(`${appid}苹果${salt}${appKey}`));
  return md5(`${appid}${content}${salt}${appKey}`);
};

const translate =
  ({
     url,
     appid,
     appKey,
     params
    },
    stringsWaitingForTranslation,
    signs,
    salts
  ) => {
    const q = stringsWaitingForTranslation[0];
    const queryString = Object.assign({}, {
      q,
      from: params.from,
      to: params.to,
      sign: signs[0],
      salt: salts[0],
      appid
    });

    console.log(url, queryString, qs.stringify(queryString));

    axios.post(url, qs.stringify(queryString)).then(res => console.log(res));
  };

export default (config, contentList) => {
  /**
   * 1. Split the contentList Array and link to one string
   * 2. Ajax Call
   * 3. Convert the return string back to list array
   */

  // Merge the user config with default config
  const currentConfig = Object.assign({}, defaultConfig, config);

  // console.log(currentConfig.threshold, contentList.length);

  // strings
  let stringsWaitingForTranslation = [];
  // signs
  let signs = [];
  // salts
  let salts = [];
  // temp string
  let temp = '';
  let salt = '';
  for (let i = 0; i < contentList.length; i += 1) {
    if (Math.floor(i / currentConfig.threshold) > stringsWaitingForTranslation.length) {
      stringsWaitingForTranslation.push(temp);
      salt = new Date().getTime();
      salts.push(salt);
      signs.push(generateSign(currentConfig, temp, salt));

      temp = '';
    }
    temp += contentList[i] + currentConfig.splitter;
  }
  salt = new Date().getTime();
  salts.push(salt);
  stringsWaitingForTranslation.push(temp);
  signs.push(generateSign(currentConfig, temp, salt));

  translate(currentConfig, stringsWaitingForTranslation, signs, salts);

  return {
    stringsWaitingForTranslation,
    signs
  };
}
