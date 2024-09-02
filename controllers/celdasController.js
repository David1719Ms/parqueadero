// En el archivo que importa
import celda from '../models/celdas.js'

// GET /celdas # Recuperar una lista de todas las celdas
export async function getCelda(req,res) {
    const celdas = await celda.find()
    res.json(celdas)
}

// POST /celdas # Crear una nueva celda
export async function postCelda(req,res) {
    let msg = 'celda inserted'
    const body =req.body
    try{
        const Celda = new celda(body)
        await Celda.save()
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

// PUT /celdas/{id} # Actualizar una celda específica

export async function putCelda(req, res)  {
    let msg = 'celda updated'
    const {numeroCelda, estado, placa, fechaIngreso, fechaSalida, pin}=req.body
    try{
        await celda.findOneAndUpdate({numeroCelda:numeroCelda, estado:estado, placa:placa, fechaIngreso:fechaIngreso, fechaSalida:fechaSalida, pin:pin})
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

// //GET /celdas/{id} # Recuperar una celda específica
// router.get('/:id', async (req, res) => {
//     try {
//         const Celd = await celda.findById(req.params.id);
        
//         if (!Celd) {
//             return res.status(404).json({ message: 'Celda no encontrada' });
//         }
//         res.json(celda);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// // GET /celdas/{estado} # Recuperar una lista de todas las celdas con estado disponible.

// router.get('/estado/:estado', async (req, res) => {
//     try {
//         const celdas = await Celda.find({ estado: req.params.estado });
//         res.json(celdas);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// DELETE /celdas/{id} # Eliminar un celda específico

export async function deleteCelda (req,res) {
    let msg = 'celda deleted'
    id = req.params.id
    try{
        await celda.findOneAndDelete({_id:id})
    }catch(error){
        msg = 'there was an error deleting'
    }
    res.json({msg:msg})
}
