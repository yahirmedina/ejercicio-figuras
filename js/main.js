function suma(){
    var a=0;
    var b=0;
    var suma=0;
    alert("por favor ingrese el primer valor a sumar:");
    a = parseInt(prompt(""));
    alert("por favor ingresar el segundo valor a sumar");
    b = parseInt(prompt(""));
    suma= a+b;
    alert("el resultado de la suma es:"+(suma));
}
function operacionesBasicas(){
    var a=0;
    var b=0;
    var suma=0;
    var resta=0;
    var multiplicacion=0;
    var division=0;
    a = parseInt(prompt("por favor ingresar el primer valor de la operacion"));
    b = parseInt(prompt("por favor ingresar el segundo valor de la operacion"));
    suma= a+b;
    resta= a-b;
    multiplicacion= a*b;
    division= a/b;
    alert("el resultado de las operacionesBasicas son:"+" suma "+ suma + " resta " + resta +  " multiplicacion "+ multiplicacion + " division "+ division);
 }

 function promedio(){
    var a=0;
    var b=0;
    var c=0;
    var d=0;
    var e=0;
    var f=0;
    var g=0;
    var suma=0;
    var division=0;
    a = parseInt(prompt("por favor ingrese la nota"));
    b = parseInt(prompt("por favor ingrese la nota"));
    c = parseInt(prompt("por favor ingrese la nota"));
    d = parseInt(prompt("por favor ingrese la nota"));
    e = parseInt(prompt("por favor ingrese la nota"));
    f = parseInt(prompt("por favor ingrese la nota"));
    g = parseInt(prompt("por favor ingrese la nota"));
    suma= a+b+c+d+e+f+g
    division= suma/7
    alert("el promedio de la nota es:"+(division));
 }
 function capital(){
    monto = 0;
    Operacion = 0;
    Años = 0;
    P = 0;
    Meses = 0;
    percent = 0.017 ;
    an = 0;
    monto = parseInt(prompt("Ingrese el monto a invertir: "));
    Años = parseInt(prompt("Ingrese el numero de años a los que desea realizar su inversión: "));
    Meses = Años * 12;
    Op = monto*percent;
    P= Op*Meses;
    an = P + monto;
    alert("el monto ganado con esa inversión es de: " + P + " junto con tu inversión serian un total de: " + an);
}
function mayor(){
    x = 0;
    y = 0;
    op = 0;
    x = parseInt(prompt("Por favor ingrese el primer numero: "));
    y = parseInt(prompt("Ingrese el segundo dato: "));
    if (x>y){
        alert("El numero mayor es: " + x);
    }
    else if(y>x){
        alert("El numero mayor es: " + y);
        
    }
    else if(x==y){
        alert("Los numeros son los mismos: " + x);
    }
}

function Circulo() {
    var figura= document.getElementById("figura");
    figura.classList.toggle("Circulo");
}
function Rectangulo() {
    var figura= document.getElementById("figura");
    figura.classList.toggle("Rectangulo");
}
function Rombo() {
    var figura= document.getElementById("figura");
    figura.classList.toggle("Rombo");
}
function Gif () {
    var figura= document.getElementById("figura");
    figura.classList.toggle("Gif");
}
function Izquierda() {
    var figura= document.getElementById("figura");
    figura.classList.toggle("Izquierda");

}
function Derecha() {
    var figura= document.getElementById("figura");
    figura.classList.toggle("Derecha");
}
function  Arriba() {
    var figura= document.getElementById("figura");
    figura.classList.toggle("Arriba");
}
function Abajo() {
    var figura= document.getElementById("figura");
    figura.classList.toggle("Abajo");
}
function Diagonal() {
    var figura= document.getElementById("figura");
    figura.classList.toggle("Diagonal");
}