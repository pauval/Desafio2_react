import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Formulario = ({ mostrarAlerta }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContraseñaChange = (event) => {
    setContraseña(event.target.value);
  };

  const handleConfirmarContraseñaChange = (event) => {
    setConfirmarContraseña(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      mostrarAlerta('Por favor ingresa un correo electrónico válido.', 'alert-danger');
      return;
    }

    if (!nombre || !email || !contraseña || !confirmarContraseña) {
      mostrarAlerta('Por favor completa todos los campos.', 'alert-danger');
      return;
    }

    if (contraseña !== confirmarContraseña) {
      mostrarAlerta('Las contraseñas no coinciden.', 'alert-danger');
      return;
    }

    mostrarAlerta('Registro exitoso', 'alert-success');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" className="form-control" placeholder='Nombre' value={nombre} onChange={handleNombreChange} />
      </div>
      <div className="form-group">
        <input type="email" className="form-control" placeholder='Email' value={email} onChange={handleEmailChange} />
      </div>
      <div className="form-group">
        <input type="password" className="form-control" placeholder='Contraseña' value={contraseña} onChange={handleContraseñaChange} />
      </div>
      <div className="form-group">
        <input type="password" className="form-control" placeholder='Confirmar Contraseña' value={confirmarContraseña} onChange={handleConfirmarContraseñaChange} />
      </div>
      <Button type="submit" className="btn" variant="success" style={{ backgroundColor: 'green', width: '100%' }}>Registrarse</Button>
    </form>
  );
}

export default Formulario;
