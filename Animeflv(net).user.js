// ==UserScript==
// @name        Animeflv.net - Fix
// @namespace   Animeflv.net, Remove ads,social,and any shit i dont like :D
// @description remove ads social, etc, just pure player style.
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @updateURL   https://raw.githubusercontent.com/yaemania/releases/master/Animeflv(net).meta.js
// @downloadURL https://raw.githubusercontent.com/yaemania/releases/master/Animeflv(net).user.js
// @include     http*://animeflv.net/*
// @version     1.4
// @dateLast    2017.04.13
// @grant       unsafeWindow
// @grant       GM_addStyle
// ==/UserScript==

var $av = jQuery.noConflict();

function GoNext() {
  //Quita la publicidad molesta así como también redes sociales, comentarios y todo aquello que a mi parecer no van con la estética y funcionabilidad de la página.
  //Recomiendo usar: NoScript + BlockSite + ABP
  //Todos son complementos para Firefox no es necesario pero con esto tu eliminaras y blockearas las molesta publicidad y todo lo que se te ocurra.
  var verifica1 = top.window.location.href;
  var verifica2 = window.location.href;
  var Cheker1 = verifica1.replace(/.+\/ver\.+/gi,'ver');
  var Cheker2 = verifica2.replace(/.+\/ver\.+/gi,'ver');
  var Cheker3 = verifica1.replace(/.+\/anime\/.+/gi,'anime');
  if(Cheker1 == Cheker2 && Cheker3 !== 'anime'){
    $av( '[class^="Dvr"]' ).each(function() {
      $av( this ).remove();
    });
    $av( '.Button.Sm.fa-download' ).each(function() {
      var linker = $av(this).attr('href').replace(/.+s\=/g,'');
      $av(this).attr('href',unescape(linker));
    });
    $av( '.Sect.Comments,[id*="ScriptRoot"]' ).each(function() {
      $av( this ).parent().parent().remove();
    });
  }
  $av( 'ul.ListPostOpts,.Sect.Comments,#footer, .ads-always-down, .publi_head, .ads_der, #b-close-ads, #ads-dw, [style*="2147483647"],#videoLoading, .jw-overlays.jw-reset, .jw-captions.jw-captions-enabled.jw-reset,.ultimos_epis .not [rel="nofollow"]' ).each(function() {
      $av( this ).remove();
  });
  $av( 'body' ).each(function() {
      $av( this ).append(unescape('%3Cstyle id%3D%22especialme%22 type%3D%22text%2Fcss%22%3E .anime_episodios%7Bheight%3A 376px%21important%3Bwidth%3A 760px%21important%3Boverflow-x%3A hidden%21important%3B%7D a%3Avisited %7Bborder%3A 4px solid %23A21768%21important%3B%7D .not a%7Bborder%3A 3px solid %23fff%21important%3Bheight%3A 106px%21important%3Bposition%3A absolute%21important%3Bwidth%3A 212px%21important%3Bborder-radius%3A 4px%21important%3B%7D .not a%3Avisited%7Bborder%3A 3px solid %23A21768%21important%3Bheight%3A 106px%21important%3Bposition%3A absolute%21important%3Bwidth%3A 212px%21important%3B%7D .adbl%2C%23adbl%7Bvisibility%3A hidden%21important%3Bdisplay%3A none%21important%3B%7D %23contenedor%7Bdisplay%3A block%21important%3B%7D .ListEpisodes %3E li %3E a%3Avisited %7Bcolor%3A red%21important%3B%7D .ListEpisodios a%3Avisited%7Bcolor%3A red%21important%3B%7D %3C%2Fstyle%3E'));
   });
}

setTimeout(GoNext, 1000);