// ==UserScript==
// @name        IntercambiosVirtuales Ocultos
// @namespace   Clener.
// @copyright   2017+, Yaelmania
// @version     1.1.0
// @dateLast    2018.10.29
// @license     BSD
// @homepageURL https://github.com/yaemania/releases
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @updateURL   https://raw.githubusercontent.com/yaemania/releases/master/InterambiosVirtuales.meta.js
// @downloadURL https://raw.githubusercontent.com/yaemania/releases/master/InterambiosVirtuales.user.js
// @include     *://intercambiosvirtuales.*/*
// @include     *://ocul.to/*
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

var $iv = jQuery.noConflict();
   
function fuckredirect(){
$iv(function() {
	$iv( '.users-online, #chativ' ).each(function() {
		$iv(this).parent().remove();
	});
	$iv('#seguidores, #sidebar div.title:contains("Comparte con Nosotros…"), #wp-discord, #sidebar div.title:contains("Usuarios en línea")').each(function() {
    	$iv(this).remove();
  	});
	$iv( '#postcontent div fieldset div div span a' ).each(function() {
		var string = $iv( this ).attr('href').replace(/.+li\/\?/g,'');
  		$iv( this ).attr('href',string);
	});
}
setTimeout(fuckredirect, 500)
