console.log("*Bienvenido a jugar*");




let personajes = [
    {
        name:['ironman',],
        name1:['tony stark'],
        foto:'ironman.png',
        preguntas:['¿Es un dios?','¿Tiene superpderes?','¿Es experto en la creacion de artefactos tecnologicos?','¿Es un ser humano?','¿Este vengador vuela?'],
        respuestas:['no','no','si','si','si']
    },
    {
        name:['thor'],
        name1:['dios del trueno'],
        foto:'thor.png',
        preguntas:['¿Proviene de otro planeta?','¿Tiene superpoderes?','¿Es un dios?','¿Utiliza una armadura roja?','¿Utiliza un objeto para luchar?'],
        respuestas:['si','si','si','no','si']   
    },
    {
        name:['bruja escarlata'],
        name1:['bruja'],
        foto:'bruja.png',
        preguntas:['¿Es un ser humano?','¿Tiene superpoderes?','¿Proviene de otro planeta?','¿Utiliza un objeto para luchar?','¿Posee habilidades telepaticas?'],
        respuestas:['si','si','no','no','si']   
    },
    {
        name:['hulk',],
        name1:['hulk'],
        foto:'hulk.png',
        preguntas:['¿Tiene superpoderes?','¿Utiliza un objeto para luchar?','¿Posee la habilidad de aumentar su fuerza?','¿Proviene de otro planeta?','¿Es un dios?'],
        respuestas:['no','no','si','no','no']   
    },
    {
        name:['viuda negra'],
        name1:['black widow'],
        foto:'viudanegra.png',
        preguntas:['¿Es un ser humano?','¿Utiliza objetos para luchar?','¿Tiene superpoderes?','¿Posee habilidades telepaticas?','¿Utiliza una armadura roja?'],
        respuestas:['si','si','no','no','no']   
    }
];

const imgPersonaje = document.getElementById("imgPersonaje");
const playJuego =  document.getElementById("playJuego");
let indice =0;
let opacidad = 9;
let score = 0;
const gana = document.getElementById("gano");
const pierde = document.getElementById("perdio");

playJuego.addEventListener('click', () =>{

    console.log(indice)
    
     

    const pregunta0 = document.getElementById("pregunta0");
    const pregunta1 = document.getElementById("pregunta1");
    const pregunta2 = document.getElementById("pregunta2");
    const pregunta3 = document.getElementById("pregunta3");
    const pregunta4 = document.getElementById("pregunta4");
    const rtag = document.getElementById("respuestaGeneral");
    const puntaje = document.getElementById("puntaje");
    puntaje.value = score+"/10";
    rtag.value= "";

    gana.style.display = "none";
    pierde.style.display = "none";


    imgPersonaje.src = "./assets/img/" + personajes[indice].foto;
    imgPersonaje.style.filter = "blur(20px)";
    
        pregunta0.value=personajes[indice].preguntas[0];
        pregunta1.value=personajes[indice].preguntas[1];
        pregunta2.value=personajes[indice].preguntas[2];
        pregunta3.value=personajes[indice].preguntas[3];
        pregunta4.value=personajes[indice].preguntas[4];

        const respuesta0 = document.getElementById("respuesta0")
        respuesta0.disabled = false;
        respuesta0.value = "";
        document.getElementById("icoRta0").src ="";

respuesta0.addEventListener('change', ()=>{
  
     //console.log (" rta " + respuesta0.value)
     

     if (respuesta0.value == personajes[indice].respuestas[0]) {
         opacidad = opacidad - 1
         imgPersonaje.style.filter = "blur(" + opacidad + "px)";
         document.getElementById("icoRta0").src ="./assets/img/bien.png";
         
     } else  {
        document.getElementById("icoRta0").src ="./assets/img/mal.png";
     }

      respuesta0.disabled = true;
});


const respuesta1 = document.getElementById("respuesta1")

respuesta1.disabled = false;
        respuesta1.value = "";
        document.getElementById("icoRta1").src ="";

respuesta1.addEventListener('change', ()=>{
  
     //console.log (" rta " + respuesta0.value)
     

     if (respuesta1.value == personajes[indice].respuestas[1]) {
         opacidad = opacidad - 1
         imgPersonaje.style.filter = "blur(" + opacidad + "px)";
         document.getElementById("icoRta1").src ="./assets/img/bien.png";
         
     } else  {
        document.getElementById("icoRta1").src ="./assets/img/mal.png";
     }

      respuesta1.disabled = true;
});


const respuesta2 = document.getElementById("respuesta2")

respuesta2.disabled = false;
        respuesta2.value = "";
        document.getElementById("icoRta2").src ="";

respuesta2.addEventListener('change', ()=>{
  
     //console.log (" rta " + respuesta0.value)
     

     if (respuesta2.value == personajes[indice].respuestas[2]) {
         opacidad = opacidad - 1
         imgPersonaje.style.filter = "blur(" + opacidad + "px)";
         document.getElementById("icoRta2").src ="./assets/img/bien.png";
         
     } else  {
        document.getElementById("icoRta2").src ="./assets/img/mal.png";
     }

      respuesta2.disabled = true;
});

const respuesta3 = document.getElementById("respuesta3")

respuesta3.disabled = false;
        respuesta3.value = "";
        document.getElementById("icoRta3").src ="";

respuesta3.addEventListener('change', ()=>{
  
     //console.log (" rta " + respuesta0.value)
     

     if (respuesta3.value == personajes[indice].respuestas[3]) {
         opacidad = opacidad - 1
         imgPersonaje.style.filter = "blur(" + opacidad + "px)";
         document.getElementById("icoRta3").src ="./assets/img/bien.png";
         
     } else  {
        document.getElementById("icoRta3").src ="./assets/img/mal.png";
     }

      respuesta3.disabled = true;
});


const respuesta4 = document.getElementById("respuesta4")

respuesta4.disabled = false;
        respuesta4.value = "";
        document.getElementById("icoRta4").src ="";

respuesta4.addEventListener('change', ()=>{
  
     //console.log (" rta " + respuesta0.value)
     

     if (respuesta4.value == personajes[indice].respuestas[4]) {
         opacidad = opacidad - 1
         imgPersonaje.style.filter = "blur(" + opacidad + "px)";
         document.getElementById("icoRta4").src ="./assets/img/bien.png";
         
     } else  {
        document.getElementById("icoRta4").src ="./assets/img/mal.png";
     }

      respuesta4.disabled = true;
});


      

})
const btnRespuesta = document.getElementById("btnRespuesta")

btnRespuesta.addEventListener('click' , () => {
  
    const respuestaGeneral = document.getElementById("respuestaGeneral").value;

      console.log ("respuesta final " + respuestaGeneral)

      if (respuestaGeneral == personajes[indice].name || respuestaGeneral == personajes[indice].name1 ) {
        opacidad=10;
        score++;
         imgPersonaje.style.filter = "blur(0px)";
        score++;
        gana.style.display = "block";
      } else {

        opacidad=10;
         imgPersonaje.style.filter = "blur(" + opacidad + "px)";

        pierde.style.display = "block";
      }

    indice++;




});


