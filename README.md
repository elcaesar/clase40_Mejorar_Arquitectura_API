# API REST con patron DAO/DTO/Factory

##  Persistencia: MongoDB Atlas y Firebase

### Para instalar los paquetes necesarios usar:

``` npm install ```

### Para usar en local ejecutar:

``` npm run dev ``` or ``` npm start ```
### En el .env se debe cambiar el valor de la variable PERSISTENCE por MONGO o FIREBASE y luego arrancar el servidor

### Para probar, usar postman o cualquier otro cliente de apis de la siguiente:

`get` localhost:PORT/users <br>
`post` localhost:PORT/users y mandar el objeto por ejemplo:

{
    "email": "usuario@email.com",
    "username": "usuario1",
    "password": "12345"
}

### `Nota:` Para probar se debe ingresar las credenciales correspondientes a MongoDB y Firebase.

Ejemplo de captura con Firebase:

<img src="/screenshots/firestore.jpg" alt="folders"/>
<br>

Ejemplo de salida luego de ingresar `localhost:PORT/users` 

<img src="/screenshots/users_firestore.jpg" alt="folders"/>
