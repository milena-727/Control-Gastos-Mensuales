let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDetallesGastos = [];

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let detalleGasto = document.getElementById('detalleGasto').value;


    //Alerta valor de gasto mayor a 150
    if (Number(valorGasto) > 150) {
        alert('¡CUIDADO! El valor del gasto excede el límite de 150 USD');
    }

    console.log(nombreGasto);
    console.log(valorGasto);

    console.log(listaNombresGastos);

    if (nombreGasto == "" || valorGasto == "" || detalleGasto == "") {
        alert('Por favor, completa todos los campos');
        return;
    }else{
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaDetallesGastos.push(detalleGasto);
    }
    
    

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    console.log(listaDetallesGastos);

    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = ' ';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcion = listaDetallesGastos[posicion];

        htmlLista += `<li>${elemento}:=> Descripción: ${descripcion} - USD ${valorGasto.toFixed(2)}
                   <button style="background-color: yellow; color: black" onclick="modificarGasto(${posicion});">Modificar</button>
                   <button style="background-color: black;" onclick="eliminarGasto(${posicion});">Eliminar</button>
                   </li>`;
        //Calculamos el total de gastos
        totalGastos += Number(valorGasto);
        
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar() {
    document.getElementById("nombreGasto").value = ' ';
    document.getElementById("valorGasto").value = ' ';
    document.getElementById("detalleGasto").value = ' ';
}

function eliminarGasto(posicion) {

    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDetallesGastos.splice(posicion, 1);
    actualizarListaGastos();
}

//Funcion Modificamos el gasto
function modificarGasto(posicion){
    document.getElementById("nombreGasto").value = listaNombresGastos[posicion];
    document.getElementById("valorGasto").value = listaValoresGastos[posicion];
    document.getElementById("detalleGasto").value = listaDetallesGastos[posicion];  
    
    //Cambiamos el texto del boton
    const cambiarBoton = document.getElementById("botonFormulario");
    cambiarBoton.innerText = "Actualizar Gasto";

    //Se Cambia el evento del boton
    cambiarBoton.onclick = function(){
        actualizarGastos(posicion);
        cambiarBoton.innerText = "Agregar Gasto";
        cambiarBoton.onclick = function(){clickBoton();};
    }
}

//Funcion que actualiza el gasto con los nuevos valores
function actualizarGastos(posicion){
    listaNombresGastos[posicion] = document.getElementById("nombreGasto").value;
    listaValoresGastos[posicion] = document.getElementById("valorGasto").value;
    listaDetallesGastos[posicion] = document.getElementById("detalleGasto").value;
    actualizarListaGastos();
}











