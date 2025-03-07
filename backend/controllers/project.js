'use strict'

var Project = require('../models/project');

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
    }
}

module.exports = controller;