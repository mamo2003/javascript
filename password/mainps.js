let paso =prompt("Ingrese un password con: mas de 8 caracteres. Debe contener letras en miniscula y una  vocal mayuscula, numeros y un punto final:")
// let num= 0||1||2||3||4||5||6||7||8||9;
// let let_1= "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
let may="A,E,I,O,U";
// let largo= ((paso.length()>=9)!=-1);
// let punto=((paso.slice(-1)===".")!=-1);
// let numero=(num.indexOf(paso.charAt(i),0)!=-1);
// let abc=(letras.indexOf (paso.charAt(i),0)!=-1);
// let mayuscula=(mayu.indexOf(paso.charAt(i),0)!=-1);
// paso= [largo && punto && numero && abc && mayuscula]
// switch(paso){
// case largo: 
//     console.log("ok");
// break;
// case punto: (paso.slice(-1)===".") 
//     console.log("ok2");
// break;
// case numero: (num.indexOf(paso.charAt(i),0)!=-1)
//     console.log("ok3");
// break;
// case abc:(letras.indexOf (paso.charAt(i),0)!=-1)
//     console.log("ok");
// break;
// case mayuscula: (mayuscula.indexOf(paso.charAt(i),0)!=-1)
//     console.log("ok5");
// break;
// default:
//     console.log ("no se cumplieron los requisitos para el password, intentalo nuevamente!");
// }
// let numeros = paso.replace(/[^0-9]/g,"").length;

let largo=(paso.length)>=8;
let punto= (paso.slice(-1)===".");
let numero= isNaN(paso);
// let numeroi = parseInt(numero);
let letras = paso.replace(/[^a-z]/g,"").length;
let mayuscula = (paso === paso.toUpperCase());
paso = largo && punto && numero && letras && mayuscula;
// if((paso.length)>=8){console.log("oklargo")}
// if(paso.slice(-1)==="."){console.log("okpunto")}
// if(numero){console.log("oknum")}
// if(letras){console.log("okletra")}
// if(mayuscula){console.log("okmayo")}
// else{"no cumple con los criterios establecidos, prueba nuevamente"}

switch(paso){
case largo:
    console.log("falta largo");
    break;
case punto:
    console.log("falta punto");
    break;   
case numero:
    console.log("faltan numeros");
    break;
case letras:
    console.log("faltan letras");
    break;
case mayuscula:
    console.log("ok, cumple con lo solicitado");
    break;
default:
    console.log("no cumple con lo solicitado, prueba nuevamente!");
    break;
}
