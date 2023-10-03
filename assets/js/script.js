let boy = document.getElementById("boy");

let idleImageNum = 0;

let idleAnimationNum = 0;

function idleAnimation() {
    idleImageNum = idleImageNum + 1;

    if (idleImageNum == 11) {
        idleImageNum = 1;
    }
    boy.src = "assets/img/Idle(" + idleImageNum + ").png";
}

function idleAnimationStart() {
    idleAnimationNum = setInterval(idleAnimation, 200);
}

let runImageNum = 0;
let runAnimationNum = 0;

function runAnimation() {

    runImageNum = runImageNum + 1;

    if (runImageNum == 11) {
        runImageNum = 1;
    }
    boy.src = "assets/img/Run(" + runImageNum + ").png";
}

function runAnimationStart() {
    runAnimationNum = setInterval(runAnimation, 100);
    clearInterval(idleAnimationNum);
}

let jumpImageNum = 1;
let jumpAnimationNum = 0;
let boyMarginTop = 468;

function jumpAnimation() {
    jumpImageNum = jumpImageNum + 1;

    if (jumpImageNum <= 6) {
        boyMarginTop = boyMarginTop - 20;
        boy.style.marginTop = boyMarginTop + "px";
    }
    if (jumpImageNum >= 7) {
        boyMarginTop = boyMarginTop + 20;
        boy.style.marginTop = boyMarginTop + "px";
    }

    if (jumpImageNum == 11) {
        jumpImageNum = 1;
        clearInterval(jumpAnimationNum);
        jumpAnimationNum = 0;
        runImageNum = 0;
        runAnimationStart()
    }
    boy.src = "assets/img/Jump(" + jumpImageNum + ").png";
}


function jumpAnimationStart() {
    clearInterval(idleAnimationNum);
    runImageNum = 0;
    clearInterval(runAnimationNum);

    jumpAnimationNum = setInterval(jumpAnimation, 100);

}

let slideImgNum = 0;
let slideAnimationNum = 0;

function slideAnimation() {
    slideImgNum = slideImgNum+1;
    if (slideImgNum ==11){
        slideImgNum=1;
        clearInterval(slideAnimationNum);
        slideAnimationNum = 0;
        runImageNum = 0;
        runAnimationStart()
    }
    boy.src = "assets/img/Slide(" + jumpImageNum + ").png";
}
function slideAnimationStart() {
    clearInterval(idleAnimationNum);
    runImageNum=0;
    clearInterval(runAnimationNum)

    slideAnimationNum = setInterval(slideAnimation, 100);
}
function keyCheck(event) {

    if (event.key == "Enter") {
        if (runAnimationNum == 0) {
            runAnimationStart();
        }
        if (moveBackgroundId == 0) {
            moveBackgroundId = setInterval(moveBackground, 100);
        }
    }

    if (event.key == " ") {
        if (jumpAnimationNum == 0) {
            jumpAnimationStart();
        }
        if (moveBackgroundId == 0) {
            moveBackgroundId = setInterval(moveBackground, 100);
        }
    }

    if (event.key == "s") {
        if (slideAnimationNum == 0) {
            slideAnimationStart();
        }
        if (moveBackgroundId == 0) {
            moveBackgroundId = setInterval(moveBackground, 100);
        }
    }

}

let backgroundImgPositionX = 0;
let moveBackgroundId = 0;

function moveBackground() {
    backgroundImgPositionX = backgroundImgPositionX - 20;
    document.getElementById("background").style.backgroundPositionX = backgroundImgPositionX + "px";
}