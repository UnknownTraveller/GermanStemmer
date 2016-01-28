/*global require, console*/
var natural = require("natural"),
    GermanStemmer = require("./german_stemmer");

GermanStemmer.attach();

var text = "Verbände mich nicht eine unverbrüchliche Zusage, dir auch nicht das Geringste zu verhehlen, was ich von den Schicksalen deines Bruders auffangen kann, liebster Freund, nimmermehr würde meine unschuldige Feder an dir zur Tyrannin geworden sein. Ich kann aus hundert Briefen von dir abnehmen, wie Nachrichten dieser Art dein brüderliches Herz durchbohren müssen; mir ist's, als säh' ich dich schon um den Nichtswürdigen, den Abscheulichen";

console.log(text.tokenizeAndStem().join(" "));
