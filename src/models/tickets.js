import {Schema, model} from 'mongoose'
import bcrypt from "bcryptjs"

const ticketsSchema = new Schema({
    codigo:{
        type:Number,
        require:true,
        trim:true
    },
    descripcion:{
        type:String,
        require:true,
        trim:true
    },
    id_tecnico:{
        type:Number,
        require:true,
        trim:true
    },
    id_cliente:{
        type:Number,
        require:true,
        trim:true
    }
},{
    timestamps:true
})

export default model('tickets',ticketsSchema)