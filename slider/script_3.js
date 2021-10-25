let btnL = document.getElementById('button_left') 
let btnR = document.getElementById('button_right')
let count = 0
btnL.onclick = function(){
    count +=300
    if(count == 300){
        count=-1200
    }
    
    document.querySelector('.slide').style.left = count+"px"
}

btnR.onclick = function(){
    count -=300
    if(count == (-1500)){
        count=0
    }
    document.querySelector('.slide').style.left = count+"px"
}