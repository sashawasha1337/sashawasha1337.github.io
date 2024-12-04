function showAlert() {
    alert("Hello, world!");
    document.getElementById("text_area").style.fontSize = "24pt";
};

function fancify() {
    let theText= document.getElementById("text_area")
    theText.style.fontWeight = "bold";
    theText.style.color = "blue";
    theText.style.textDecoration = "underline";
    
}
function unfancify(){
    let theText= document.getElementById("text_area")
    theText.style.fontWeight = "normal";
    theText.style.color = "black";
    theText.style.textDecoration = "none";
}

document.getElementById("fancy_radio").addEventListener("change", function() {
    if (this.checked) {
        fancify();
        alert("fancified");
    }
});
// i get that this is not doing it with onchange() but i couldnt get that to work. I still understand that what im doing here is
// similar in that i am retrieving the id and giving the button an event listener using that id
document.getElementById("boring_radio").addEventListener("change", function() {
    if (this.checked) {
        unfancify();
        alert("unfancified");
    }
});

document.getElementById("bigger_btn").addEventListener("click", function() {
    showAlert(); 
});

function mooing()
{
    let theText=document.getElementById("text_area");
    let textValue=theText.value;
    textValue= textValue.toUpperCase();

    var str = textValue
    var parts = str.split(".");
    str = parts.join("-Moo.");
    theText.value=str;


}
document.getElementById("moo_btn").addEventListener("click", function() {
    mooing(); 
});
