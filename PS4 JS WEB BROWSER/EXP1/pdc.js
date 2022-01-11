/*!
 * @sie/designkit
 * @copyright     2021 Sony Interactive Entertainment LLC, all rights reserved
 */

!function(){"use strict";var t=function(t){if(!t||"false"===t)return null;if(t.startsWith("#"))return t;var e=/^rgba\(/.test(t);t=t.substring(e?5:4).split(")")[0].split(t.indexOf(",")>-1?",":" ");var i=(+t[0]).toString(16),n=(+t[1]).toString(16),a=(+t[2]).toString(16);if(i=1==i.length?"0"+i:i,n=1==n.length?"0"+n:n,a=1==a.length?"0"+a:a,!e)return"#"+i+n+a;var o=Math.round(255*+t[3]).toString(16);return o=1==o.length?"0"+o:o,"#"+i+n+a+o},e=function(t){var e=t.length>7;return(e?t.substring(0,7):t)+"00"},i=function(i,n,a,o,r,c){var d=i.data(n)||"";if(d){var s={};d=t(d),o&&(s={"--gradient-start-color":d,"--gradient-end-color":e(d)}),r&&(s["--gradient-start-color-tablet"]=d,s["--gradient-end-color-tablet"]=e(d)),c&&(s["--gradient-start-color-desktop"]=d,s["--gradient-end-color-desktop"]=e(d)),a&&(s[a]=d),i.css(s)}},n={IS_PORTRAIT:(window.matchMedia&&matchMedia("(orientation: portrait)")||{}).matches,IS_LANDSCAPE:(window.matchMedia&&matchMedia("(orientation: landscape)")||{}).matches,IS_MOBILE:(window.matchMedia&&matchMedia("(max-width: 767px)")||{}).matches,IS_MOBILE_PORTRAIT:(window.matchMedia("(max-width: 767px) and (orientation: portrait)")||{}).matches,IS_TABLET:(window.matchMedia&&matchMedia("(min-width: 768px)")||{}).matches,IS_DESKTOP:(window.matchMedia&&matchMedia("(min-width: 1024px)")||{}).matches},a=({IS_PORTRAIT:(window.matchMedia&&matchMedia("(orientation: portrait)")||{}).matches,IS_LANDSCAPE:(window.matchMedia&&matchMedia("(orientation: landscape)")||{}).matches,IS_JETSTREAM_MOBILE:(window.matchMedia&&matchMedia("(max-width: 699px)")||{}).matches,IS_MOBILE:(window.matchMedia&&matchMedia("(max-width: 767px)")||{}).matches,IS_MOBILE_PORTRAIT:(window.matchMedia("(max-width: 767px) and (orientation: portrait)")||{}).matches,IS_TABLET:(window.matchMedia&&matchMedia("(min-width: 768px)")||{}).matches,IS_TABLET_LG:(window.matchMedia&&matchMedia("(min-width: 1024px)")||{}).matches,IS_LAPTOP:(window.matchMedia&&matchMedia("(min-width: 1367px)")||{}).matches,IS_DESKTOP:(window.matchMedia&&matchMedia("(min-width: 1920px)")||{}).matches},{EMPTY_LABEL:"empty"}),o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),c=function(){function t(){o(this,t),this.firstImpressionTimeout=500}return r(t,[{key:"init",value:function(){var t=this,e=$(".game-hero__wrapper");return!(!e||!e.length)&&(setTimeout(function(){e.addClass("+unblur")},1e3),void $.each(e,function(e,n){var a=$(n),o=a.find(".notices__see-all");if(i(a,"hero-custom-theme-color","--custom-hero-theme",!0,!0),a.data("analytics-position",e+1),t.trackImpression(a),!o||!o.length)return!1;var r=new _gpdc.components.Accordion;o.on("click.heroSeeAllNotices",function(t){t.stopPropagation();var e=a.find(".game-hero__notices-tab");r.triggerAccordion(a.find(".accordion-component"),e),$("html, body").animate({scrollTop:e.offset().top},500)})}))}},{key:"trackImpression",value:function(t){var e=this,i=t.data("analytics");return i?void setTimeout(function(){e.firstImpressionTimeout=0,_gpdc.analytics.event.addGDLEvent("impression","banner impression",{userActionFlag:!1,moduleName:"Game Hero Banner",label:i.label||a.EMPTY_LABEL,position:t.data("analytics-position"),linkUrl:a.EMPTY_LABEL,assetName:i["asset-"+(n.IS_TABLET?"tablet":"mobile")]||a.EMPTY_LABEL,elementType:t.data("asset-type-"+(n.IS_TABLET?"tablet":"mobile"))||"image"},t)},this.firstImpressionTimeout):void _gpdc.Logger.log("GameHero impression is not tracked for automated games!!")}}]),t}(),d=function(){function t(){o(this,t)}return r(t,[{key:"processGameOverviews",value:function(t){$.each(t,function(t,e){return i($(e),"custom-theme-color","--custom-theme",!0)})}},{key:"init",value:function(){var t=$(".game-overview[data-custom-theme-color]");return!(!t||!t.length)&&(this.processGameOverviews(t),void _gpdc.Logger.log("Game Overview Plugin initialized!!"))}}]),t}(),s=function(){function t(){var e=this;o(this,t),window._gpdc&&_gpdc.user&&"undefined"!=typeof _gpdc.user.isLoggedIn?this.initModules():_gpdc.elements.$document.one("userInfoSet.dkComponents",function(){return e.initModules()})}return r(t,[{key:"initModules",value:function(){_gpdc.Logger.groupStart("Components");var t=new c,e=new d;t.init(),e.init(),_gpdc.Logger.groupEnd()}}]),t}();!function(t){_gpdc.elements.$document.ready(function(){_gpdc.Logger.groupStart("Games");new s;_gpdc.Logger.groupEnd()})}(jQuery)}();