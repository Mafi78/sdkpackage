/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.ColumnMicroChartRenderer");sap.suite.ui.commons.ColumnMicroChartRenderer={};
sap.suite.ui.commons.ColumnMicroChartRenderer.render=function(r,c){function w(d,I,s,a){r.write("<div");r.writeAttribute("id",c.getId()+I);r.addClass("sapSuiteCmcLbl");r.addClass(s);r.addClass(d.getColor());if(a){r.addClass("W");}r.writeClasses();r.write(">");r.writeEscaped(d.getLabel());r.write("</div>");};r.write("<div");r.writeControlData(c);r.addClass("sapSuiteCmc");r.addClass(c.getSize());var t=c.getTooltip_AsString();if(typeof t!=="string"){t="";}r.writeAttributeEscaped("title",t);if(c.hasListeners("press")){r.addClass("sapSuiteUiCommonsPointer");r.writeAttribute("tabindex","0");}r.writeAttribute("role","presentation");r.writeAttributeEscaped("aria-label",c.getAltText().replace(/\s/g," ")+(sap.ui.Device.browser.firefox?"":" "+t));r.writeClasses();r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.writeStyles();r.write(">");var l=c.getLeftTopLabel()&&c.getLeftTopLabel().getLabel()!="";var R=c.getRightTopLabel()&&c.getRightTopLabel().getLabel()!="";var L=c.getLeftBottomLabel()&&c.getLeftBottomLabel().getLabel()!="";var b=c.getRightBottomLabel()&&c.getRightBottomLabel().getLabel()!="";if(l||R){r.write("<div");r.writeAttribute("id",c.getId()+"-top-lbls");r.addClass("sapSuiteCmcLbls");r.addClass("T");r.writeClasses();r.write(">");var W=l^R;if(l){w(c.getLeftTopLabel(),"-left-top-lbl","L",W);}if(R){w(c.getRightTopLabel(),"-right-top-lbl","R",W);}r.write("</div>");}r.write("<div");r.writeAttributeEscaped("id",c.getId()+"-content");r.addClass("sapSuiteCmcCnt");if(l||R){r.addClass("T");}if(L||b){r.addClass("B");}r.writeClasses();r.write(">");r.write("<div");r.writeAttributeEscaped("id",c.getId()+"-bars");r.addClass("sapSuiteCmcBars");r.writeClasses();r.write(">");var C=c.getColumns().length;for(var i=0;i<C;i++){var o=c.getColumns()[i];r.write("<div");r.writeAttribute("id",c.getId()+"-bar-"+i);r.addClass("sapSuiteCmcBar");r.addClass(o.getColor());if(o.hasListeners("press")){r.writeAttribute("tabindex","0");r.writeAttribute("role","presentation");var B=c._getBarAltText(i);r.writeAttributeEscaped("title",B);r.writeAttributeEscaped("aria-label",B);r.addClass("sapSuiteUiCommonsPointer");}r.writeClasses();r.write(">");r.write("</div>");}r.write("</div>");r.write("</div>");if(L||b){r.write("<div");r.writeAttribute("id",c.getId()+"-btm-lbls");r.addClass("sapSuiteCmcLbls");r.addClass("B");r.writeClasses();r.write(">");var a=L^b;if(L){w(c.getLeftBottomLabel(),"-left-btm-lbl","L",a);}if(b){w(c.getRightBottomLabel(),"-right-btm-lbl","R",a);}r.write("</div>");}r.write("<div");r.writeAttribute("id",c.getId()+"-hidden");r.writeAttribute("aria-hidden","true");r.writeAttribute("tabindex","0");r.writeStyles();r.write(">");r.write("</div>");r.write("</div>");};
