import Header from "./componentes/Header"
import Form from "./componentes/Form"

function App() {

  return (

    <div className="bg-black h-screen text-white pt-10">
      <div className="container mx-auto mt-6">
      <Header />
      <div className="justify-center md:flex mt-10">
        <Form />
      </div>
    </div>
    </div>
  )
}

export default App
