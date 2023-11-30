import RepositoryBase from './base.js'
import reserva from '../model/reserva.js'
import libro from '../model/libro.js'
import usuario from '../model/usuario.js'

const reservaRepository = new RepositoryBase(reserva)

const create = async (objReserva) => {
    try {
        const newReserva = await reservaRepository.create(objReserva);

        objReserva.id = newReserva.id;

        return objReserva;
    } catch(err) {
        console.error(err);
        return null;
    }
    
}

const findOne = async (id) => await reservaRepository.findOne(id);
const remove = async (id) => await reservaRepository.remove(id);
const update = async (objReserva) => await reservaRepository.update(objReserva);

const findAll = async() => {
    try {
        return await reserva.findAll(
            {include: [{
                    model: libro
                },
                {
                    model: usuario
                }] });

    } catch(err) {
        console.error(reserva)
        return null
    }
}
 
export default { create, findOne, remove, update, findAll }
