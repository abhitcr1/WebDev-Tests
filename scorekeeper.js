var p1b=document.querySelector("#p1");
var p2b=document.getElementById("p2");
var p1d=document.querySelector("#p1d");
var p2d=document.querySelector("#p2d");
p1s=0;
p2s=0;
var go=false;
var ws=5;
var rb=document.getElementById("reset")
var num=document.querySelector("input");
var wsd=document.querySelector("p span");

p1b.addEventListener("click",function(){
    if(!go){
    p1s++;
    if(p1s===ws){
        p1d.classList.add("winner");
        go=true;
                }
          p1d.textContent=p1s;   }

                               }
                    )
;
p2b.addEventListener("click",function(){
    if(!go){
        p2s++;
        if(p2s===ws){
            p2d.classList.add("winner");
            go=true;
                    }
              p2d.textContent=p2s;   }
    
                                   })
;
function reset(){
    p1s=0;
p2s=0;
p1d.textContent=0;
p2d.textContent=0;
p1d.classList.remove("winner");
p2d.classList.remove("winner");
go=false;
}
rb.addEventListener("click",function(){
reset();
});
num.addEventListener("change",function(){
wsd.textContent=num.value;
ws=Number(num.value);
reset();
});
