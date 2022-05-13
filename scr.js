const body=document.body;

 const setId= setInterval(()=>{
    const red= Math.floor( Math.random()*126)
    const green= Math.floor( Math.random()*131)
    const blue= Math.floor( Math.random()*169)
   const rgb=`rgb(${red},${green},${blue})`
   body.style.background=rgb
   console.log(rgb)
},1000)
const button=document.querySelector('button')
button.addEventListener('click',()=>{
    clearInterval(setId)
    button.textContent=body.style.background
})
