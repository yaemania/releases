// ==UserScript==
// @name        VaughnLive.tv
// @namespace   Clean VaughnLive to see only player, no more crap else, also add-on from me web page http://yaelmania.co.nf
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @updateURL 	https://raw.githubusercontent.com/yaemania/releases/master/VaughnLive(tv).meta.js
// @downloadURL	https://raw.githubusercontent.com/yaemania/releases/master/VaughnLive(tv).user.js
// @include     *://vaughn*
// @exclude     *://vaughn*/*chat*
// @version     2.3
// @dateLast  	2019.05.19
// @grant       none
// ==/UserScript==

var $vg = jQuery.noConflict();
var wh = $vg(window).width();
var ht = $vg(window).height();
function ficus(){
    $vg('#wrapper, .VSPlayerTapOverlay').each(function() {
    var a = 'width:' + wh + 'px!important;';
    var b = 'height:' + ht + 'px;';
    var c = 'top:0px;';
    $vg(this).attr('style',a + b + c);
  });
}
function geto(){
  if(window.location.href.indexOf('embed') > -1 && window.location.href.indexOf('chat') < 0 && top.window.location.href.indexOf('vaughnlive') > -1) {
  	var getadrres = document.location.href;
  	var nukelii = getadrres.replace(/\?viewers.+/gi,'');
  	var stuped = nukelii.replace(/.+embed\/video\//gi,'https://vaughn.live/');
    $vg('body').html('<a id="dumyclik" hres="'+stuped+'" target="_blank">Click aqui para ver</a>');
    window.open(stuped);
  }
  $vg('#upperVaughnLeft.vaughnLeft' ).each(function() {
    $vg( this ).attr('class','vaughnCenter');
  });
  $vg('.vaughnLeft, [style*="339933"],.MvnHlsPlayerOverlayFixed, .MvnAbvsLowerThirdWrapper, #loading, #upperVaughnRight, .abvsDynamic, [class^="height"], .header,[id^="modal"], .vaughnMid, .vaughnRight, .clear, .channelAboutWrapper, .videoStatsWrapper, .videoStatus, .footerWrapper, [id*="chat"], #dashboardWindow, #mvn, .topBarV2headerSpacer, .header_spacer,[style*="-5000"], .videoHeaderImage, noscript, .abvsContainer, .MvnAbvsLowerThirdWrapper, .MvnHlsPlayerWatermarkVL, meta, a[href*="blog.vaughnsoft.com"], [id^="chattersList"], .abvsContainer, script' ).each(function() {
    $vg( this ).remove();
  });
  $vg('a[href*="community"]').each(function() {
    $vg( this ).parent().remove();
  });
  $vg('.vidPlayer').each(function() {
    $vg(this).attr('style','top: 0px;');
  });
  $vg('body, .VSPlayerTapOverlay,#wrapper,#videoPlayer,#vidPlayer,#MvnHlsPlayer_wrapper,#MvnHlsPlayerBox,#MvnHlsPlayer,#MvnHlsPlayerLive').each(function() {
    var a = 'width:' + wh + 'px;';
    var b = 'height:' + ht + 'px;';
    $vg(this).attr('style',a + b);
    setTimeout(ficus, 1000);
  });

}
setTimeout(geto, 2000);