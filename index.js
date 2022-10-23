const menuIcon=document.querySelector("#menuicon")
const menu=document.querySelector("#menu")


menu.classList.toggle("menu-on")
menuIcon.addEventListener("click",function(){
   
    
    menu.classList.toggle("menu-on")

    
})


// menu icon visibility toggle










const oneColor=document.querySelector(".onecolor")
const twoColor=document.querySelector(".twocolor")
const threeColor=document.querySelector(".threecolor")
const color=document.querySelector("#color")

console.log(twoColor)



oneColor.addEventListener("change",function(e){
    e.stopPropagation()
    

    color.innerHTML=`
        
    
                        <input class="color1" id="colorone" type="color"> 
                        
                        




                    `
})


twoColor.addEventListener("change",function(e){
    e.stopPropagation()
    

    color.innerHTML=`
        
    
                        <input class="color1" id="colorone" type="color"> 
                        <input class="color1" id="colortwo" type="color">
                        




                    `
})



threeColor.addEventListener("change",function(e){
    e.stopPropagation()
   

    color.innerHTML=`
        
    
                        <input class="color1" id="colorone" type="color"> 
                        <input class="color1" id="colortwo" type="color">
                        <input class="color1" id="colorthree" type="color">
                        




                    `
})


// amount of colors to mix 




const bgColor=document.querySelector("#bg-color")
const sketchArea=document.querySelector("#sketcharea")

bgColor.addEventListener("change",function(){
   sketchArea.setAttribute("style",`background-color:${this.value}`) 
})

//background color changer 



const eraseAll=document.querySelector("#eraseall")

eraseAll.addEventListener("click",function(){
    
    sketchArea.setAttribute("style",`background-color:#F4FFFDFF`) 


})







