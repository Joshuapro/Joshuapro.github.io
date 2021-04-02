var items = document.getElementById("list");
var button = document.getElementById("b1");
const listItems = items.getElementsByTagName('li');

button.addEventListener("click", function(){
    var inputVal = document.getElementById("input").value;
    document.getElementById("input").value = "";
    var text = document.createTextNode(inputVal);
    var item = document.createElement("li");
    item.addEventListener("click",function(){
        items.removeChild(item);
    })
    item.append(text);
    document.getElementById("list").append(item);
})


for (let i = 0; i <= listItems.length - 1; i++) {
    listItems[i].addEventListener("click",function(){
        items.removeChild(listItems[i]);
    })
}
