import {Schema, model} from 'mongoose'
import bcrypt from "bcryptjs"

const clientesSchema = new Schema({
    cedula:{
        type:Number,
        require:true,
        trim:true
    },
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    apellido:{
        type:String,
        require:true,
        trim:true
    },
    ciudad:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    direccion:{
        type:String,
        require:true,
        trim:true
    },
    telefono:{
        type:Number,
        require:true
    },
    fecha_nacimiento:{
        type:Date,
        require:true
    },
    dependencia:{
        type:String,
        require:true
    }
},{
    timestamps:true
})

export default model('clientes',clientesSchema)