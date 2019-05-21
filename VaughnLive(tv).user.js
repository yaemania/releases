// ==UserScript==
// @name        VaughnLive.tv
// @namespace   Clean VaughnLive to see only player, no more crap else, also add-on from me web page http://yaelmania.co.nf
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @updateURL 	https://raw.githubusercontent.com/yaemania/releases/master/VaughnLive(tv).meta.js
// @downloadURL	https://raw.githubusercontent.com/yaemania/releases/master/VaughnLive(tv).user.js
// @include     *://vaughn*
// @exclude     *://vaughn*/*chat*
// @version     2.4
// @dateLast  	2019.05.21
// @grant       none
// ==/UserScript==

var $vg = jQuery.noConflict();
var rdx = 10;
var whA = $vg(window).width();
var htA = $vg(window).height();
var wh = (parseInt(whA)-((parseInt(whA) * parseInt(rdx)) / 100));
var ht = (parseInt(htA)-((parseInt(htA) * parseInt(rdx)) / 100));

function ficus(){
    $vg('#wrapper, .VSPlayerTapOverlay, #MvnHlsPlayerBar').each(function() {
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
  $vg('.vaughnLeft, [style*="339933"],.MvnHlsPlayerOverlayFixed, .MvnAbvsLowerThirdWrapper, #loading, #upperVaughnRight, .abvsDynamic, [class^="height"], .header,[id^="modal"], .vaughnMid, .vaughnRight, .clear, .channelAboutWrapper, .videoStatsWrapper, .videoStatus, .footerWrapper, [id*="chat"], #dashboardWindow, #mvn, .topBarV2headerSpacer, .header_spacer,[style*="-5000"], .videoHeaderImage, noscript, .abvsContainer, .MvnAbvsLowerThirdWrapper, .MvnHlsPlayerWatermarkVL, meta, a[href*="blog.vaughnsoft.com"], [id^="chattersList"], .abvsContainer, script, #MvnHlsPlayer_wrapper .MvnHlsPlayer_options_box' ).each(function() {
    $vg( this ).remove();
  });
  $vg('a[href*="community"]').each(function() {
    $vg( this ).parent().remove();
  });
  $vg('body').find('style').each(function() {
    $vg(this).remove();
  });
  $vg('body').find('link').each(function() {
    $vg(this).remove();
  });
  $vg('.vidPlayer').each(function() {
    $vg(this).attr('style','top: 0px;');
  });
  $vg('body, .VSPlayerTapOverlay,#wrapper,#videoPlayer,#vidPlayer,#MvnHlsPlayer_wrapper,#MvnHlsPlayerBox,#MvnHlsPlayer,#MvnHlsPlayerLive, #MvnHlsPlayerBar').each(function() {
    var a = 'width:' + wh + 'px;';
    var b = 'height:' + ht + 'px;';
    $vg(this).attr('style',a + b);
    setTimeout(ficus, 1000);
  });
}
setTimeout(geto, 2000);