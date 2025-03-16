'use strict'

var Project = require('../models/project');
var fs = require('fs');
var path = require('path');

var controller = {
    home: function(req, res) {  
        return res.status(200).send({
            message: 'Soy la home'
        });
    },
    test: function(req, res) {
        return res.status(200).send({
            message: 'Soy el método o acción test del controlador de project'
        });
    },
    saveProject: function (req, res) {
        var project = new Project();
     
        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;
     
        project.save().then((projectStored) => {
          return res.status(200).send({
            message: "Proyecto Guardado",
            project: projectStored,
          });
        })
        .catch((error) => {
            if (!projectStored)
              return res
                .status(404)
                .send({ message: "No se pudo guardar el proyecto." });
     
            if (error)
              return res
                .status(500)
                .send({ error: "Error al guardar el proyecto." });
        });
    },
    getProject: function(req, res) {
        var projectId = req.params.id;

        Project.findById(projectId)
            .then((project) => {
                if (!project) {
                    return res.status(404).send({ message: 'El proyecto no existe.' });
                }
                return res.status(200).send({ project });
            })
            .catch((err) => {
                return res.status(500).send({ message: 'Error al devolver los datos.' });
            });
    },
    getProjects: function(req, res) {
        Project.find().sort('-year') // Acomoda por el año
            .then((projects) => {
                if (!projects) {
                    return res.status(404).send({ message: 'No se encontraron proyectos.' });
                }
                return res.status(200).send({projects})
            })
            .catch((err) => {
                return res.status(500).send({ message: 'Error al devolver los proyectos.' });
            });
    },
    updateProject: function(req, res) { 
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, {new: true}) // new es para que muestre los datos actualizados
            .then((projectUpdate) => {
                if (!projectUpdate) {
                    return res.status(404).send({ message: 'No existe el proyecto para actualizar.' });
                }
                return res.status(200).send({ projectUpdate });
            })
            .catch((err) => {
                return res.status(500).send({ message: 'Error al actualizar.' });
            });
    },
    deleteProject: function(req, res) {
        var projectId = req.params.id;

        Project.findByIdAndDelete(projectId)
            .then((projectDelete) => {
                if (!projectDelete) {
                    return res.status(404).send({ message: 'No existe el proyecto a eliminar.' });
                }
                return res.status(200).send({ projectDelete });
            })
            .catch((err) => {
                return res.status(500).send({ message: 'No se ha podido borrar el proyecto' });
            })
    },
    uploadImage: function(req, res) {
        var projectId = req.params.id;
        var filename = "Imagen no subida...";

        if (req.files) {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('/');
            var filename = fileSplit[1];
            var extSplit = filename.split('.'); // Obtener la extensión de la imagen
            var fileExt = extSplit[1];

            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
                Project.findByIdAndUpdate(projectId, {image: filename}, {new: true})
                    .then((projectUpdate) => {
                        if (!projectUpdate) {
                            return res.status(404).send({ message: 'No existe el proyecto para actualizar.' });
                        }
                        return res.status(200).send({ project: projectUpdate });
                    })
                    .catch((err) => {
                        return res.status(500).send({ message: 'No se ha podido actualizar el proyecto' }); 
                    });
            } else {
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({ message: 'La extensión no es válida' });
                });
            }
        }
    },
    getImageFile: function(req, res) {
        var file = req.params.image;
        var path_file = './uploads/'+file;

        fs.access(path_file, fs.constants.F_OK, (err) => {
            if (err) {
                return res.status(200).send({ message: "No existe la imagen..." });
            } else {
                return res.sendFile(path.resolve(path_file));
            }
        });
    }
}

module.exports = controller;