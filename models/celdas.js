import { model, Schema } from 'mongoose';

const celdaSchema = new Schema({
    numeroCelda: { type: Number, unique: true, required: true },
    estado: { type: String, enum: ['disponible', 'no disponible'], default: 'disponible', required: true }, //enum restringe los datos que este pueda recibir, en nuestro caso disponible o no disponible, por defecto dejamos "disponible"
    placaVehiculo: { type: String, maxlength: 6 },
    fechaIngreso: { type: Date },
    fechaSalida: { type: Date },
    pin: { type: String }
});

celdaSchema.pre('save', async function(next) { //ejecuta antes de que se guarde en la base de datos
    if (this.isNew) { //nuevo documento
        const lastCelda = await this.constructor.findOne().sort('-numeroCelda'); //.sort ordena en orden descendente
        this.numeroCelda = lastCelda ? lastCelda.numeroCelda + 1 : 1; //contiene el mayor numero que hay en la coleccion
    }
    next(); //esta funcion nos permite continuar con las ejecuciones, sin esta, se detendria 
});


export default model('celda', celdaSchema, 'celda');

