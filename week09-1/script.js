var items = document.getElementById("list");
var button = document.getElementById("b1");
const listItems = items.getElementsByTagName('li');

button.addEventListener("click", function(){
    var inputVal = document.getElementById("input").value;
    document.getElementById("input").value = "";
    var text = document.createTextNode(inputVal);
    var item = document.createElement("li");
    item.append(text);
    item.addEventListener("click",function(){
        items.removeChild(item);
        fadePanel();
    })
    document.getElementById("list").append(item);
    fadePanel();
})

for (let i = 0; i <= listItems.length - 1; i++) {
    let cur = listItems[i];
    cur.addEventListener("click",function(){
        items.removeChild(cur);
        fadePanel();
    })
}

function fadePanel(){
    items.setAttribute("style", "animation-name:moving;");
    setTimeout(function () {
        items.setAttribute("style", "animation-name:none;");
    },800);
}
