import { useState } from "react"
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

const Agregardentista = () => {
  const [id_dentista,setId_dentista] = useState()
  const [nombre,setNombre] = useState("")
  const [apellido,setApellido] = useState("")
  const [dni,setDni] = useState()
  const [matricula,setMatricula] = useState ()
  const [sexo, setSexo] = useState ("")
  const [turno, setTurno] = useState ("")
//const [iduser, setIduser] = useState ()
  const [dentistas,setDentistas] = useState([])

  const handleAgregar =()=>{
    setDentistas([...dentistas,{nombre,apellido,dni,matricula,sexo,turno}])
  }
 

  return (

    <div className="container p-5">
        <>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control placeholder="Apellido" onChange={(e) => setApellido(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>DNI</Form.Label>
          <Form.Control placeholder="DNI" onChange={(e) => setDni(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>N° Matricula</Form.Label>
          <Form.Control placeholder="Ingrese su n° de Matricula" onChange={(e) => setMatricula(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sexo</Form.Label>
          <Form.Select onChange={(e) => setSexo(e.target.value)}>
            <option value="Mujer"> Mujer </option>
            <option value="Hombre"> Hombre </option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Turno</Form.Label>
          <Form.Select onChange={(e) => setTurno(e.target.value)}>
            <option value="Mañana"> Mañana </option>
            <option value="Tarde"> Tarde </option>
            <option value="Noche"> Noche </option>
          </Form.Select>
          
        </Form.Group>
        <Form.Group className="mb-3">
        <Button variant="success" onClick={handleAgregar}>Agregar</Button>
        </Form.Group>
        
        
        </>    
    </div>
  )
}

export default Agregardentista