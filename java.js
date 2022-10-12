alert("Hola!!");
var Menu_1 = prompt("MENU\n1.-Iniciar sesion\n2.-Registro\n3.-Salir");
var mi_usuario = "Jonatan", password = "1234";
if (Menu_1 == "1") {
    var j = 1;
    for (i = 0; i < j; i++) {
        var usuario_creado = prompt("Ingrese su nombre de usuario.");
        if (usuario_creado == mi_usuario && usuario_creado == usuariocreat) {

            g = 1;
            for (i = 0; i < g; i++) {

                var contraseña_creada = prompt("Ingrese su contraseña.");
                if (contraseña_creada == password && contraseña_creada == contraseñacreat) {
                    alert("Bienvenido " + mi_usuario + "!!");
                    //un game infito;
                } else {
                    alert("Contraseña incorrecta.");
                    g++;
                }
            }

        } else {
            alert("Usuario incorrecto, vuelva intentarlo");
            j++;
        }
    }

}
if (Menu_1 == "2") {
    console.log("Se va a registrar un usuario:\n...");
    alert("Registro de usuario");
    var j = 1;
    for (i = 0; i < j; i++) {
        var usuariocreat = prompt("Ingrese un nombre de usuario");
        var confirmm = prompt("Deseas colocar '" + usuariocreat + "' como nombre de usuario? (y/n)");
        if (confirmm == "y") {
            var contraseñacreat = prompt("Ingrese una contraseña (minimo 4 dig)");
            alert("CUENTA REGISTRADA!\nBienvenido " + usuariocreat);
            
            
            usuariocreat;
            contraseñacreat;
            //var select = prompt("MENU\n1.-Iniciar sesion\n2.-Registro\n3.-Salir");
        } else {
            j++;
            //prompt("REGISTRO\n1.-Volver a registrarte\n2.Salir");
        }
    }
}

else {

}
