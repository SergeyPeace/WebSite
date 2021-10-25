let item = document.querySelector('.item')
let cells = document.querySelectorAll('.cell')
function UpData(){
    if (numberVibor.value == 'img_1'){
		item.style.backgroundImage = 'url(image/сat.jpg)'  
        item.style.backgroundSize = '100% 100%'
    }
    else if(numberVibor.value == 'img_2'){
        item.style.backgroundImage = 'url(image/frog.jpg)' 
        item.style.backgroundSize = '100% 100%'
    }
    else if(numberVibor.value == 'img_3'){
        item.style.backgroundImage = 'url(image/butterfly.jpg)' 
        item.style.backgroundSize = '100% 100%'
    }
    else if(numberVibor.value == 'img_4'){
        item.style.backgroundImage = 'url(image/duck.gif)' 
        item.style.backgroundSize = '100% 100%'
    }
}

item.addEventListener('dragstart', function(){
    setTimeout(() => {
        this.classList.add('hide')
    }, 0);
})

item.addEventListener('dragend', function(){
    this.classList.remove('hide')
})



cells.forEach((cell) => {

    cell.addEventListener('dragover', function(evt){
        evt.preventDefault()
    })

    cell.addEventListener('dragenter', function(){
        this.classList.add('cell_style')
    })

    cell.addEventListener('dragleave', function(){
        this.classList.remove('cell_style')
    })

    cell.addEventListener('drop', function(){
        this.append(item)
        this.classList.remove('cell_style')
    })
})