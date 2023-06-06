alert("HOLA, BIENVENIDO A OPERACIONES GEOMÉTRICAS");
alert("A CONTINUACIÓN CALCULAREMOS EL PERÍMETRO DE UN CÍRCULO, EL ÁREA DE UN CUADRADO Y EL VOLUMEN DE UN CILÍNDRO");

/*linea que permite escribir*/
document.write('<br>'); //escribo una etiqueta html de salto de línea en el texto (retorno de carro)
document.write('Hola soy araceli, Este es mi primer programa con javascript en este curso');
document.write('<br>');
document.write('<br>');
	document.write('<br>');
document.write("OPERACIONES GEOMÉTRICAS");
document.write('<br>');
document.write('<br>');

var radio;
var lado;

radio=prompt ('Escribe el Radio de un Círculo:',''); 
lado=prompt ('Escribe el Lado de un Cuadrado:',''); 
radio_cilindro=prompt ('Escribe el Radio de un Cilíndro:','');
altura_cilindro=prompt ('Escribe la Altura del Cilíndro:','');


/*convierto valores a valores numericos para poder hacer operaciones*/
radio=parseInt(radio);
lado=parseInt(lado);
radio_cilindro=parseInt(radio_cilindro);
altura_cilindro=parseInt(altura_cilindro);


var perimetrocirculo=(radio * 2 * 3.1416);
var areacuadrado=(lado * lado);
var vol_cilindro=(3.1416 * radio_cilindro * radio_cilindro * altura_cilindro)

/*escribo resultados*/
document.write('El PERÍMETRO del Círculo es: ');
document.write('<br>');
document.write (perimetrocirculo); document.write(' unidades cuadradas');
document.write('<br>');
document.write('<br>');

document.write('El ÁREA del Cuadrado es: ');
document.write('<br>');
document.write(areacuadrado); document.write(' unidades cuadradas');
document.write('<br>');
document.write('<br>');

document.write('El VOLUMEN del Cilíndro es: ');
document.write('<br>');
document.write(vol_cilindro);document.write(' unidades cúbicas');
