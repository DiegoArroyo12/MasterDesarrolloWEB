'use strict'

// Fetch y peticiones a servicios / apis rest

var divUsuarios = document.querySelector('#usuarios');
var divJanet = document.querySelector('#janet');
var divProfesor = document.querySelector('#profesor');

const getUsuarios = () => {
    return fetch('https://reqres.in/api/users');
};

const getJanet = () => {
    return fetch('https://reqres.in/api/users/2');
};

const listadoUsuarios = (usuarios) => {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');
        
        nombre.innerHTML = i + '. ' + user.first_name + " " + user.last_name;

        divUsuarios.appendChild(nombre);

        document.querySelector('.loading').style.display = 'none';
    });
};

const mostarJanet = (user) => {
    let nombre = document.createElement('h2');
    let avatar = document.createElement('img');
        
    nombre.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';

    divJanet.appendChild(nombre);
    divJanet.appendChild(avatar);

    document.querySelector('#janet .loading').style.display = 'none';
};

// Crear promesa
const getInfo = () => {    
    var profesor = {
        nombre: 'Diego',
        apellido: 'Arroyo',
        url: 'diegoarroyo.com'
    };

    return new Promise ((resolve, reject) => {
        var profesorString = '';
        
        setTimeout(() => {
            profesorString = JSON.stringify(profesor)
            if (typeof profesorString != 'string' || profesorString == '') return reject('error');
            return resolve(profesorString);
        }, 3000);

    });
};

getUsuarios()
    .then(data => data.json())      // Convertimos los datos a JSON
    .then(users => {                // Obtenemos los datos
        listadoUsuarios(users.data);
        
        return getInfo();
    })
    .then(data => {
        divProfesor.innerHTML = data;
        return getJanet();
    })
    .then(data => data.json())
    .then(janet => {
        mostarJanet(janet.data);
    })
    .catch(error => {               // Capturar errores del fetch
        console.log(error);
        alert('Error en las peticiones.')
    });