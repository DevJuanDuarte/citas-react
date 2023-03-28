//Se importa el hook
import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes }) => {
  //Los Hooks Deben ir siempre antes del return, no pueden estar dentro de una condicional
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    //VALIDACIÓN DEL FORMULARIO
    //Tenemos acceso a todos los valores ya que la funcion se encuentra dentro del formulario
    if ([nombre, propietario, email, fecha, hora, sintomas].includes('')) {
      //Luego agregamos una condicion para verificar que todos los campos no se encuentren vacíos.
      setError(true)

      // console.log('Todos llenos');
      //Para retornar el valor a false una vez que el formulario haga submit con los campos completos podemos quitar el else, colocar return y luego seguir con el programa y pasar de nuevo setError a false, asi:
      return

    }
    //Por fuera de la condición
    setError(false)

    //Objeto paciente:
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      hora,
      sintomas
    }
    //Se agregan los valores a un nuevo objeto
    setPacientes([...pacientes, objetoPaciente])

    //Se reinician los valores:
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setHora('')
    setSintomas('')

  }




  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">

      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>Añade Pacientes y {" "}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

        {/* Podemos modificar este ternario para que no nos muestre el todo ok con un &&, luego modificamos con un div de acuerdo a las necesidades de la notificación */}
        {/* {error ? 'Hay un error' : 'Todo ok'} */}
        {error && <Error>"Todos los campos son obligatorios."</Error> }

        <div className='mb-5'>
          <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>
            Nombre Mascota
          </label>
          <input
            id="mascota"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type="text"
            placeholder='Nombre de la Mascota'
            //Leyendo información escrita y colocandola en un state
            //Se agrega el valor del hook
            value={nombre}
            //Se agrega onChange y luego un callback con el metodo y un evento
            onChange={(e) => setNombre(e.target.value)}
          />

        </div>

        <div className='mb-5'>
          <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>
            Nombre Propietario
          </label>
          <input
            id="propietario"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type="text"
            placeholder='Nombre del Propietario'
            value={propietario}
            //Se agrega onChange y luego un callback con el metodo y un evento
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>
            Email
          </label>
          <input
            id="email"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type="email"
            placeholder='Correo Electronico'
            value={email}
            //Se agrega onChange y luego un callback con el metodo y un evento
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="fecha" className='block text-gray-700 uppercase font-bold'>
            fecha de ingreso
          </label>
          <input
            id="fecha"
            className='border-2 w-full placeholder-gray-400 p-2 mt-2 rounded-md'
            type="date"
            value={fecha}
            //Se agrega onChange y luego un callback con el metodo y un evento
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="hora" className='block text-gray-700 uppercase font-bold'>
            hora de ingreso
          </label>
          <input
            id="hora"
            className='border-2 w-full placeholder-gray-400 p-2 mt-2 rounded-md'
            type="time"
            value={hora}
            //Se agrega onChange y luego un callback con el metodo y un evento
            onChange={(e) => setHora(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder='Describe detalladamente los sintomas del animal.'
            cols="20"
            rows="5"
            className='border-2 w-full placeholder-gray-400 p-2 mt-2 rounded-md'
            value={sintomas}
            //Se agrega onChange y luego un callback con el metodo y un evento
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Agregar Paciente"
          className='bg-indigo-600 hover:bg-indigo-700 w-full p-3 cursor-pointer text-white uppercase font-bold rounded-md transition-all'
        />
      </form>
    </div>
  )
}

export default Formulario