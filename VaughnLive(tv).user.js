// ==UserScript==
// @name        VaughnLive.tv
// @namespace   Clean VaughnLive to see only player, no more crap else, also add-on for me web page http://yaelmania.co.nf
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @updateURL	https://raw.githubusercontent.com/yaemania/releases/master/VaughnLive(tv).meta.js
// @downloadURL	https://raw.githubusercontent.com/yaemania/releases/master/VaughnLive(tv).user.js
// @include     *://vaughnlive.tv*
// @exclude     *://vaughnlive.tv/*chat*
// @version     1.6
// @dateLast	2017.07.24
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
  $vg( 'div.theChat, div.theChatToggle, div.theBar, div#vs_chat_vaughn, div.theMenu, div.clear, div.theTop, div.modalv3, div#browseWindow, div#dashboardWindow, div#mvn, div#loading, div#topBarV2wrapper, div#topBarV2toggle, div#videoHeader, div#videoStatus, div.spacer10px, div.theAboutWrap, div.aboutHeader_left, div.theAboutWrap2' ).each(function() {
  	$vg( this ).remove();
  });
  setTimeout(master, 4500);
}

function master(){
  $vg( 'script,style,br,table,p,head,noscript,#vs_chat_vaughn,#abvsPlayer' ).each(function() {
    $vg( this ).remove();
  });
  $vg('#MvnHlsPlayerLive').unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap();
  $vg( 'div' ).each(function() {
    $vg( this ).remove();
  });
  $vg( 'video' ).each(function() {
    $vg( this ).attr('controls','true');
  });
  $vg('body').attr('style','background-color: black;');
  $vg('body').append(unescape('%3Cstyle%3Evideo%7Bwidth%3A720px%21important%3Bheight%3A480px%21important%3B%7D%3C%2Fstyle%3E'));
}

setTimeout(geto, 500);
