// ==UserScript==
// @name         屏蔽小黄脸
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  屏蔽BiliBili自带的小黄脸表情
// @match        *.bilibili.com/*
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  const style = document.createElement('style')
  style.innerHTML = '.small {display:none}'
  console.log('style', style, document.head)
  document.head.appendChild(style)
})();