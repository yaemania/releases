// ==UserScript==
// @name        VaughnLive.tv
// @namespace   Clean VaughnLive to see only player, no more crap else, also add-on from me web page http://yaelmania.co.nf
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @updateURL 	https://raw.githubusercontent.com/yaemania/releases/master/VaughnLive(tv).meta.js
// @downloadURL	https://raw.githubusercontent.com/yaemania/releases/master/VaughnLive(tv).user.js
// @include     *://vaughn*
// @exclude     *://vaughn*/*chat*
// @version     2.0
// @dateLast  	2018.12.08
// @grant       none
// ==/UserScript==


var $vg = jQuery.noConflict();

function geto(){
  if(window.location.href.indexOf('embed') > -1 && window.location.href.indexOf('chat') < 0 && top.window.location.href.indexOf('vaughnlive') > -1) {
  	var getadrres = document.location.href;
  	var nukelii = getadrres.replace(/\?viewers.+/gi,'');
  	var stuped = nukelii.replace(/.+embed\/video\//gi,'https://vaughn.live/');
    $vg('body').html('<a id="dumyclik" hres="'+stuped+'" target="_blank">Click aqui para ver</a>');
    window.open(stuped);
  }
  $vg('.MvnAbvsLowerThirdWrapper, #loading, #upperVaughnRight, .abvsDynamic, [class^="height"], .header,[id^="modal"], .vaughnMid, .vaughnRight, .clear, .channelAboutWrapper, .videoStatsWrapper, .videoStatus, .footerWrapper, [id*="chat"], #dashboardWindow, #mvn, .topBarV2headerSpacer, .header_spacer,[style*="-5000"], .videoHeaderImage, noscript, [class*="Overlay"], .abvsContainer, .MvnAbvsLowerThirdWrapper, .MvnHlsPlayerWatermarkVL, meta, a[href*="blog.vaughnsoft.com"], [id^="chattersList"], .abvsContainer, script' ).each(function() {
    $vg( this ).remove();
  });
  $vg('a[href*="community"]').each(function() {
    $vg( this ).parent().remove();
  });
  $vg('.vidPlayer').each(function() {
    $vg(this).attr('style','top: 0px;');
  });
}


setTimeout(geto, 3000);
