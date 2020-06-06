// ==UserScript==
// @name         Popup remover
// @namespace    https://github.com/Phillip2025/popup-remover
// @version      0.1.0
// @description  Tampermonkey script to remove annoying subscription popup on online journals when adblock is on
// @author       phillip2025
// @match        https://elpais.com/*
// @match        https://www.20minutos.es/*
// @grant        GM_log
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    let tries = 0;
    let timer = setInterval(function(){
        let elems = unsafeWindow.document.getElementsByClassName('fc-ab-root');

        if (elems.length > 0) {
            GM_log("founded popup");
            let ab = elems[0];
            //elems[0].parentNode.removeChild(elems[0]);
            elems[0].remove();
            GM_log("removed popup");
            unsafeWindow.document.body.style.overflow = 'visible';
            GM_log("overflow restored");
            clearInterval(timer);
        }

        tries++;
        if (tries > 10) {
            GM_log("time exceeded");
            clearInterval(timer);
        }
    }, 1000);

})();
