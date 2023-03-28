const Paciente = () => {
    return (
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre Mascota: {" "}
                <span className='font-normal normal-case'>Hook</span></p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre Propietario: {" "}
                <span className='font-normal normal-case'>Juan</span></p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Correo Electronico: {" "}
                <span className='font-normal normal-case'>juan@juan.com</span></p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de Ingreso: {" "}
                <span className='font-normal normal-case'>Hook</span></p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Hora de Ingreso: {" "}
                <span className='font-normal normal-case'>10:00 PM</span></p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {" "}
                <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque at tenetur, magnam praesentium ipsam quia, neque quis deserunt ab ipsum quidem sequi? Perferendis quisquam enim aspernatur ducimus quis repudiandae.</span></p>
        </div>
    )
}

export default Paciente