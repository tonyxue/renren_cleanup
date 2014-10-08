// ==UserScript==
// @name          RenRen Minimalization
// @description   Minimalize the web interface of RenRen.com
// @author        Tony Xue
// @include       http://renren.com/*
// @include       https://renren.com/*
// @include       http://*.renren.com/*
// @include       https://*.renren.com/*
// @run-at        document-start
// ==/UserScript==
(function() {
 var css = "#ad100000000100,#ad1000000060,#ad1000000065,#ad1000000093,#ad100000100001,#homeBirthdayPart,.site-menu-apps-spread,.app-title.clearfix,.new-feed-tip-miss,.side-item,.today-topic,.vip-level,.user-info-vip,.fp-container,#appDynamic,.dressup-home-btn,#apps-count,.apps-item-count,.rx-timeline-con,.wp-rrzm-popup,.ad-button,.main-recommend,#showAppMenu,.pv-recommentfriend-box,.Widget,.p-picSlide-cont,.downloadclient,.rrgame,.kfc-side,.share-help,.app-center-popup,#ugc-suggest-btn,.share-quick,.ad_rx{display:none !important;}\n.footprint,.birthday{display:block !important;}\n.tip-arrow-top{right: 70px !important;}\n.ready-to-fix{display:none !important;}";
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
