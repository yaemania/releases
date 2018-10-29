// ==UserScript==
// @name        VaughnLive.tv
// @namespace   Clean VaughnLive to see only player, no more crap else, also add-on for me web page http://yaelmania.co.nf
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @updateURL   https://raw.githubusercontent.com/yaemania/releases/master/VaughnLive(tv).meta.js
// @downloadURL	https://raw.githubusercontent.com/yaemania/releases/master/VaughnLive(tv).user.js
// @include     *://vaughnlive.tv*
// @exclude     *://vaughnlive.tv/*chat*
// @version     1.7
// @dateLast    2018.10.28
// @grant       none
// ==/UserScript==

var $vg = jQuery.noConflict();
function geto(){
  if(window.location.href.indexOf('embed') > -1 && window.location.href.indexOf('chat') < 0 && top.window.location.href.indexOf('vaughnlive') > -1) {
  	var getadrres = document.location.href;
  	var nukelii = getadrres.replace(/\?viewers.+/gi,'');
  	var stuped = nukelii.replace(/.+embed\/video\//gi,'http://vaughnlive.tv/');
    $vg('body').html('<a id="dumyclik" hres="'+stuped+'" target="_blank">Click aqui para ver</a>');
    window.open(stuped);
  }
  $vg( '#loading,#upperVaughnRight,.abvsDynamic,[class^="height"],.header,[id^="modal"],.vaughnMid,.vaughnRight,.clear,.channelAboutWrapper,.videoStatsWrapper,.videoStatus,.footerWrapper,[id*="chat"],#dashboardWindow,#mvn,.topBarV2headerSpacer,.header_spacer,[style*="-5000"],.videoHeaderImage' ).each(function() {
  	$vg( this ).remove();
  });
  setTimeout(master, 2500);
}
function master(){
  $vg( 'script,noscript' ).each(function() {
    $vg( this ).remove();
  });
}
setTimeout(geto, 1500);
