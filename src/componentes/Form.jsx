import { useState, useEffect } from "react";

const Form = () => {

    const getDataRegistros = () => {
        const datos = localStorage.getItem("user");
        if (datos) {
            return JSON.parse(datos);
        } else {
            return [];
        }
    }

    const [user, setUser] = useState(getDataRegistros());

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const usuarioExistente = user.find(u => u.username === username);
        if (usuarioExistente) {
            alert('El nombre de usuario ya está en uso. Por favor, elija otro.');
            return;
        }

        const objetoUser = {
            name,
            username,
            email
            //password
        }
        setUser([...user, objetoUser]);

        setName('');
        setUsername('');
        setEmail('');
        setPassword('');

        document.getElementById('form').reset();

        alert('Usuario registrado exitosamente.');
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);


    return (
        <div className="md: w-1/2 lg:w-2/5 mt-5 p-3 rounded-md">

            <form id="form" onSubmit={handleSubmit}>
                <div className="flex flex-col bg-black p-5 border border-purple-800 rounded-lg shadow space-y-6">
                    <h2 className="font-bold leading-tight tracking-tight text-white text-xl text-center">
                        Crear Nuevo Usuario
                    </h2>

                    <div className="flex flex-col justify-center space-y-1 border border-purple-800">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            className="appearance-none bg-transparent bg-black border-none 
                        w-full text-gray-300 mr-3 py-2.5 px-2 leading-tight focus:outline-none"
                            placeholder="Nombre Completo"
                        />
                    </div>

                    <div className="flex flex-col space-y-1 border border-purple-600">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            onChange={(e) => setUsername(e.target.value)}
                            className="appearance-none bg-transparent border-none 
                        w-full text-gray-300 mr-3 py-2.5 px-2 leading-tight focus:outline-none"
                            placeholder="Nombre Usuario"
                        />
                    </div>

                    <div className="flex flex-col space-y-1 border border-purple-600">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="appearance-none bg-transparent border-none 
                        w-full text-gray-300 mr-3 py-2.5 px-2 leading-tight focus:outline-none"
                            placeholder="Correo Electrónico"
                        />
                    </div>

                    <div className="flex flex-col space-y-1 border border-purple-600">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="appearance-none bg-transparent border-none 
                        w-full text-gray-300 mr-3 py-2.5 px-2 leading-tight focus:outline-none"
                            placeholder="Contraseña"
                        />
                    </div>

                    <div className="flex flex-row justify-between content-center
                items-center">
                        <button
                            type="submit"
                            className="bg-purple-700 text-white font-bold rounded 
                    focus:outline-none shadow hover:bg-purple-700 transition-colors px-5 py-2 text-center w-full">
                            Regístrate
                        </button>
                    </div>

                </div>


            </form>


        </div>
    )
}

export default Form;