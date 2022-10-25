




let howManyColors=0

const menuIcon=document.querySelector("#menuicon")
const menu=document.querySelector("#menu")
const main=document.querySelector("main")


menu.classList.toggle("menu-on")
menuIcon.addEventListener("click",function(){
   
    
    menu.classList.toggle("menu-on")
   main.ClassList.toggle("mainwmenu")

    
})


// menu icon visibility toggle--------------------------------------------------------------------------------------------------------------------------------










const oneColor=document.querySelector(".onecolor")
const twoColor=document.querySelector(".twocolor")
const threeColor=document.querySelector(".threecolor")
const random=document.querySelector(".random")
const rainbow=document.querySelector(".rainbow")


const color=document.querySelector("#color")



random.addEventListener("change",function(e){
    e.stopPropagation()
    oneColor.checked=false
    twoColor.checked=false
    threeColor.checked=false

    howManyColors=4
})

rainbow.addEventListener("change",function(e){
    e.stopPropagation()
    oneColor.checked=false
    twoColor.checked=false
    threeColor.checked=false

    howManyColors=5
})





oneColor.addEventListener("change",function(e){
    e.stopPropagation()
    random.checked=false
    rainbow.checked=false




    color.innerHTML=`
        
    
                        <input class="color1" id="colorone" type="color" value="#ffffff"> 
                        
                        




                    `


                    howManyColors=1





})


twoColor.addEventListener("change",function(e){
    e.stopPropagation()
    random.checked=false
    rainbow.checked=false
    

    color.innerHTML=`
        
    
                        <input class="color1" id="colorone" value="#ffffff" type="color"> 
                        <input class="color1" id="colortwo" value="#ffffff" type="color">
                        




                    `

                    howManyColors=2
})



threeColor.addEventListener("change",function(e){
    e.stopPropagation()
    random.checked=false
    rainbow.checked=false
   

    color.innerHTML=`
        
    
                        <input class="color1" id="colorone" value="#ffffff" type="color"> 
                        <input class="color1" id="colortwo" value="#ffffff" type="color">
                        <input class="color1" id="colorthree" value="#ffffff" type="color">
                        




                    `


                    howManyColors=3
})








// amount of colors to draw and mix and coloring modes--------------------------------------------------------------------------------------------------------------







const bgColor=document.querySelector("#bg-color")
const sketchArea=document.querySelector("#sketcharea")





 bgColor.addEventListener("change",function(){
    sketchArea.style.backgroundColor=`${this.value}`
 })





//background color changer ------------------------------------------------------------------------------------------------------------------------------------









const eraseAll=document.querySelector("#eraseall")
const erase=document.querySelector("#erase")



eraseAll.addEventListener("click",function(){

    window.location.reload(true)


})




erase.addEventListener("click",function(e){

    howManyColors=0
    oneColor.checked=false
    twoColor.checked=false
    threeColor.checked=false
    rainbow.checked=false
    random.checked=false


           

    color.innerHTML=``
    
    






 })





// Erase functions-------------------------------------------------------------------------------------------------------------------------------------------










const gridSize=document.querySelector("#gridsize")

let res=parseInt(600/gridSize.value)

let res2=gridSize.value 





function defaultGridSize(){

    let i=0
    let j=0

   

    while(i<res2){
        const divBox=document.createElement("div")
        divBox.setAttribute("id","Container")
        divBox.setAttribute("draggable","false")
        divBox.setAttribute("style",`flex:auto;display:flex;width:100vw;height:auto; flex-direction:row;padding:0px;margin:0px;align-content:stretch;`)

    

        sketchArea.append(divBox)
        i++
        

        while(j<res2){

            const divItem=document.createElement("div")

            divItem.setAttribute("id","item")
            divItem.setAttribute("class","item")
            divItem.setAttribute("draggable","false")
            divItem.setAttribute("style",`flex:1 1;height:auto;width:${res}px;padding:0px;margin:0px;align-content:stretch;`)
            divBox.append(divItem)
            j++
        
         
        }

        j=0

    }
}

defaultGridSize()

//default gridsize function-----------------------------------------------------------------------------------------------------------------------------------










gridSize.addEventListener("change",function(){
 
    sketchArea.innerHTML=""
   
    

    res=parseInt(600/gridSize.value)

    res2=gridSize.value 

   
   

    let i=0
    let j=0

   

    while(i<res2){
        const divBox=document.createElement("div")
        divBox.setAttribute("id","Container")
        divBox.setAttribute("style",`flex:auto;display:flex;width:100vw;height:auto; flex-direction:row;padding:0px;margin:0px;align-content:stretch;`)
        divBox.setAttribute("draggable","false")
    

        sketchArea.append(divBox)
        i++
        

        while(j<res2){

            const divItem=document.createElement("div")

            divItem.setAttribute("id","item")
            divItem.setAttribute("class","item")
            divItem.setAttribute("style",`flex:1 1;height:auto;width:${res}px;padding:0px;margin:0px;align-content:stretch;s`)
            divItem.setAttribute("draggable","false")
            divBox.append(divItem)
            j++
        
         
        }

        j=0

    }


    cellRuler()

})



//Grid size changer on thickness input ---------------------------------------------------------------------------------------------------------------------









function cellRuler(){

    const gridCell=document.querySelectorAll("#item")

    sketchArea.addEventListener("mousedown",function(e){

         

        gridCell.forEach(ele=>ele.addEventListener("mousemove",addColor))




    })





    sketchArea.addEventListener("mouseup",function(e){


        gridCell.forEach(ele=>ele.removeEventListener("mousemove",addColor))


    })
    
   
    
   



}


function addColor(e){
          
    const colorone=document.querySelector("#colorone")
    const colortwo=document.querySelector("#colortwo")
    const colorthree=document.querySelector("#colorthree")
    
            
    e.stopPropagation()     

   findManyColors(this,howManyColors)
   

}




function findManyColors(ele,num){

    switch(num){

        case 0:

    
           ele.style.backgroundImage=``
           ele.style.backgroundColor=``


        break;

        case 1:

            ele.style.backgroundImage=`linear-gradient(${colorone.value},${colorone.value})`

        break;

        case 2:

            ele.style.backgroundImage=`linear-gradient(to right,${colorone.value},${colortwo.value})`

        break;

        case 3:

           ele.style.backgroundImage=`linear-gradient(to right,${colorone.value},${colortwo.value},${colorthree.value})` 

        break;
        case 4:

            ele.style.backgroundColor=`rgb(${rgbNum()},${rgbNum()},${rgbNum()})` 
        
        break;
        case 5:

         ele.style.backgroundImage= `linear-gradient(to left,violet,indigo,blue,green,yellow,orange,red)`
        
        break;



        
    }

}





//draw functions or display color change function------------------------------------------------------------------------------------------------------------------


function rgbNum(){

    return parseInt(Math.random() * 256)
}

    
//random rgb function--------------------------------------------------------------------------------------------------------------------------------------------









cellRuler()



















