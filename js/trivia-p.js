
const preguntas=[
    "What date was the independence of Peru proclaimed?",
    "What is the first university in Peru?",
    "What was the largest pre-Columbian empire located in parts of Peru?",
    "Which Spanish led the expedition that began the conquest of Peru?",
    "Who was the last Inca sovereign?",
    "What viceroy of Peru was known as El Solón Virreinal?",
    "Who led the Liberation Expedition of Peru in the 19th century?",
    "Where did José de San Martín proclaim the independence of Peru?",
    "Who was the first president of the Republic of Peru?",
    "What battle did Peruvian President Agustín Gamarra die in 1841?"
];
const alternativas=[
    ["July 12, 1820","July 28, 1821","June 28, 1821","July 20, 1821"],
    ["César Vallejo University","La Molina National Agrarian University","Lima University","National University of San Marcos"],
    ["Chimu Empire","Inca Empire","Vicús Empire","Ottoman Empire"],
    ["Francisco Pizarro","Francisco Pérez","Francisco García","Francisco Sánchez"],
    ["Tupac Amaru II","Sinchi Roca","Atahualpa","Mama Occllo"],
    ["Francisco de Toledo","Francisco Pizarro","Eduardo de Toledo","Emiliano de Toledo"],
    ["José de Pizarro","Francisco Pizarro","Alejandro Toledo","José de San Martín"],
    ["Plaza de Armas de Piura","Plaza Bolívar","Plaza Mayor de Lima","Plaza Fuerte"],
    ["José de la Riva Agüero","José Balta","Alberto Fujimori","Fernando Belaúnde Terry"],
    ["En la batalla de Angamos","En la batalla de Pachachaca","En la batalla de Tarapacá","En la batalla de Ingavi"]
];
const respuestas=[
    1,3,1,0,2,0,3,2,0,3
];

const pgs=document.querySelector("#pgs");       //Elemento donde se mostrará la pregunta

let persona=JSON.parse(localStorage.getItem("value")); //Para obtener nombre de persona
const titulo=document.querySelector('#title'); //Elemento donde mostrará el nombre de usuario

let rspGuia=document.querySelector('#rsp-guia'); //Elemento guia de preguntas respondidas
let total=document.querySelector('#total'); //Elemento guia de preguntas faltantes

let form=document.querySelector('#form'); //Elemento donde se mostrará las preguntas

const enviarBoton=document.getElementById('enviar'); //Botón para mostrar resultados al finalizar la trivia
const rst=document.getElementById('rst'); //elemento que mostrará los resultados de la trivia en la card

// nombre de la persona
titulo.innerHTML = "Hello " + persona.nombre; //Agrega el nombre de usuario como título

let cont=0;
let arrayResp=new Array(); //Necesito un array para almacenar las respuestas de usuario

const printFirst=(indice)=>{
    rspGuia.innerHTML=String(indice+1);   //Guia de pregunta
    total.innerHTML=preguntas.length;      
    pgs.innerHTML=preguntas[indice];    //Agregando la pregunta al card

    let cad="";
    cad+=`<option class="op" disabled selected value="Select">Selecciona alternativa</option><br/>`;
    for(let i=0;i<alternativas[indice].length;i++){
    cad+=`<option class="op" value=${i}>${alternativas[indice][i]}</option><br/>`;      //Agregando las alternativas
}
    form.innerHTML=cad;
    cont++;
 };
 function trivia(){
    if(cont<preguntas.length){
        printFirst(cont);
     }else{
         enviar();
     } 
 };
 //LLama a trivia la primera pregunta
 trivia();


 function activar(){
     arrayResp.push(form.value);
    trivia();
 };

 function enviar(){
     enviarBoton.innerHTML=`<button onclick="mostrarR()"
      class="iniciar boton-u">Show results</button>`;
 };
  
 function resultados(){
     let aciertos=0;
     for(let i=0;i<respuestas.length;i++){
        if(respuestas[i]==arrayResp[i]){
            aciertos++;
        }
     }
     return aciertos;
 }
 
 function mostrarR(){
    let totalA=resultados();
     let valorR={
         "resultado":totalA,
         "preguntas":preguntas,
         "alternativas":alternativas,
         "respuestas":respuestas,
         "respuestaUser":arrayResp
     };
     localStorage.setItem("valorR",JSON.stringify(valorR));
     window.location.href="resultados.html";
    
 }
