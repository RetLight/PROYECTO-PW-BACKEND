import reservaRepository from './repository/reserva.js'
import usuarioRepository from './repository/usuario.js'
import libroRepository from './repository/libro.js'

const findAllComplete = () => {
    const reservas = reservaRepository.findAll();
    const usuarios = usuarioRepository.findAll();
    const allLibros = libroRepository.findAll();

    const newReservas = reservas.map(item => {
        return {...item, usuario: usuarios.filter(x => x.id === item.usuario?.id)[0],
        libros: item.libros?.map(cur => {
            return allLibros.filter(x => x.id === cur.id)[0];
        })
    }
    })

    return newReservas;
}

const service = { findAllComplete }

export default service