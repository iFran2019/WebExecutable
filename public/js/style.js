if(document.title == "Executable Editor | Items"){
    var element = document.getElementById("itemsnav");
    element.style = "border-bottom: 2px solid rgba(0, 0, 0, 0.2);";
}else if(document.title == "Executable Editor | Blocks"){
    var element = document.getElementById("blocksnav");
    element.style = "border-bottom: 2px solid rgba(0, 0, 0, 0.2);";
}


function actualize(){
    var enterdetect = document.getElementById("enterdetect").value;
    enterdetect = enterdetect.replace(/\n/g, "<br />");
    document.getElementById("enterdetect").innerHtml = enterdetect;
    console.log(enterdetect)
}