var objPeople = [
	{
		username: "adisa",
		password: "whatitdew22"
	},
	{
		username: "william",
		password: "icarusjr420"
	},
	{
		username: "erika",
		password: "weepystudent23"
	}
]

var confirm = document.getElementById("confirm")

function clear() {
	confirm.innerHTML = " "
}

// login functionality
function login() {
	// retrieve data input from form
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value

	// loop through user objects and confirm if username & password correct
	for(i = 0; i < objPeople.length; i++) {
		if(username.toLowerCase() == objPeople[i].username && password == objPeople[i].password) {
			confirm.innerHTML = username + " is logged in!"
			setTimeout(clear, 2000)
			return
		}
	}
	// error message if user and password don't match
	confirm.innerHTML = alert("incorrect username or password");
	setTimeout(clear, 2000)
}

function registerUser() {
	var registerUser = document.getElementById("newUser").value
	var registerPassword = document.getElementById("newPassword").value
	var newUser = {
		username: registerUser,
		password: registerPassword
	}

	for(i=0; i < objPeople.length; i++) {
		if(registerUser == objPeople[i].username) {
			alert("that username is already in use, please choose another")
			return
		} else if(registerPassword.length < 8) {
			alert("that password is too short, include 8 or more characters")
			return
		}
	}

	objPeople.push(newUser)
	console.log(objPeople)
    
}



localStorageUserslist = (objPeople[" "]);

<<<<<<< HEAD
     //usuario registrado

     boton.addEventListener("click", ()=>{
        let nombre = document.querySelector(".nombre").value;
        let clave = document.querySelector(".clave").value;

      Object.values(array).forEach(data =>{
       console.log(data)
       console.log(nombre)
          if(data.pass == clave){
             console.log("si")
            window.location = "pagina.html"
          } else{
            console.log("no")
          }

      })

       

     })

=======
function localStorageUsers(plis){
    localStorage.setItem("localUsers", JSON.stringify(plis));
}
>>>>>>> 604efd684d5695781840ee5debee2433ad85f096
