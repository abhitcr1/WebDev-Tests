var button=document.querySelector("button");
var ip=false

button.addEventListener("click",function(){
    if(ip)  {    
    document.body.style.background="white";
    ip= false;
            }
    else    {
        document.body.style.background="purple";
        ip=true;
            }
    }
);
