var nums=document.querySelectorAll(".drum").length;
for(var i=0;i<nums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var data=this.innerHTML;
        makeSound(data);
        showAnimation(data);
    });
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    showAnimation(event.key);
});
function makeSound(key){
    switch(key){
        case "q":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "w":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "e":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "r":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "t":
            var tom5=new Audio("sounds/crash.mp3");
            tom5.play();
            break;
        case "y":
            var tom6=new Audio("sounds/kick-bass.mp3");
            tom6.play();
            break;
        default:console.log(data); 
    }
}
function showAnimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}