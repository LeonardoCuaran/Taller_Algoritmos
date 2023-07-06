

function primerPunto (){
    //vamos a crear un div para cada punto del taller.
    nombre = prompt("Cual es su nombre?");
    return alert(`Hola ${nombre}`);
}

function segundoPunto (){
    let b = document.getElementById("b").value;
    let h = document.getElementById("h").value;
    let resultado = (2*b)+(2*h);
    return alert (`El perimetro es: ${resultado}`);
}

function tercerPunto(){
    let c1 = document.getElementById("c1").value;
    let c2 = document.getElementById("c2").value;

    let resultado = (c1*c1)+(c2*c2);
    return alert(`La hipotenusa es : ${resultado}`);
}

function cuartoPunto (){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);

    let sumar = n1 + n2;
    let resta = n1-n2;
    let multiplicacion = n1*n2;
    let division = n1/n2;
    return alert (`SUMA: ${sumar} RESTA: ${resta} MULTIPLICACION: ${multiplicacion} DIVISION: ${division}`);
}

function quintoPunto (){
    let n1 = parseInt(document.getElementById("n3").value);
    let n2 = parseInt(document.getElementById("n4").value);
    let n3 = parseInt(document.getElementById("n5").value);

    let media = (n1+n2+n3)/3;
    return alert (`La media es: ${media}`);
}

function sextoPunto (){
    let n1 = parseInt(document.getElementById("n6").value),
    n2 = parseInt(document.getElementById("n7").value),
    n3 = parseInt(document.getElementById("n8").value),
    n4 = parseInt(document.getElementById("n9").value),
    n5 = parseInt(document.getElementById("n10").value);

    console.log(n1,n2,n3,n4,n5);
    let def = (0.55*((n1+n2+n3)/3))+(0.3*n4)+(0.15*n5);
    return alert (`La definitiva es: ${def}`);
}

function septimoPunto (){
    let v1 = parseInt(document.getElementById("v1").value),
    v2 = parseInt(document.getElementById("v2").value),
    d =  parseInt(document.getElementById("d").value);

    let tiempo = (d/(v1-v2))/60;

    return alert (`El timpo es: ${tiempo} minutos`);
}