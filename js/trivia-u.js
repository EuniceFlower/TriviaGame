
const preguntas=[
    "What date was America discovered?",
    "What date did the first world war end?",
    "Where did the Olympic games originate?",
    "Which country was Adolf Hitler born?",
    "Where did Napoleon die?",
    "Who fought in the so called Battle of Marathon?",
    "What date did World War II start?",
    "Which war did Joan of Arc participate?",
    "What wives of Henry VIII were beheaded?",
    "Which Roman Emperor legalized Christianity and ended the persecution of Christians?"
];
const alternativas=[
    ["October 12, 1493","October 12, 1492","October 6, 1943","February 12, 1942"],
    ["November 11, 1918","December 11, 1918","November 11, 1919","November 12, 1918"],
    ["In Poland","In Russia","In Greece","In Peru"],
    ["Germany","Israel","Russia","Austria"],
    ["On the island of Ibiza","On St. Helena island","In the Galapagos islands","In his house"],
    ["Greeks and Persians","Germans and Greeks","Turks and Persians","Greeks and Turks"],
    ["November 1, 1939","September 2, 1939","September 1, 1939","February 12, 1997"],
    ["In the 100 years war","In the Battle of Marathon","In the 90 years war","In the 101 year war"],
    ["Ana Bolena and Catalina de Aragón","Ana de Cléveris and Ana Bolena","Catalina Howard and Catalina Parr","Anne Boleyn and Catherine Howard"],
    ["Emperor nero","Emperor Hadrian","Emperor Trajan","Emperor constantine"]
];
const respuestas=[
    1,0,2,3,1,0,2,0,2,3
];

const pgs=document.querySelector("#pgs");       //Elemento donde se mostrará la pregunta

let persona=JSON.parse(localStorage.getItem("value"));   //Para obtener nombre de persona
const titulo=document.querySelector('#title');    //Elemento donde mostrará el nombre de usuario

let rspGuia=document.querySelector('#rsp-guia');    //Elemento guia de preguntas respondidas
let total=document.querySelector('#total'); //Elemento guia de preguntas faltantes

let form=document.querySelector('#form');   //Elemento donde se mostrará las preguntas

const enviarBoton=document.getElementById('enviar');  //Botón para mostrar resultados al finalizar la trivia  
const rst=document.getElementById('rst');   //elemento que mostrará los resultados de la trivia en la card

// nombre de la persona
titulo.innerHTML = "Hello " + persona.nombre;    //Agrega el nombre de usuario como título

let cont=0;
let arrayResp=new Array();  //Necesito un array para almacenar las respuestas de usuario

const printFirst=(indice)=>{
    rspGuia.innerHTML=String(indice+1);     //Guia de pregunta
    total.innerHTML=preguntas.length;
    pgs.innerHTML=preguntas[indice];      //Agregando la pregunta al card
    
    let cad="";
    cad+=`<option class="op" disabled selected value="Select">Select alternative</option><br/>`;
    for(let i=0;i<alternativas[indice].length;i++){
    cad+=`<option class="op" value=${i}>${alternativas[indice][i]}</option><br/>`;
}
    form.innerHTML=cad;
    cont++;
 };
 const trivia = () => {
    if(cont<preguntas.length){
        printFirst(cont);
     }else{
         enviar();
     } 
 };
 // LLama a trivia la primera pregunta
 trivia();

 activar = () => {
     arrayResp.push(form.value);
    trivia();
 };

 enviar = () => {
     enviarBoton.innerHTML=`<button onclick="mostrarR()"
      class="iniciar boton-u">Show results</button>`;
 };
  
 resultados = () => {
     let aciertos=0;
     for(let i=0;i<respuestas.length;i++){
        if(respuestas[i]==arrayResp[i]){
            aciertos++;
        }
     }
     return aciertos;
 }
 
 mostrarR= () => {
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
