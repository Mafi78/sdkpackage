/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.DynamicContainer");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.suite.ui.commons.DynamicContainer",{metadata:{library:"sap.suite.ui.commons",properties:{"displayTime":{type:"int",group:"Appearance",defaultValue:5000},"transitionTime":{type:"int",group:"Appearance",defaultValue:500}},aggregations:{"tiles":{type:"sap.suite.ui.commons.GenericTile",multiple:true,singularName:"tile"}}}});
sap.suite.ui.commons.DynamicContainer.prototype.init=function(){this._oDelegate={onAfterRendering:function(e){e.srcControl.$().removeAttr("tabindex")}};this._oPauseIcon=new sap.ui.core.Icon(this.getId()+"-pause-icon",{src:"sap-icon://media-pause",});this._oPauseIcon.addStyleClass("sapSuiteDCIcon")};
sap.suite.ui.commons.DynamicContainer.prototype.onAfterRendering=function(){var t=this.getTiles().length;this._bAnimationPause=false;this._iCurrAnimationTime=0;if(t){this._scrollToNextTile();if(t>1){this._startAnimation()}}};
sap.suite.ui.commons.DynamicContainer.prototype._handleSwipeLeft=function(e){if(sap.ui.getCore().getConfiguration().getRTL()){e.data.parent._scrollToPrevTile(true)}else{e.data.parent._scrollToNextTile(true)}clearTimeout(this._sTimerId);e.data.parent._bPreventEndEvent=true};
sap.suite.ui.commons.DynamicContainer.prototype._handleSwipeRight=function(e){if(sap.ui.getCore().getConfiguration().getRTL()){e.data.parent._scrollToNextTile(true)}else{e.data.parent._scrollToPrevTile(true)}clearTimeout(this._sTimerId);e.data.parent._bPreventEndEvent=true};
sap.suite.ui.commons.DynamicContainer.prototype._toggleAnimation=function(){if(this.getTiles().length>1){if(this._bAnimationPause){this._startAnimation();this.$().unbind("swipeleft");this.$().unbind("swiperight");this._oPauseIcon.$().hide()}else{this._stopAnimation();this.$().bind("swipeleft",{parent:this},this._handleSwipeLeft);this.$().bind("swiperight",{parent:this},this._handleSwipeRight);this._oPauseIcon.$().css("display","block");var t=this;setTimeout(function(){t._oPauseIcon.$().hide(1000)},this.getPauseTriggerTime())}}this._bAnimationPause=!this._bAnimationPause};
sap.suite.ui.commons.DynamicContainer.prototype._stopAnimation=function(){this._iCurrAnimationTime+=Date.now()-this._iStartTime;clearTimeout(this._sTimerId);if(this._iCurrentTile!=undefined){var w=jQuery.sap.byId(this.getId()+"-wrapper-"+this._iCurrentTile);w.stop()}if(this._iPrvTile!=undefined){var W=jQuery.sap.byId(this.getId()+"-wrapper-"+this._iPrvTile);W.stop()}};
sap.suite.ui.commons.DynamicContainer.prototype.onBeforeRendering=function(){this._stopAnimation();this._sWidth=this._sHeight=undefined;this._iCurrentTile=this._iPrvTile=undefined};
sap.suite.ui.commons.DynamicContainer.prototype._startAnimation=function(){var d=this.getDisplayTime()-this._iCurrAnimationTime;var t=this;clearTimeout(this._sTimerId);this._sTimerId=setTimeout(function(){t._scrollToNextTile()},d);this._iStartTime=Date.now()};
sap.suite.ui.commons.DynamicContainer.prototype.exit=function(){this._stopAnimation();this.$().unbind("taphold");this.$().unbind("swipeleft");this.$().unbind("swiperight")};
sap.suite.ui.commons.DynamicContainer.prototype._scrollToNextTile=function(p){var t=this._iCurrAnimationTime-this.getDisplayTime();t=this.getTransitionTime()-(t>0?t:0);var f=t==this.getTransitionTime();if(f){var n=this._getNextTileIndex(this._iCurrentTile);this._iPrvTile=this._iCurrentTile;this._iCurrentTile=n}var w=jQuery.sap.byId(this.getId()+"-wrapper-"+this._iCurrentTile);var d=this._iPrvTile!=undefined;var D=sap.ui.getCore().getConfiguration().getRTL()?"right":"left";if(d){var W=jQuery.sap.byId(this.getId()+"-wrapper-"+this._iPrvTile);var s=W.css("width");var a=parseFloat(w.css("width"));var b=parseFloat(s);var c=b<a;if(c){this._changeSizeTo(this._iCurrentTile)}if(f){w.css(D,s)}var o={};o[D]="-"+s;var e=this;W.animate(o,{duration:t,done:function(){if(!c){e._changeSizeTo(e._iCurrentTile)}W.css(D,"")}});o[D]="0px";w.animate(o,{duration:t,done:function(){e._iCurrAnimationTime=0;if(!p){e._startAnimation()}}})}else{this._changeSizeTo(this._iCurrentTile);w.css(D,"0px")}};
sap.suite.ui.commons.DynamicContainer.prototype._scrollToPrevTile=function(p){var t=this._iCurrAnimationTime-this.getDisplayTime();t=this.getTransitionTime()-(t>0?t:0);var f=t==this.getTransitionTime();if(f){var n=this._getPrevTileIndex(this._iCurrentTile);this._iPrvTile=this._iCurrentTile;this._iCurrentTile=n}var w=jQuery.sap.byId(this.getId()+"-wrapper-"+this._iCurrentTile);var d=this._iPrvTile!=undefined;var D=sap.ui.getCore().getConfiguration().getRTL()?"right":"left";if(d){var W=jQuery.sap.byId(this.getId()+"-wrapper-"+this._iPrvTile);var s=W.css("width");var a=w.css("width");var b=parseFloat(a);var c=parseFloat(s);var C=c<b;if(C){this._changeSizeTo(this._iCurrentTile)}if(f){w.css(D,"-"+a)}var e=this;var o={};o[D]="0px";w.animate(o,{duration:t,done:function(){e._iCurrAnimationTime=0;if(!p){e._startAnimation()}}});o[D]=a;W.animate(o,{duration:t,done:function(){if(!C){e._changeSizeTo(e._iCurrentTile)}W.css(D,"")}})}else{this._changeSizeTo(this._iCurrentTile);w.css(D,"0px")}};
sap.suite.ui.commons.DynamicContainer.prototype._changeSizeTo=function(n){var N=this.getTiles()[n];if(this._sFrameType){this.$().removeClass(this._sFrameType)}if(this._sSize){this.$().removeClass(this._sSize)}this.$().addClass(N.getFrameType()).addClass(N.getSize());this._sFrameType=N.getFrameType();this._sSize=N.getSize()};
sap.suite.ui.commons.DynamicContainer.prototype._getNextTileIndex=function(i){if(i+1<this.getTiles().length){return i+1}return 0};
sap.suite.ui.commons.DynamicContainer.prototype._getPrevTileIndex=function(i){if(i-1>=0){return i-1}return this.getTiles().length-1};
sap.suite.ui.commons.DynamicContainer.prototype.onsaptouchstart=function(e){this.addStyleClass("sapSuiteDCHvr")};
sap.suite.ui.commons.DynamicContainer.prototype.onsaptouchend=function(e){this.removeStyleClass("sapSuiteDCHvr")};
sap.suite.ui.commons.DynamicContainer.prototype.ontouchstart=function(e){this.addStyleClass("sapSuiteDCHvr")};
sap.suite.ui.commons.DynamicContainer.prototype.ontouchend=function(e){this.removeStyleClass("sapSuiteDCHvr");if(!jQuery.device.is.desktop){if(this._bPreventEndEvent){this._bPreventEndEvent=false;e.preventDefault();return}this.getTiles()[this._iCurrentTile].firePress()}};
sap.suite.ui.commons.DynamicContainer.prototype.insertAggregation=function(a,o,i,s){if(a==="tiles"){o.addDelegate(this._oDelegate);o.attachEvent=function(e,d,f,l){sap.ui.core.Control.prototype.attachEvent.call(o,e,d,f,l)}}return sap.ui.core.Control.prototype.insertAggregation.call(this,a,o,i,s)};
sap.suite.ui.commons.DynamicContainer.prototype.addAggregation=function(a,o,s){if(a==="tiles"){o.addDelegate(this._oDelegate);o.attachEvent=function(e,d,f,l){sap.ui.core.Control.prototype.attachEvent.call(o,e,d,f,l)}}return sap.ui.core.Control.prototype.addAggregation.call(this,a,o,s)};
sap.suite.ui.commons.DynamicContainer.prototype.removeAggregation=function(a,o,s){var O=sap.ui.core.Control.prototype.removeAggregation.call(this,a,o,s);if(a==="tiles"){O.removeDelegate(this._oDelegate);delete O.attachEvent}return O};
sap.suite.ui.commons.DynamicContainer.prototype.removeAllAggregation=function(a,s){var o=sap.ui.core.Control.prototype.removeAllAggregation.call(this,a,s);if(a==="tiles"){for(var i=0;i<o.length;i++){o[i].removeDelegate(this._oDelegate);delete o[i].attachEvent}}return o};
sap.suite.ui.commons.DynamicContainer.prototype.onkeydown=function(e){if(e.which==jQuery.sap.KeyCodes.ENTER){this.getTiles()[this._iCurrentTile].firePress()}};
sap.suite.ui.commons.DynamicContainer.prototype.onmouseup=function(e){this.removeStyleClass("sapSuiteDCHvr");if(jQuery.device.is.desktop){if(this._bPreventEndEvent){this._bPreventEndEvent=false;e.preventDefault();return}this.getTiles()[this._iCurrentTile].firePress()}};
sap.suite.ui.commons.DynamicContainer.prototype.onmousedown=function(e){this.addStyleClass("sapSuiteDCHvr")};