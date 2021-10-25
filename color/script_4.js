let Color = document.getElementById('Color')
let color_1 = document.getElementById('color_1')
let color_2 = document.getElementById('color_2')
let color_3 = document.getElementById('color_3')
let color_4 = document.getElementById('color_4')
let Input = document.getElementById('Input')


function Time(){
    color_1.innerHTML = hex2rgb(Color.value, -5, 3, 22)
    color_1.style.backgroundColor = hex2rgb(Color.value, -5, 3, 22)
    color_2.innerHTML = hex2rgb(Color.value, 1, -2, 20)
    color_2.style.backgroundColor = hex2rgb(Color.value, 1, -2, 20)
    color_3.innerHTML = hex2rgb(Color.value, 7, -5, -20)
    color_3.style.backgroundColor = hex2rgb(Color.value, 7, -5, -20)
    color_4.innerHTML = hex2rgb(Color.value, 30, 6, 15)
    color_4.style.backgroundColor = hex2rgb(Color.value, 30, 6, 15)
    }

    function hex2rgb(c, rA, rG, rB) {
        let bigint = parseInt(c.split('#')[1], 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        if (g<=100){
            color_1.style.color = '#fff'
            color_2.style.color = '#fff'
            color_3.style.color = '#fff'
            color_4.style.color = '#fff'
        }
        else{
            color_1.style.color = 'black'
            color_2.style.color = 'black'
            color_3.style.color = 'black'
            color_4.style.color = 'black'
        }
        let b = bigint & 255;
    
        return 'rgb(' + (r+rA) + ',' + (g+rG) + ',' + (b+rB) + ')';
    }

    setInterval(Time, 100)

    function myCopy(ColorElement) {
        Input.value = ColorElement
        Input.select();
        document.execCommand("copy");
        alert("Скопированный цвет: " + Input.value);
      }
color_1.addEventListener('click', function(){
    myCopy(color_1.innerHTML)
})
color_2.addEventListener('click', function(){
    myCopy(color_2.innerHTML)
})
color_3.addEventListener('click', function(){
    myCopy(color_3.innerHTML)
})
color_4.addEventListener('click', function(){
    myCopy(color_4.innerHTML)
})
