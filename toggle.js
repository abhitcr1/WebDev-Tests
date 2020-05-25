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
var fli=document.querySelectorAll("li");
for(var i=0;i<fli.length;i++)
{
    fli[i].addEventListener("mouseover",function() 
        {
        this.classList.add("select");
        }                   );
    fli[i].addEventListener("mouseout",function()
            {
                this.classList.remove("select");
            }               );

            fli[i].addEventListener("click",function()
            {
            this.classList.toggle("done");
            }               );
    

}
