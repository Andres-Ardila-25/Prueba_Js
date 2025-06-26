document.addEventListener('DOMContentLoaded', function(){

    
    document.getElementById('btn').addEventListener('click', function(){

        document.getElementById('titulo').textContent = 'Hola Mundoooooooooooooo!'

    })

    document.getElementById('btn5').addEventListener('click', function(){

        document.getElementById('titulo').textContent = 'Hola Mundo!'

    })

    document.getElementById('btn2').addEventListener('click', function(){

        document.querySelector('.recuadro').classList.toggle('cambio')

    })

    document.getElementById('btn3').addEventListener('click', function(){

        document.querySelector('.recuadro').style.display = 'none';

    })

    document.getElementById('btn4').addEventListener('click', function(){

        document.querySelector('.recuadro').style.display = 'block';

    })


    

})



