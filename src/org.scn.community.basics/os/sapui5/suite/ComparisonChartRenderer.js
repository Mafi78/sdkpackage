/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.ComparisonChartRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.suite.ui.commons.ComparisonChartRenderer={};
sap.suite.ui.commons.ComparisonChartRenderer.render=function(r,c){var t=c.getTooltip_AsString();if(typeof t!=="string"){t="";}r.write("<div");r.writeControlData(c);r.addClass("sapSuiteCmpChartContent");r.addClass(c.getSize());if(c.hasListeners("press")){r.writeAttribute("tabindex","0");r.addClass("sapSuiteUiCommonsPointer");}r.writeClasses();r.writeAttribute("role","presentation");r.writeAttributeEscaped("aria-label",c.getAltText().replace(/\s/g," ")+(sap.ui.Device.browser.firefox?"":" "+t));if(c.getShrinkable()){r.addStyle("min-height","0px");}if(c.getWidth()){r.addStyle("width",c.getWidth());}if(c.getHeight()){r.addStyle("height",c.getHeight());}r.writeStyles();r.writeAttributeEscaped("title",t);r.write(">");this.renderInnerContent(r,c);r.write("<div");r.writeAttribute("id",c.getId()+"-info");r.writeAttribute("aria-hidden","true");r.addStyle("display","none");r.writeStyles();r.write(">");r.writeEscaped(t);r.write("</div>");r.write("<div");r.writeAttribute("id",c.getId()+"-hidden");r.writeAttribute("aria-hidden","true");r.writeAttribute("tabindex","0");r.writeStyles();r.write(">");r.write("</div>");r.write("</div>");};
sap.suite.ui.commons.ComparisonChartRenderer.renderInnerContent=function(r,c){var C=c.getColorPalette().length;var a=0;var n=function(){if(C){if(a==C){a=0;}return c.getColorPalette()[a++];}};var b=c._calculateChartData();for(var i=0;i<b.length;i++){this.renderChartItem(r,c,b[i],i,n());}};
sap.suite.ui.commons.ComparisonChartRenderer.renderChartItem=function(r,c,C,i,s){r.write("<div");r.writeAttribute("id",c.getId()+"-chart-item-"+i);r.addClass("sapSuiteCmpChartItem");r.addClass(c.getView());r.addClass(c.getSize());r.writeClasses();r.write(">");this.renderChartHeader(r,c,i,s);this.renderChartBar(r,c,C,i,s);r.write("</div>");};
sap.suite.ui.commons.ComparisonChartRenderer.renderChartBar=function(r,c,C,i,s){var d=c.getData()[i];r.write("<div");r.writeAttribute("id",c.getId()+"-chart-item-bar-"+i);r.addClass("sapSuiteCmpChartBar");r.addClass(c.getView());r.addClass(c.getSize());if(c.getData()[i].hasListeners("press")){r.writeAttribute("tabindex","0");r.writeAttribute("role","presentation");r.writeAttributeEscaped("title",c._getBarAltText(i));r.writeAttributeEscaped("aria-label",c._getBarAltText(i));r.addClass("sapSuiteUiCommonsPointer");}r.writeClasses();r.write(">");if(C.negativeNoValue>0){r.write("<div");r.addClass("sapSuiteCmpChartBarNegNoValue");r.writeClasses();r.addStyle("width",C.negativeNoValue+"%");r.writeStyles();r.write("></div>");}if(C.value>0){r.write("<div");r.addClass("sapSuiteCmpChartBarValue");r.addClass(d.getColor());r.writeClasses();r.addStyle("background-color",s);r.addStyle("width",C.value+"%");r.writeStyles();r.write("></div>");}if(C.positiveNoValue>0){r.write("<div");r.addClass("sapSuiteCmpChartBarNoValue");r.writeClasses();r.addStyle("width",C.positiveNoValue+"%");r.writeStyles();r.write("></div>");}r.write("</div>");};
sap.suite.ui.commons.ComparisonChartRenderer.renderChartHeader=function(r,c,i,C){var d=c.getData()[i];var s=c.getScale();var D=d.getDisplayValue();var a=D?D:""+d.getValue();var v=a+s;r.write("<div");r.writeAttribute("id",c.getId()+"-chart-item-"+i+"-header");r.addClass("sapSuiteCmpChartItemHeader");r.addClass(c.getView());r.addClass(c.getSize());r.writeClasses();r.write(">");r.write("<div");r.writeAttribute("id",c.getId()+"-chart-item-"+i+"-value");r.addClass("sapSuiteCmpChartItemValue");r.addClass(c.getSize());r.addClass(c.getView());if(!C){r.addClass(d.getColor());}if(d.getTitle()){r.addClass("T");}r.writeClasses();r.write(">");if(!isNaN(d.getValue())){r.writeEscaped(v);}r.write("</div>");r.write("<div");r.writeAttribute("id",c.getId()+"-chart-item-"+i+"-title");r.addClass("sapSuiteCmpChartItemTitle");r.writeClasses();r.write(">");r.writeEscaped(d.getTitle());r.write("</div>");r.write("</div>");};
