// ==UserScript==
// @name        NudeCollect_Fetch
// @namespace   NudeCollect Fetch Gallery
// @description Fetch gallery's up to 6 pages on group, then select next to get others 6 
// @copyright   2019+, Yaelmania Ilutions Graphics (Yaelmania)
// @run-at      document-end
// @downloadURL https://github.com/yaemania/releases/raw/master/NudeCollect_Fetch.user.js
// @updateURL   https://github.com/yaemania/releases/raw/master/NudeCollect_Fetch.meta.js
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     http*://*nudecollect.com/content/*/index-mirror*.html
// @include     http*://*nudecollect.com/content/*/page*pics*mirror*
// @version     2.8.4
// @grant       unsafeWindow
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// ==/UserScript==

//var data='da';
var addres = $('.imgpagebar a h3:contains("Last Page")').parent().attr('href');
var addresL = $('.imgpagebar a h3:contains("Next Page")').parent().attr('href');
console.log(addresL);
$('.imgpagebar a h3:contains("Next Page")').parent().attr('id','Next');
$('.content').append(unescape('%3Cdiv class%3D%22content%22 id%3D%22Zone1%22%3E %3C%2Fdiv%3E%3Cdiv class%3D%22content%22 id%3D%22Zone2%22%3E %3C%2Fdiv%3E%3Cdiv class%3D%22content%22 id%3D%22Zone3%22%3E %3C%2Fdiv%3E%3Cdiv class%3D%22content%22 id%3D%22Zone4%22%3E %3C%2Fdiv%3E%3Cdiv class%3D%22content%22 id%3D%22Zone5%22%3E %3C%2Fdiv%3E%3Cdiv class%3D%22content%22 id%3D%22Zone6%22%3E %3C%2Fdiv%3E'))
var pagina = parseInt(addres.replace(/.+\/page\-(\d+).+/,'$1'));
var paginaL = parseInt(addresL.replace(/.+\/page\-(\d+).+/,'$1'));
var numset = parseInt(addres.replace(/.+\/page\-\d+\-pics\-(\d+).+/,'$1'));
var addreschek = parseInt(pagina + 1);

function galeryFix() {
	$('.top, .footer, [style*="z-index:50"]').each(function() {
    $(this).remove();
  });
}
function duplicatefix(){
	var found = {};
	$('div.image a').each(function(){
		var $this = $(this);
		if(found[$(this).attr('href')]){
			$this.parent().remove();
		}
    else{
			found[$(this).attr('href')] = true;
		}
	});
}
// desde la primera
if(pagina > 1){
	var address1 = parseFloat(paginaL);
	var condi = 1;
		if(address1 < pagina ){
			var address2 = parseFloat(address1) + 1;
		}else{
			var address2 = address1;
		}
	if(address2 < pagina ){
			var address3 = parseFloat(address2) + 1;
		}else{
			var address3 = address2;
		}
	if(address3 < pagina ){
			var address4 = parseFloat(address3) + 1;
		}else{
			var address4 = address3;
		}
	if(address4 < pagina ){
			var address5 = parseFloat(address4) + 1;
		}else{
			var address5 = address4;
		}
	if(address5 < pagina ){
			var address6 = parseFloat(address5) + 1;
		}else{
			var address6 = address5;
		}

	var addreschekL = parseInt(address6 + 1);
	if(addreschekL <= pagina ){
		$('#Next').attr('href',addresL.replace(/(.+\/page\-)\d+(.+)/,'$1' + addreschekL + '$2'));
	}else{
		$('.imgpagebar a h3:contains("Last Page")').parent().remove();
		$('.imgpagebar a h3:contains("Next Page")').parent().remove();
	}
	if(address1 <= pagina ){
$.get(addres.replace(/(.+\/page\-)\d+(.+)/,'$1' + (parseFloat(paginaL)) + '$2')).success(function(data){
		console.log(data);
	var testX = data.replace(/\n/gm,'');
	var testy = testX.replace(/.+\<div\sclass\=\"content\"\>/,'');
	var testz = testy.replace(/\<\/div\>\<div\sclass\=\"pages\"\>.+/,'');
	$('#Zone1').append(testz);
});
		setTimeout(500);
	}
	if(address2 <= pagina ){
$.get(addres.replace(/(.+\/page\-)\d+(.+)/,'$1' + (parseFloat(paginaL) + 1 ) + '$2')).success(function(data1){
		console.log(data1);
	var testX1 = data1.replace(/\n/gm,'');
	var testy1 = testX1.replace(/.+\<div\sclass\=\"content\"\>/,'');
	var testz1 = testy1.replace(/\<\/div\>\<div\sclass\=\"pages\"\>.+/,'');
	$('#Zone2').append(testz1);
});
		setTimeout(500);
	}
	if(address3 <= pagina ){
$.get(addres.replace(/(.+\/page\-)\d+(.+)/,'$1' + (parseFloat(paginaL) + 2 ) + '$2')).success(function(data2){
		console.log(data2);
	var testX2 = data2.replace(/\n/gm,'');
	var testy2 = testX2.replace(/.+\<div\sclass\=\"content\"\>/,'');
	var testz2 = testy2.replace(/\<\/div\>\<div\sclass\=\"pages\"\>.+/,'');
	$('#Zone3').append(testz2);
});
		setTimeout(500);
	}
	if(address4 <= pagina ){
$.get(addres.replace(/(.+\/page\-)\d+(.+)/,'$1' + (parseFloat(paginaL) + 3 ) + '$2')).success(function(data3){
		console.log(data3);
	var testX3 = data3.replace(/\n/gm,'');
	var testy3 = testX3.replace(/.+\<div\sclass\=\"content\"\>/,'');
	var testz3 = testy3.replace(/\<\/div\>\<div\sclass\=\"pages\"\>.+/,'');
	$('#Zone4').append(testz3);
});
		setTimeout(500);
	}
		if(address5 <= pagina ){
$.get(addres.replace(/(.+\/page\-)\d+(.+)/,'$1' + (parseFloat(paginaL) + 4 ) + '$2')).success(function(data4){
		console.log(data4);
	var testX4 = data4.replace(/\n/gm,'');
	var testy4 = testX4.replace(/.+\<div\sclass\=\"content\"\>/,'');
	var testz4 = testy4.replace(/\<\/div\>\<div\sclass\=\"pages\"\>.+/,'');
	$('#Zone5').append(testz4);
});
			setTimeout(500);
		}
	if(address6 <= pagina ){
$.get(addres.replace(/(.+\/page\-)\d+(.+)/,'$1' + (parseFloat(paginaL) + 5 ) + '$2')).success(function(data5){
		console.log(data5);
	var testX5 = data5.replace(/\n/gm,'');
	var testy5 = testX5.replace(/.+\<div\sclass\=\"content\"\>/,'');
	var testz5 = testy5.replace(/\<\/div\>\<div\sclass\=\"pages\"\>.+/,'<hr class="content">');
	$('#Zone6').append(testz5);
});
		setTimeout(500);
	}
	
setTimeout(duplicatefix, 2000);
	
}

setTimeout(galeryFix, 5000);
