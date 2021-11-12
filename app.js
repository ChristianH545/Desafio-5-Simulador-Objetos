/* ------Objeto, Propiedad y Metodo ------ */
class monedas {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  formula1(pesosA) {
    let resultadoA = pesosA / dolarHoy.precio;
    alert(
      `la conversion Pesos a ${dolarHoy.nombre} es:  ${resultadoA.toFixed(
        2
      )} Dolares`
    );
    return;
  }
  formula2(pesosB) {
    let resultadoB = pesosB / euroHoy.precio;
    alert(`la conversion Pesos a Euros es:  ${resultadoB.toFixed(2)} Euros`);
    return;
  }
  formula3(euro) {
    let resultadoC = euro * pesosC.precio;
    alert(
      `la conversion Euros a Pesos es:  ${resultadoC.toFixed(2)} Pesos-Ars`
    );
    return;
  }
  formula4(dolar) {
    let resultadoD = dolar * pesosD.precio;
    alert(
      `la conversion Dolar a Pesos es:  ${resultadoD.toFixed(2)} Pesos-Ars`
    );
    return;
  }
}
/* ------variables de mis objetos ------ */
const dolarHoy = new monedas("Dolar", 206);
const euroHoy = new monedas("Euro", 232);
const pesosD = new monedas("Pesos-Ars", 206);
const pesosC = new monedas("Pesos-Ars", 232);

/* ------nuestro ciclo  ------ */
while (opcionUsuario != "s") {
  var opcionUsuario = prompt(`ingrese las Divisas que desea convertir: 
 A)- Pesos a Dolar?
 B)- Pesos a Euros?
 C)- Euros a Pesos?
 D)- Dolar a Pesos?
 S)- para salir`).toLowerCase();
  switch (opcionUsuario) {
    case "a":
      alert("Ha Elegido A)- Pesos a Dolar... Gracias!");
      let pesosA = parseFloat(
        prompt(
          'Por favor ingrese el monto en "PesosArs" que desea convertir en dolares. "Gracias" '
        )
      );
      dolarHoy.formula1(pesosA);
      break;
    case "b":
      alert("Ha Elegido B)- Pesos a Euros... Gracias!");
      let pesosB = parseFloat(
        prompt(
          'Por favor ingrese el monto (en Pesos-Ars) que desea convertir en Euros. "Gracias" '
        )
      );
      euroHoy.formula2(pesosB);
    case "c":
      alert("Ha Elegido C)- Euros a Pesos ... Gracias!");
      let euro = parseFloat(
        prompt(
          'Por favor ingrese el monto (en Euros) que desea convertir en "Pesos-Ars". "Gracias" '
        )
      );
      pesosC.formula3(euro);
      break;
    case "d":
      alert("Ha Elegido D)- Dolar a Pesos ... Gracias!");
      let dolar = parseFloat(
        prompt(
          'Por favor ingrese el monto en "Dolares" que desea convertir en "Pesos-Ars". "Gracias" '
        )
      );
      pesosD.formula4(dolar);
      break;
    case "s":
      alert("usded ha no querido realizar una operacion cambiaria");
      break;
    default:
  }
}
