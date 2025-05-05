console.log('Website loaded');
let c1=0,c2=0,c3=0,c4=0,c5=0,c6=0,c7=0,c8=0,c9=0;
let gamest=0;
function maingame() {
    gamest=1;
    const ele1=document.getElementById("play");
    if(ele1.textContent=="Play"){
        ele1.textContent="Reset";
    }
    else {
        reset_board();
        const ele1=document.getElementById("play");
        ele1.textContent="Play";
        gamest=0;
    }
}
function mychoice1() {
    if(gamest==0){
        return;
    }
    const ele=document.getElementById("cell1");
    ele.textContent="X";
    c1=1;
    check();
}
function mychoice2() {
    if(gamest==0){
        return;
    }
    const ele=document.getElementById("cell2");
    ele.textContent="X";
    c2=1;
    check();
}
function mychoice3() {
    if(gamest==0){
        return;
    }
    const ele=document.getElementById("cell3");
    ele.textContent="X";
    c3=1;
    check();
}   
function mychoice4() {
    if(gamest==0){
        return;
    }
    const ele=document.getElementById("cell4");
    ele.textContent="X";
    c4=1;
    check();
}
function mychoice5() {
    if(gamest==0){
        return;
    }
    const ele=document.getElementById("cell5");
    ele.textContent="X";
    c5=1;
    check();
}
function mychoice6() {
    if(gamest==0){
        return;
    }
    const ele=document.getElementById("cell6");
    ele.textContent="X";
    c6=1;
    check();
}
function mychoice7() {
    if(gamest==0){
        return;
    }
    const ele=document.getElementById("cell7");
    ele.textContent="X";
    c7=1;
    check();
}   
function mychoice8() {  
    if(gamest==0){
        return;
    }
    const ele=document.getElementById("cell8");
    ele.textContent="X";
    c8=1;
    check();
}      
function mychoice9() {  
    if(gamest==0){
        return;
    }
    const ele=document.getElementById("cell9");
    ele.textContent="X";
    c9=1;
    check();
}
function check(){
    const ele=document.getElementById("result_text");
    if(c1==1 && c2==1 && c3==1){
        ele.textContent="Player 1 wins!";
    }
    else if(c4==1 && c5==1 && c6==1){
        ele.textContent="Player 1 wins!";
    }
    else if(c7==1 && c8==1 && c9==1){
        ele.textContent="Player 1 wins!";
    }
    else if(c1==1 && c4==1 && c7==1){
        ele.textContent="Player 1 wins!";
    }
    else if(c2==1 && c5==1 && c8==1){
        ele.textContent="Player 1 wins!";
    }
    else if(c3==1 && c6==1 && c9==1){
        ele.textContent="Player 1 wins!";
    }
    else if(c3==1 && c5==1 && c7==1){
        ele.textContent="Player 1 wins!";
    }
    else if(c1==1 && c5==1 && c9==1){
        ele.textContent="Player 1 wins!";
    }

    if(c1==2 && c2==2 && c3==2){
        ele.textContent="Player 2 wins!";
    }
    else if(c4==2 && c5==2 && c6==2){
        ele.textContent="Player 2 wins!";
    }
    else if(c7==2 && c8==2 && c9==2){
        ele.textContent="Player 2 wins!";
    }
    else if(c1==2 && c4==2 && c7==2){
        ele.textContent="Player 2 wins!";
    }
    else if(c2==2 && c5==2 && c8==2){
        ele.textContent="Player 2 wins!";
    }
    else if(c3==2 && c6==2 && c9==2){
        ele.textContent="Player 2 wins!";
    }
    else if(c3==2 && c5==2 && c7==2){
        ele.textContent="Player 2 wins!";
    }
    else if(c1==2 && c5==2 && c9==2){
        ele.textContent="Player 2 wins!";
    }

}
function reset_board() {
    const ele1=document.getElementsByClassName("cell");
    for (let i = 0; i < ele1.length; i++) {
        ele1[i].textContent="";
    }
    const ele2=document.getElementById("result_text");
    ele2.textContent="---";
    c1=0,c2=0,c3=0,c4=0,c5=0,c6=0,c7=0,c8=0,c9=0;
    const ele3=document.getElementById("play");
    ele3.textContent="Play";
    gamest=0;
}