
let boton1 = document.querySelector("#boton1");
let boton2= document.querySelector("#boton2")

let array = [];

   boton2.addEventListener("click", ()=>{
    let usuarionuevo = document.querySelector(".nombrenuevo").value;
    let clavenueva = document.querySelector(".clavenueva").value;

    let datos = {
        name:usuarionuevo,
        pass:clavenueva
    }
        array.push(datos)
    console.log(array)
   })






     //usuario registrado

     boton1.addEventListener("click", ()=>{
        // let nombre = document.querySelector(".nombre").value;
        let clave = document.querySelector(".clave").value;

      Object.values(array).forEach(data =>{
       console.log(data)
    //    console.log(nombre)
          if(data.pass === clave){
             console.log("si")
            window.location = "pagina.html"
          } else{
            document.querySelector(".error").innerHTML = "Contraseña no registrada"
          }

      })

       

     })

