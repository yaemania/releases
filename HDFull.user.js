// ==UserScript==
// @name        HDfull
// @namespace   Clean HDfull, no more crap else.
// @copyright   2017+, Yaelmania
// @version     2.1.0
// @dateLast    2018.10.28
// @license     BSD
// @homepageURL https://github.com/yaemania/releases
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @updateURL	https://raw.githubusercontent.com/yaemania/releases/master/HDFull.meta.js
// @downloadURL	https://raw.githubusercontent.com/yaemania/releases/master/HDFull.user.js
// @include     *://hdfull.*/*
// @grant       unsafeWindow
// @grant       GM_deleteValue
// @grant       GM_getResourceURL
// @grant       GM_getValue
// @grant       GM_openInTab
// @grant       GM_registerMenuCommand
// @grant       GM_setValue
// @grant       GM_xmlhttpRequest
// @grant       GM.deleteValue
// @grant       GM.getResourceUrl
// @grant       GM.getValue
// @grant       GM.openInTab
// @grant       GM.setValue
// @grant       GM.xmlHttpRequest
// @grant       unsafeWindow
// ==/UserScript==

var $hf = jQuery.noConflict();

var runmehead = document.getElementsByTagName("html");
for (var i = 0; i < runmehead.length; i++) {
    runmehead[i].setAttribute("class","");
    runmehead[i].setAttribute("prefix","");
}

function clennerlink(){
  var ventana = top.location.href;
  var reso = ventana.replace(/.+\/ext\/.+/gi,'ok');
  if(reso == 'ok'){
    top.location.href = $hf( '#external-link' ).attr('href'); 
  }
  if(reso !== 'ext'){
    $hf( '.embed-selector' ).each(function() {
    $hf( this ).attr("onclick","")
  });

  $hf( '[id*="videoBox"]' ).each(function() {
    $hf( this ).parent().remove();
  });

  $hf( '.tv-wrapper, #shadow,.embed-movie, .embed-movie' ).each(function() {
    $hf( this ).remove();
  });

  $hf( '[id^="embed-selector-"]' ).each(function() {
    var sustenta = $hf( this ).attr('id').replace(/\d+/g,'');
    $hf( this ).attr('id',sustenta);
  });
}
}
setTimeout(clennerlink, 500);
