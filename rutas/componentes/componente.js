const express = require('express');
const router = express.Router()
const ComponenteModel = require('../../modelos/componente')
//const ComponenteController = require()

router.get('/api', (req, res) => {
    res.send('Hola REST API')
})

router.get('/api/componentes/:componente_id', (req, res) => {
    const {id} = req.params
    ComponenteModel
    .findById(id)
    .then((Componente) => res.json(Componente))
    .catch((error) => res.json({message: error}));
})

router.get('/api/componentes', (req, res) => {
    ComponenteModel
    .find()
    .then((Componentes) => res.json(Componentes))
    .catch((error) => res.json({message: error}));
})

router.post('/api/componentes/nuevoComponente', (req, res) => {
    const componente = ComponenteModel(req.body);
    componente.save()
    .then((nuevoComponente) => res.json(nuevoComponente))
    .catch((error) => res.json({message: error}))
})

router.put('/api/componentes/:componente_id', (req, res) => {
    const {id} = req.params;
    const {componente_id, descripcion, ubicacion, activo, tipo, valor} = req.body
    ComponenteModel
    .updateOne({_id:id},{$set:{componente_id, descripcion, ubicacion, activo, tipo, valor}})
    .then((Componente) => res.json(Componente))
    .catch((error) => res.json({message: error}));
})

router.delete('/api/componentes/:componente_id', (req, res) => {
    const {id} = req.params
    ComponenteModel
    .remove({_id:id})
    .then((Componente) => res.json(Componente))
    .catch((error) => res.json({message: error}));
})

module.exports = router