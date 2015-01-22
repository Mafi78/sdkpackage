package org.scn.community.htmlgenerator;

import java.io.File;

public class StringUtils {

	public static String file2String(File contributionXml) {
		return "\r\n" + "<component\r\n" + "	id=\"Accordion\"\r\n" + "	title=\"Accordion\"\r\n" + "	icon=\"res/Accordion/Accordion.png\"\r\n" + "	handlerType=\"sapui5\"\r\n" + "	group=\"ScnCommunityBasics\"\r\n" + "	propertySheetPath=\"res/Accordion/aps/AccordionPropertyPage.html\">\r\n" + "	<jsInclude>res/Accordion/Accordion.js</jsInclude>\r\n" + "	<cssInclude>res/Accordion/Accordion.css</cssInclude>\r\n" + "\r\n" + "	<property\r\n" + "		id=\"selectedKey\"\r\n" + "		type=\"String\"\r\n" + "		title=\"Technical property for Selected Key\"\r\n" + "		group=\"Display\"\r\n" + "		visible=\"false\" />\r\n" + "\r\n" + "	<property\r\n" + "		id=\"expandedKey\"\r\n" + "		type=\"String\"\r\n" + "		title=\"Technical property for Expanded Key\"\r\n" + "		group=\"Display\"\r\n" + "		visible=\"false\" />\r\n" + "\r\n" + "	<property\r\n" + "		id=\"cleanAll\"\r\n" + "		type=\"boolean\"\r\n" + "		title=\"Technical property for Clean All Nodes\"\r\n" + "		group=\"Display\"\r\n" + "		visible=\"false\" />\r\n" + "\r\n" + "	<property\r\n" + "		id=\"elementsContent\"\r\n" + "		type=\"String\"\r\n" + "		title=\"Technical property for list of nodes\"\r\n" + "		group=\"Display\"\r\n" + "		visible=\"false\" />\r\n" + "\r\n" + "	<property\r\n" + "		id=\"defaultImage\"\r\n" + "		title=\"Url for Default Image\"\r\n" + "		tooltip=\"Url for Default Image which should be shown\"\r\n" + "		type=\"Url\"\r\n" + "		visible=\"true\" />\r\n" + "\r\n" + "	<property\r\n" + "		id=\"withImage\"\r\n" + "		title=\"Use Images\"\r\n" + "		type=\"boolean\"\r\n" + "		group=\"Display\"\r\n" + "	>\r\n" + "	</property>\r\n" + "\r\n" + "	<property\r\n" + "		id=\"maxSectionHeight\"\r\n" + "		title=\"Max Height for Section\"\r\n" + "		type=\"int\"\r\n" + "		group=\"Display\"\r\n" + "	>\r\n" + "	</property>\r\n" + "\r\n" + "	<property\r\n" + "		id=\"imageSize\"\r\n" + "		title=\"Size of the Image\"\r\n" + "		type=\"String\"\r\n" + "		group=\"Display\"\r\n" + "	>\r\n" + "		<possibleValue>16px</possibleValue>\r\n" + "		<possibleValue>32px</possibleValue>\r\n" + "	</property>\r\n" + "\r\n" + "	<property\r\n" + "		id=\"onSelectionChanged\"\r\n" + "		type=\"ScriptText\"\r\n" + "		title=\"Event for On Selection Changed\"\r\n" + "		group=\"Events\" />\r\n" + "\r\n" + "	<property\r\n" + "		id=\"onFirstExpand\"\r\n" + "		type=\"ScriptText\"\r\n" + "		title=\"Event for On First Expand\"\r\n" + "		group=\"Events\" />\r\n" + "\r\n" + "	<initialization>\r\n" + "		<defaultValue property=\"WIDTH\">230</defaultValue>\r\n" + "		<defaultValue property=\"HEIGHT\">400</defaultValue>\r\n" + "		<defaultValue property=\"TOP_MARGIN\">0</defaultValue>\r\n" + "		<defaultValue property=\"LEFT_MARGIN\">0</defaultValue>\r\n" + "		<defaultValue property=\"RIGHT_MARGIN\">auto</defaultValue>\r\n" + "		<defaultValue property=\"BOTTOM_MARGIN\">auto</defaultValue>\r\n" + "		<defaultValue property=\"fallbackPicture\">true</defaultValue>\r\n" + "		<defaultValue property=\"selectedKey\"></defaultValue>\r\n" + "		<defaultValue property=\"expandedKey\"></defaultValue>\r\n" + "		<defaultValue property=\"elementsContent\"></defaultValue>\r\n" + "		<defaultValue property=\"withImage\">false</defaultValue>\r\n" + "		<defaultValue property=\"imageSize\">16px</defaultValue>\r\n" + "		<defaultValue property=\"maxSectionHeight\">200</defaultValue>\r\n" + "\r\n" + "	</initialization>\r\n" + "\r\n" + "</component>\r\n" + "";
	}

}