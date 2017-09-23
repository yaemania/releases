// ==UserScript==
// @name        VaughnLive.tv
// @namespace   Clean VaughnLive to see only player, no more crap else, also add-on for me web page http://yaelmania.co.nf
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @updateURL	https://raw.githubusercontent.com/yaemania/releases/master/VaughnLive(tv).meta.js
// @downloadURL	https://raw.githubusercontent.com/yaemania/releases/master/VaughnLive(tv).user.js
// @include     *://vaughnlive.tv*
// @exclude     *://vaughnlive.tv/*chat*
// @version     1.7
// @dateLast	2017.09.23
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
  $vg('#upperVaughnLeft').append(unescape('%3Cstyle%3E.MvnAbvsLowerThirdWrapper%2C%23MvnAbvsLowerThirdWrapper%2C%23loading%2C%23upperVaughnRight.vaughnRight%2C.vaughnRight%2C.channelAboutWrapper%2C.abvsDynamic%2C.videoStatsWrapper%2C.footerWrapper%2C.videoStatus%2C.videoHeaderImage%2C.header%2C%5Bclass%5E%3D%22height%22%5D%7Bposition%3Aabsolute%21important%3Btop%3A-999px%21important%3B left%3A-999px%21important%3B max-width%3A 0.01em%21important%3B max-height%3A 0.01em%21important%3B width%3A0.01em%21important%3B height%3A0.01em%21important%3B color%3Atransparent%21important%3B font-size%3A0.01em%21important%3B font-size-adjust%3A0.01%21important%3B background%3Anone%21important%3B background-color%3Atransparent%21important%3B background-image%3Anone%21important%3B background-repeat%3Ano-repeat%21important%3B%7D%3C%2Fstyle%3E'));
}
setTimeout(geto, 1500);