
// Set Images on drumps


var drum=document.querySelectorAll("button");


for (var p=0;p<drum.length;p++)
{
    //console.log(p)

    drum[p].addEventListener("click", function () {


        var alphabet=this.innerHTML;

        PlaySound(alphabet);
        ButtonAnimation(alphabet);

    })
}


document.addEventListener("keydown" , function (event) {


    var alphabet=event.key;

    PlaySound(alphabet);
    ButtonAnimation(alphabet);

});



function PlaySound(alphabet)
{ 

    switch (alphabet)
    {
        case "w":
            var drum1=new Audio("sounds/tom-1.mp3");
            drum1.play();
            console.log("Sing drum1");
            break;
        case "a":
            var drum2=new Audio("sounds/tom-2.mp3");
            drum2.play();
            break;
        case "s":
            var drum3=new Audio("sounds/tom-3.mp3");
            drum3.play();
            break;
        case "d":
            var drum4=new Audio("sounds/tom-4.mp3");
            drum4.play();
            break;

        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
            default:
                console.log(alphabet);


    }

}



function ButtonAnimation(alphabet)
{
    var Animation=document.querySelector("."+alphabet);

    Animation.classList.add("pressed");

    setTimeout(function () {
        Animation.classList.remove("pressed");
    },200);
}