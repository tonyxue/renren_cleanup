// ==UserScript==
// @name          人人网去广告 (Renren Cleanup)
// @namespace     http://userstyles.org
// @description	  简化人人网主页及其他页面，去除了包括广告，各种烦人的提示和多余的元素，简化了边栏。2014-02-24
// @author        James Liu
// @homepage      http://userstyles.org/styles/87253/renren-cleanup
// @include       http://renren.com/*
// @include       https://renren.com/*
// @include       http://*.renren.com/*
// @include       https://*.renren.com/*
// @run-at        document-start
// ==/UserScript==
(function() {
 var css = "#ad100000000100,#ad1000000060,#ad1000000065,.side-item,.today-topic,.vip-level,.user-info-vip,#appDynamic,.dressup-home-btn,#apps-count,.apps-item-count,.rx-timeline-con,.wp-rrzm-popup,.ad-button,.main-recommend,#showAppMenu,.pv-recommentfriend-box,.Widget,.p-picSlide-cont,.downloadclient,.rrgame,.kfc-side,.share-help,.app-center-popup,#ugc-suggest-btn,.share-quick,.ad_rx,#zidou_music,#cleanFlashContent,#friendPhoto,.login-recommend,.friend-banner,#tools-box,.right_side_div,.sy_box,.right_side_div,#notice_system,#right_side_div,#banner-strach,.xb-qixi-footer,#rightapp_side_div,.xb-cornerspread-footer,.site-menu-apps-locked,.xb-bud-footer,#left-menu-pop-app,#ad_box,.xb-rightspread-footer{display:none !important;}.footprint,.birthday,.more-blogs,#friendPhotoCon{display:block !important;}.tip-arrow-top{right:70px !important;}";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node); 
	}
}
})();
