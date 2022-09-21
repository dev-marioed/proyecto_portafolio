let campoNombre=document.getElementById("inputNombre");
let campoApellido=document.getElementById("inputApellido");

let Correo = document.getElementById("inputCorreo");
let tel = document.getElementById("inputTelefono");

let btnCotizar = document.getElementById("btnCotizar");
let alertSend = document.getElementById("alertSend");
let campoPaginas=parseInt(document.getElementById("inputPaginas").value);
let campoTemas=parseInt(document.getElementById("inputTemas").value);
let campoAlerta=document.getElementById("alertCotizacion");

campoNombre.addEventListener("blur",function(e){    
    e.preventDefault();
// validar que el nombre contenga solo letras, incluyendo espacios y acentos. 
if(
    (campoNombre.value.length>=3)&&(campoNombre.value.length<=20)    
    ){ //validacion nombre
    campoNombre.classList.remove("is-invalid");
    campoNombre.classList.add("is-valid");
}else{
    campoNombre.classList.remove("is-valid");
    campoNombre.classList.add("is-invalid");
}
//validación caracteres en Nombre, sean mayusculas o minusculas
    for (let i = 0; i < campoNombre.value.length; i++) {
        if(
                    
            ((campoNombre.value.toUpperCase().charCodeAt(i)<65)
            || //or
            (campoNombre.value.toUpperCase().charCodeAt(i)>90))

            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=32))//si está fuera de letras mayusculas y de las vocales con acento, fuera
            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=193))
            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=201))
            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=205))
            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=211))
            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=209))      )
        {
            
            campoNombre.classList.remove("is-valid");
            campoNombre.classList.add("is-invalid"); 
            break;
            
        }else{
         
            //console.log(campoNombre.value.charAt(i));
        }
    }
});//fin funcion anonima y boton, ox por ahora

campoApellido.addEventListener("blur",function(e){    
    e.preventDefault();

if((campoApellido.value.length>=3)&&(campoApellido.value.length<=50)){ //validacion apellido
    campoApellido.classList.remove("is-invalid");
    campoApellido.classList.add("is-valid");
}else{
    campoApellido.classList.remove("is-valid");
    campoApellido.classList.add("is-invalid");
}
//validación caracteres en Apellido
    for (let i = 0; i < campoApellido.value.length; i++) {  

        if(
                      
            ((campoApellido.value.toUpperCase().charCodeAt(i)<65)
            || //or
            (campoApellido.value.toUpperCase().charCodeAt(i)>90))

            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=32))
            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=193))
            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=201))
            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=205))
            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=211))
            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=209))      )
        {
            
            campoApellido.classList.remove("is-valid");
            campoApellido.classList.add("is-invalid"); 
            break;            

        }else{

            console.log(campoApellido.value.charAt(i));
        }
    }
});//fin funcion anonima y boton, ok por ahora

//validacion de correo, minimo un arroba y un punto.
Correo.addEventListener("blur", function(e){
    e.preventDefault()
   

    Correo.classList.remove("is-invalid");
    Correo.classList.add("is-valid");

    if ( (Correo.value.length>=6) && (Correo.value.length<=70) ){
        
        Correo.classList.remove("is-invalid");
        Correo.classList.add("is-valid");
        
    }else{
        Correo.classList.remove("is-valid");
        Correo.classList.add("is-invalid");
        
    }

    
    if((Correo.value.includes("@"))&&(Correo.value.includes(".com"))){  //includes evalua si un caracter está dentro de un string
        console.log("felicidades");

   }//if 

 



});//cooreo, ok por ahora


//Validacion de numero, ok por ahora

tel.addEventListener("blur", function (e) {
    e.preventDefault()
    
    let telValor = tel.value;

    //validando campo usuario
    if(telValor.length==10 && !isNaN(telValor)){
        tel.classList.remove("is-invalid")
        tel.classList.add("is-valid")

    }else{
        tel.classList.remove("is-valid")
        tel.classList.add("is-invalid")
    }

})
//Validacion mensaje



btnCotizar.addEventListener("click", function (e){
    e.preventDefault();

    if( (isNaN(campoPaginas)) || (isNaN(campoTemas)) ){

        console.log("revisa paginas y temas")
    }else{
        console.log(quote(campoPaginas,campoTemas).toFixed(2)); 
        campoAlerta.innerHTML="Tu cotización es de $ "+quote(campoPaginas,campoTemas).toFixed(2);
        
    }
    
 
});//btn cotiza

function quote(p,t){ 
    let result=(p*500)*t;

    return result;
}  