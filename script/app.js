// ==UserScript==
// @name         Mute Medium Signup Overlay
// @namespace    https://greasyfork.org/zh-TW/users/79288
// @version      1.1
// @description  Mute Medium's annoying signup overlay
// @author       jlhg
// @match        https://medium.com/@*
// ==/UserScript==

(function() {
  'use strict';

  let buttons = document.getElementsByTagName("button");
  if (buttons.length > 0) {
    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      if (button.querySelector('svg[class="x-29px_svg__svgIcon-use"]')) {
        button.click();
        break;
      }
    }
  }
})();
