const mongoose = require('mongoose');

const ComponenteSchema = new mongoose.Schema({
    componente_id: {
        type: String,
        unique: true,
        required: true
    },
    descripcion: {
        type: String
    }, 
    ubicacion: {
        type: String 
    },
    activo: {
        type: Boolean
    },
    tipo: {
        type: String
    },
    valor: {
        type: String
    }
}, { timestamps: true})

ComponenteSchema.index({componente_id: 1}, {unique: true})

module.exports = mongoose.model("Componente", ComponenteSchema)