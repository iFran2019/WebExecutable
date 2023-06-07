if(document.title == "Executable Editor | Items"){
    var element = document.getElementById("itemsnav");
    element.style = "border-bottom: 2px solid rgba(0, 0, 0, 0.2);";
}else if(document.title == "Executable Editor | Blocks"){
    var element = document.getElementById("blocksnav");
    element.style = "border-bottom: 2px solid rgba(0, 0, 0, 0.2);";
}

function actualize(id, id2){
    var enterdetect = document.getElementById(id).value;
    enterdetect = enterdetect.replace(/\n/g, "|ˢᵉᵖᵃʳᵃᵗᵒʳ|");
    document.getElementById(id).innerHtml = enterdetect;
    document.getElementById(id2).value = enterdetect;
}

function translateColors(detect, output, info) {
    var inputText = document.getElementById(detect).value;
    inputText = inputText.replace(/\n/g, "&r<br>");
    var translatedText = translateColorCodes("&r&e&l"+info+"<hr>&r"+inputText);
    document.getElementById(output).innerHTML = translatedText;
    document.getElementById(output).style = "display: block; text-align: center;";
}
function translateColorsLore(detect, output, info) {
    var inputText = document.getElementById(detect).value;
    inputText = inputText.replace(/\n/g, "&r<br>&5&o");
    var translatedText = translateColorCodes("&r&e&l"+info+"<hr>&r&5&o"+inputText);
    document.getElementById(output).innerHTML = translatedText;
    document.getElementById(output).style = "display: block; text-align: left;";
}
function translateColorCodes(text) {
    var colorPattern = /&([0-9a-fklmnor])/gi;
    var translatedText = text.replace(colorPattern, function(match, code) {
        if (code === "r") {
            return '</span></span></span>';
        }
        var colorClass = 'color-' + code;
        var formatClass = 'format-' + code;
        if (code === 'k') {
            formatClass = 'format-k';
        }
        return '<span class="' + colorClass + ' ' + formatClass + '">';
    });
    return translatedText;
}