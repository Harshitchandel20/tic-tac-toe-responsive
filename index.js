
var box = document.getElementsByClassName("box")

var result = document.getElementById("result")

var message = document.getElementById("message")

var button = document.getElementById("button")

button.onclick = function(){
    window.location.reload()
}

for(let i=0;i<box.length;i++){
    box[i].addEventListener("click" ,()=> {handleText(i)})
}

let finalResult = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]]
let xArray = []
let yArray = []

let turn = "X"
let count = 0 ;

function handleText(index){
   
    if(box[index].innerHTML==""){
   if(count%2==0){ 
    box[index].innerHTML = `<h1>${turn}</h1>`
        xArray.push(index)
        turn = "O"
        checkWinningCombination(finalResult,xArray,turn)
        
    }else if(count%2!==0){
        box[index].innerHTML = `<h1>${turn}</h1>`
        yArray.push(index)
        turn = "X"
        checkWinningCombination(finalResult,yArray,turn)

    }
    // checkLogic()
    count++;
}

}

let flag = true

function checkWinningCombination(finalResult,array,turn){

    let gameArray = []

    for(let i=0;i<finalResult.length;i++){

        if(Array.isArray(finalResult[i])){
            checkWinningCombination(finalResult[i],array,turn)
        }else{

            if(array.includes(finalResult[i])){
                gameArray.push(true)
            }else{
                gameArray.push(false)
            }
        }
    }

    if(gameArray.every((el)=>el==true) && gameArray.length==3){
        result.style.visibility = "visible"
        message.innerText = `${turn=="X"?"O":"X"} Won`
        flag = false
    }else if(count==8 && flag==true){
        result.style.visibility = "visible"
        message.innerText = "Its a Tie"
    }

// if(count==8 && flag==true){
//     result.style.visibility = "visible"
//     message.innerText = "Its a Tie"
// }


}

// function checkLogic(){

//     if(box[0].innerText + box[1].innerText + box[2].innerText == "XXX" || box[3].innerText + box[4].innerText + box[5].innerText == "XXX" || 
//     box[6].innerText + box[7].innerText + box[8].innerText == "XXX" || box[0].innerText + box[3].innerText + box[6].innerText == "XXX" || box[1].innerText + box[4].innerText + box[7].innerText == "XXX"
//     || box[2].innerText + box[5].innerText + box[8].innerText == "XXX" || box[0].innerText + box[4].innerText + box[8].innerText == "XXX" || box[6].innerText + box[4].innerText + box[2].innerText == "XXX" ){
//         result.style.visibility = "visible"
//         message.innerText = "X Won"
//         console.log("X won")

//         flag = false

//     }else if(box[0].innerText + box[1].innerText + box[2].innerText == "OOO" || box[3].innerText + box[4].innerText + box[5].innerText == "OOO" || 
//     box[6].innerText + box[7].innerText + box[8].innerText == "OOO" || box[0].innerText + box[3].innerText + box[6].innerText == "OOO" || box[1].innerText + box[4].innerText + box[7].innerText == "OOO"
//     || box[2].innerText + box[5].innerText + box[8].innerText == "OOO" || box[0].innerText + box[4].innerText + box[8].innerText == "OOO" || box[6].innerText + box[4].innerText + box[2].innerText == "OOO"){
//         result.style.visibility = "visible"
//         message.innerText = "O Won"
//         console.log("O won") 

//         flag = false
//     }else if(count==8 && flag==true){
//         result.style.visibility = "visible"
//         message.innerText = "Its a Tie"
//     }
// }


