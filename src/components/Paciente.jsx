const Paciente = ({paciente}) => {

    const {nombre, propietario, email, fecha, hora, sintomas} = paciente

    return (
        <div className='mx-5 bg-white shadow-md px-5 py-10 rounded-xl mb-5'>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre Mascota: {" "}
                <span className='font-normal normal-case'>{nombre}</span></p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre Propietario: {" "}
                <span className='font-normal normal-case'>{propietario}</span></p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Correo Electronico: {" "}
                <span className='font-normal normal-case'>{email}</span></p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de Ingreso: {" "}
                <span className='font-normal normal-case'>{fecha}</span></p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Hora de Ingreso: {" "}
                <span className='font-normal normal-case'>{hora}</span></p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {" "}
                <span className='font-normal normal-case'>{sintomas}</span></p>
        </div>
    )
}

export default Paciente