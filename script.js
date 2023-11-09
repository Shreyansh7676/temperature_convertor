const celcius=document.querySelector("#celcius");
const faharenite=document.querySelector("#faherenite");

window.addEventListener("load",()=>faharenite.focus());

celcius.addEventListener("input",()=>{
    faharenite.value=((celcius.value*9)/5+32).toFixed(2);
    if(!celcius.value){
        faharenite.value="";
    }    
});

faharenite.addEventListener("input",()=>{
    celcius.value=(((faharenite.value-32)*5)/9).toFixed(2);
    if(!faharenite.value){
        celcius.value="";
    }    
});