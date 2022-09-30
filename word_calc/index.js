let button=document.getElementById("btn");
button.addEventListener("click",function()
{
    let str=document.getElementById("word");
    let count=str.length;
    str.innerHTML=count;
    console.log(count);

})