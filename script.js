const content=document.querySelector("#content");
const count=document.getElementById("count");
const display=document.getElementById("display");
let str;
let cnt=0;
let arr=[]
content.addEventListener('input',(e)=>{
    str=e.target.value;
    arr=str.split(" ");
    cnt=arr.length;
    console.log(str);

})

count.addEventListener('click',()=>{
    display.innerText=`Number of Words:${cnt}`;
  


})