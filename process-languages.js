#!/usr/bin/env node
"use strict";

var fs = require("fs");

var langFiles =
	fs
		.readdirSync("./lang")
		.filter(function(a) { return /\.json$/.test(a); })
		.map(function(a) { return "./lang/" + a; });

console.log("<table>");
console.log("<tr><th>Language</th><th>Translator</th><th>Language</th><th>Translator</th></tr>");

var left = false;

console.log(
	langFiles
		.map(function(fileName) { return fs.readFileSync(fileName, "utf-8"); })
		.map(JSON.parse)
		.filter(function(json) { return json["credit0-name"]; })
		.sort(function(a, b) { return a["language"].localeCompare(b["language"]); })
		.map(function(json) {
			left = !left;

			var ret = (left ? "<tr>" : "") + "<td>" + json["language"] + "</td><td>";

			for (var i = 0; json["credit" + i + "-name"]; i ++)
				if (json["credit" + i + "-url"])
					ret += (i == 0 ? "" : ", ") +
						"<a href=\"" + json["credit" + i + "-url"] + "\" target=\"_blank\">" +
						json["credit" + i + "-name"] + "</a>";
				else
					ret += (i == 0 ? "" : ", ") + json["credit" + i + "-name"];

			return ret + (left ? "" : "</tr>")
		}).join("\n")
	);

if (left)
	console.log("<td>&nbsp;</td><td>&nbsp;</td></tr>")

console.log("</table>");
