let gameS =[]
let userS=[]

let started = false;
let level =0;

let color = ["yellow","red","purple","green"]

let btn_r = document.querySelector(".btn-red");
let btn_y = document.querySelector(".btn-yellow");
let btn_g = document.querySelector(".btn-green");
let btn_p = document.querySelector("btn-purple");

window.addEventListener("keypress",function(e){
    if(started==false){
        console.log("game started")
        levelup()
        started = true;
    }
})

let h2 = document.querySelector("h2")

function btnflash(btn){
    console.log(btn)
    btn.classList.add("flash")
    setTimeout(() => {
        btn.classList.remove("flash")
    }, 100);

}


function levelup(){
    userS = []
    level++;
    h2.innerText = `level ${level}`
    let randcolor = color[random()]
    let randbtn = document.querySelector(`.btn-${randcolor}`)
    gameS.push(randcolor)
    btnflash(randbtn)
}


function random(){
    const r = Math.floor(Math.random()*4)
    return r
}

function checkAns(idx){
    if(userS[idx]==gameS[idx]){
        if(userS.length == gameS.length){
            setTimeout(levelup,1000)
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}<b> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "white";
        },1000)
        reset()
    }
}


function btnpress(){
    
    let btn = this;
    btnflash(btn);
    userColor = btn.getAttribute("id")
    userS.push(userColor)
    checkAns(userS.length-1);

}

let allbtns = document.querySelectorAll(".btn")
for(i of allbtns){
    i.addEventListener("click",btnpress)
}


function reset(){
    started=false;
    gameS = [];
    userS = [];
    level =0;
}



