const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">

      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>Añade Pacientes y {" "}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

        <div className='mb-5'>
          <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>
            Nombre Mascota
          </label>
          <input
            id="mascota"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type="text"
            placeholder='Nombre de la Mascota' />
        </div>

        <div className='mb-5'>
          <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>
            Nombre Propietario
          </label>
          <input
            id="propietario"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type="text"
            placeholder='Nombre del Propietario' />
        </div>

        <div className='mb-5'>
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>
            Email
          </label>
          <input
            id="email"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type="email"
            placeholder='Correo Electronico' />
        </div>

        <div className='mb-5'>
          <label htmlFor="fecha" className='block text-gray-700 uppercase font-bold'>
            fecha de ingreso
          </label>
          <input
            id="fecha"
            className='border-2 w-full placeholder-gray-400 p-2 mt-2 rounded-md'
            type="date" />
        </div>

        <div className='mb-5'>
          <label htmlFor="hora" className='block text-gray-700 uppercase font-bold'>
            hora de ingreso
          </label>
          <input
            id="hora"
            className='border-2 w-full placeholder-gray-400 p-2 mt-2 rounded-md'
            type="time" />
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
          />
        </div>

        <input 
        type="submit" 
        value="Agregar Paciente"
        className='bg-indigo-600 hover:bg-indigo-700 w-full p-3 cursor-pointer text-white uppercase font-bold rounded-md transition-all' />
      </form>
    </div>
  )
}

export default Formulario