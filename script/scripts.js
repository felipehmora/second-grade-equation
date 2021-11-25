var entradas = document.getElementsByTagName('input');
var salida = document.getElementById('resultado');

function calcular(){
    var a,b,c, subRadical, x1, x2;
    a = parseFloat(entradas[0].value);
    b = parseFloat(entradas[1].value);
    c = parseFloat(entradas[2].value);
    if (a == 0){
        salida.innerHTML = '<div class=\'mensaje error\'>ERROR: Valor de a debe ser diferente de 0</div>';
    }else{	
        subRadical = Math.pow(b,2)-4*a*c;
        if (subRadical < 0 ){
            salida.innerHTML = '<div class=\'mensaje alerta\'>ERROR: Expresión sub radical, debe ser mayor o igual a 0<div>';
        }else{
            x1 = (-b+Math.sqrt(subRadical))/(2*a);
            x2 = (-b-Math.sqrt(subRadical))/(2*a);
            salida.innerHTML = '<div class=\'mensaje exito\'>x1='+x1+'<br>'+'x2='+x2+'</div>';
        }
    }

}

function limpiar(){
    entradas[0].value = '';
    entradas[1].value = '';
    entradas[2].value = '';
    salida.innerHTML = '';
}