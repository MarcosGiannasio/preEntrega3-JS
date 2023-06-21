const tipoDeco = prompt("Tu consulta es por deco particular o business");

switch (tipoDeco.toLowerCase()) {
          case "particular":
                    var tipoAmbiente= (prompt("Detallá si tu ambiente es interior o exterior"));
                    //var ambiente= (prompt("Ingresá que ambiente queres remodelar"));
                    
          break;
          case "business":
                    var rubro= (prompt("Ingresá el rubro de tu negocio o emprendimiento"));
          break;
          default:
                    alert("Por favor ingresá una de las dos opciones o iniciá sesión para continuar");
                    console.log("Por favor ingresá una de las dos opciones o iniciá sesión para continuar");
} 

let porcentajeCotiz = 15300;


if (tipoDeco == "particular" && tipoAmbiente== "interior"){
          var cotizM2 = Number(prompt("ingresá los m2 totales para obtener una cotización aproximada"));
          var cotizAlt = Number(prompt("Ingresá la altura de tu/s ambiente/s"));
          var cotizYear = Number(prompt("Ingresá en años la antiguedad"));
          alert("cotización aproximada para tu nuevo hogar: $" + (cotizM2 * porcentajeCotiz * cotizAlt) / cotizYear);
          console.log("cotización aproximada para tu nuevo hogar: $" + (cotizM2 * porcentajeCotiz * cotizAlt) / cotizYear)

}else if (tipoDeco == "business" || tipoAmbiente == "exterior"){
          alert("comunicate por mail o Whatsapp para brindarte mas información");
          console.log("comunicate por mail o Whatsapp para brindarte mas información");  }
else alert("debes detallar si se trata de interiores o exteriores");




if (cotizM2==""  || cotizAlt=="" || cotizYear =="" || cotizM2 == 0 || cotizAlt == 0 || cotizYear == 0){
          alert("para cotizar, deberás ingresar un valor válido: ");
          var cotizM2 = Number(prompt("ingresá los m2 totales para obtener una cotización aproximada"));
          var cotizAlt = Number(prompt("Ingresá la altura de tu/s ambiente/s"));
          var cotizYear = Number(prompt("Ingresá en años la antiguedad"));
          alert("cotización aproximada para tu nuevo hogar: $" + (cotizM2 * porcentajeCotiz * cotizAlt) / cotizYear);
          console.log("cotización aproximada para tu nuevo hogar: $" + (cotizM2 * porcentajeCotiz * cotizAlt) / cotizYear);
} 

