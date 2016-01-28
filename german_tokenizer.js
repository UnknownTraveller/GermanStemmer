
module.exports =
(function () {
    "use strict";
    
    var Tokenizer = require("natural/lib/natural/tokenizers/tokenizer");
    
    function GermanTokenizer() {
        Tokenizer.call(this);
    };
    
    GermanTokenizer.prototype = Object.create(Tokenizer.prototype);
    GermanTokenizer.prototype.constructor = GermanTokenizer;
    
    GermanTokenizer.prototype.tokenize = function (text) {
        return this.trim(text.split(/[^a-zA-ZäöüÄÖÜß]+/));
    };
    
    GermanTokenizer.tokenize = function (text) {
        return new GermanTokenizer().tokenize(text);
    }
                         
    return GermanTokenizer;
})();
