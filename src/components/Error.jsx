const Error = ({ children }) => {
    return (
        <div className="bg-rose-600 text-white text-center
                         p-3 uppercase font-bold mb-3 rounded-md">
            <p>{children}</p>
        </div>
    )
}

export default Error