/*
########  ##       ##     ## ########  
##     ## ##       ##     ## ##     ## 
##     ## ##       ##     ## ##     ## 
########  ##       ##     ## ########  
##     ## ##       ##     ## ##   ##   
##     ## ##       ##     ## ##    ##  
########  ########  #######  ##     ## 
*/

const video = document.querySelector(".background-video");

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll >= 300) {
        video.classList.add("blurred1")
        const nav = document.querySelector('.main-nav').style.opacity = '0';
    } else {
        video.classList.remove("blurred1")
        const nav = document.querySelector('.main-nav').style.opacity = '1';
    }

    if (scroll >= 450) {
        video.classList.add("blurred2")
    } else {
        video.classList.remove("blurred2")
    }

    if (scroll >= 500) {
        video.classList.add("blurred3")
    } else {
        video.classList.remove("blurred3")
    }
});

/*
##     ## #### ########  ######## ##     ##    ###    ##          ##    ##    ###    ##     ## 
##     ##  ##  ##     ##    ##    ##     ##   ## ##   ##          ###   ##   ## ##   ##     ## 
##     ##  ##  ##     ##    ##    ##     ##  ##   ##  ##          ####  ##  ##   ##  ##     ## 
##     ##  ##  ########     ##    ##     ## ##     ## ##          ## ## ## ##     ## ##     ## 
 ##   ##   ##  ##   ##      ##    ##     ## ######### ##          ##  #### #########  ##   ##  
  ## ##    ##  ##    ##     ##    ##     ## ##     ## ##          ##   ### ##     ##   ## ##   
   ###    #### ##     ##    ##     #######  ##     ## ########    ##    ## ##     ##    ###    
 */


function change() {
    const bars = document.querySelector('.menu-icon').style.opacity = '0';
    const nav = document.querySelector('.main-nav').style.opacity = '0';
    document.getElementById("virtual-nav").style.height = "100%";


}
function closeNav() {
    document.getElementById("virtual-nav").style.height = "0%";
    const bars = document.querySelector('.menu-icon').style.opacity = '1';
    if (window.scrollY < 300) {
        const nav = document.querySelector('.main-nav').style.opacity = '1';
    }
}

/*
##     ##  #######  ##       ##     ## ##     ## ######## 
##     ## ##     ## ##       ##     ## ###   ### ##       
##     ## ##     ## ##       ##     ## #### #### ##       
##     ## ##     ## ##       ##     ## ## ### ## ######   
 ##   ##  ##     ## ##       ##     ## ##     ## ##       
  ## ##   ##     ## ##       ##     ## ##     ## ##       
   ###     #######  ########  #######  ##     ## ########
*/

let toggled = true
function toggleMute() {
    

    let video = document.getElementById("myVideo");
    video.muted = !video.muted;

    let sound = document.querySelector(".sound");

    if(toggled === true){
    sound.style.backgroundImage = "url(img/icons8-sound-20.png)";
    toggled = false;
    return;
    }

    if(toggled === false){
         sound.style.backgroundImage = "url(img/icons8-mute-20.png)";
         toggled = true;
         return;
     }
  
   
  
  }
