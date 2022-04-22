//console.log(document.getElementById("title"))
//console.log(document instanceof HTMLDocument)
//function sayHello(){
    //console.log();
   
    //console.log(document.getElementById("name").value);
//};
document.addEventListener("DOMContentLoaded",
function (event){
function sayHello(event){
    console.log(event);
    this.textContent="Said it";
    
    //console.log(this);
    var name= document.getElementById("name").value;
    var message = "<h2>Hello" + name +"!</h2>";
    //document
    //.getElementById("content")
    //.textContent = message;
    document
    .getElementById("content")
    .innerHTML = message;
    if(name === " student"){
        var title = 
        document
        .querySelector("#title")
        .textContent;
        title +="&Lovin Sit!";
        document
        .querySelector("h1")
        .textContent= title;    }

}
document.querySelector("button")
 .addEventListener("click",sayHello);
 document.querySelector("body")
 .addEventListener("mousemove",function(event){
     //if (event.shiftkey ===true){
         console.log("x:" + event.x);
         console.log("y:" + event.y);
     //}
 }
 )
}
 )