// ==UserScript==
// @name        VaughnLive.tv
// @namespace   Clean VaughnLive to see only player, no more crap else, also add-on from me web page http://yaelmania.com
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @updateURL 	https://raw.githubusercontent.com/yaemania/releases/master/VaughnLive(tv).meta.js
// @downloadURL	https://raw.githubusercontent.com/yaemania/releases/master/VaughnLive(tv).user.js
// @icon        https://github.com/yaelmania/releases/raw/refs/heads/master/favicon03.ico
// @include     *://vaughn*
// @include     *://vaughn.*
// @exclude     *://vaughn*/*chat*
// @version     2.9.8
// @dateLast  	2025.08.14
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
  setTimeout(fixemder, 1000);
}
function fixemder(){
  $vg('body div.wrapper_header .the_header, body div.wrapper_header .vs_v9_header_right' ).each(function() {
    $vg( this ).remove();
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
  $vg('body' ).each(function() {
    var adresss = window.location.href;
    var hrefer = $vg( this ).html();
    if(hrefer.indexOf('Traffic from non secure websites (non HTTPS) have been blocked') > -1){
      adresss.replace(/https\:/gi,'http:');
      window.location.href = adresss;
      window.location.href;
      return false;
    }
  });
  setTimeout(getox, 2000);
}

function getox(){
  $vg('head' ).each(function() {
    $vg( this ).append(unescape('%3Cstyle%3E.header_alert_vaughnmas_wrapper.mvn_roundupheader_alert_vaughnmas_wrapper.mvn_roundup%2C%20.header_alert_vaughnmas_wrapper_inner%2C%20.header_alert_vaughnmas_wrapper.mvn_roundup%2C%20%5Bclass*%3D%22app_promo%22%5D%2C%20%5Bclass*%3D%22MvnAbvsLowerThirdWrapper%22%5D%7Bdisplay%3Anone!important%3B%7Dbody%20%7Balign-self%3A%20center!important%3B%7D%3C%2Fstyle%3E'));
    $vg( this ).append(unescape('%3Cstyle%3E.vs_v9_MvnAbvsLowerThird%7Bposition%3A%20absolute!important%3Btop%3A%20-999px!important%3Bleft%3A%20-999px!important%3Bmax-width%3A%200.1em!important%3Bmax-height%3A%200.1em!important%3Bwidth%3A%200.1em!important%3Bheight%3A%200.1em!important%3Bcolor%3A%20transparent!important%3Bfont-size%3A%200.01em!important%3Bfont-size-adjust%3A%200.01!important%3Bbackground%3A%20none!important%3Bbackground-color%3A%20transparent!important%3Bbackground-image%3A%20none!important%3Bbackground-repeat%3A%20no-repeat!important%3Bz-index%3A-9999999!important%3B%7D%3C%2Fstyle%3E'));
  });
  $vg('#upperVaughnLeft.vaughnLeft' ).each(function() {
    $vg( this ).attr('class','vaughnCenter');
  });
  $vg('.the_header, .vs_v9_header_right, .wrapper_header, .vs_v9_modal_subscribe_background, #vs_v9_modal_subscribe, #vs_v9_modal_version3, iframe, p, #snack_dex1, [class*="simplebar-track"], [class*="vs_chatv9_gifs"], [class*="vs_v9_header_notice"], #vs_v9_app_menu, #vs_content_menu, .wrapper_header, .wrapper_header2, .vs_stream_nav_box, .vs_v9_stream_content_abvs, .vs_v9_stream_content_info, .vs_v9_stream_content_spacer, .vs_v9_footer, .vs_v9_stream_content_spacer, [style*="data:x"], .vs_v9_LTabvsLowerThirdWrapper, [class*="modal_notice"], .vs_v9_modal_notice, [class*="app_promo"], .header_alert_v2_container, .abvsHeaderWrapper, .vaughnLeft, [style*="339933"],.MvnHlsPlayerOverlayFixed, .MvnAbvsLowerThirdWrapper, #loading, #upperVaughnRight, .abvsDynamic, [class^="height"], .header,[id^="modal"], .vaughnMid, .vaughnRight, .clear, .channelAboutWrapper, .videoStatsWrapper, .videoStatus, .footerWrapper, [id*="chat"], #dashboardWindow, #mvn, .topBarV2headerSpacer, .header_spacer,[style*="-5000"], .videoHeaderImage, noscript, .abvsContainer, .MvnAbvsLowerThirdWrapper, .MvnHlsPlayerWatermarkVL, meta, a[href*="blog.vaughnsoft.com"], [id^="chattersList"], .abvsContainer, script, #MvnHlsPlayer_wrapper .MvnHlsPlayer_options_box, [class^="header_alert_wrapper"]' ).each(function() {
    $vg( this ).remove();
  });
  $vg('a[href*="community"], ins[class="adsbygoogle"], #aniBox').each(function() {
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
  $vg('body, #the_content, .VSPlayerTapOverlay,#wrapper,#videoPlayer,#vidPlayer,#MvnHlsPlayer_wrapper,#MvnHlsPlayerBox,#MvnHlsPlayer,#MvnHlsPlayerLive, #MvnHlsPlayerBar').each(function() {
    var a = 'width:' + wh + 'px;';
    var b = 'height:' + ht + 'px;';
    $vg(this).attr('style',a + b);
    setTimeout(ficus, 1000);
  });
}
setTimeout(geto, 1000);
