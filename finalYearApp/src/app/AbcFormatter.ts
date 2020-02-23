
export class AbcFormatter {


    constructor() { }

    baseMappings = {
        // " ": "",
        // "\\:\\|": ":|\n",
        "&quot;": "\"",
        // "|:": "",
        "!": "!\n",
        "&#039;": "'"
    };

    htmlMappings = {
        "&quot;": "\"",
        "&gt;": ">",
    }

    format(abc, isHtml = false) {
        if (isHtml) {
            abc = this.replaceValues(abc, this.htmlMappings);
        }
        else {
            abc = this.replaceValues(abc, this.baseMappings);
            for (var i = 1; i < abc.length; i++) {
                if (i % Math.round(abc.length / 4) == 0) {
                }
            } 
        }
        return abc;
    }

    replaceValues(str, dict) {
        for (var key in dict) {
            str = str.replace(new RegExp(key, "g"), dict[key])
        }
        return str;
    }

    replaceValue(str, oldValue, newValue) {
        return str.replace(oldValue, newValue);
    }

}