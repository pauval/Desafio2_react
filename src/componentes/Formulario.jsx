import React, { useState } from 'react';

const Formulario = () => {
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

    // Validar que el email tenga formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // Mostrar mensaje de error si el formato del email es incorrecto
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    // Validar que todos los campos estén completos
    if (!nombre || !email || !contraseña || !confirmarContraseña) {
      // Mostrar mensaje de error si algún campo está vacío
      alert('Por favor completa todos los campos.');
      return;
    }

    // Validar que las contraseñas coincidan
    if (contraseña !== confirmarContraseña) {
      // Mostrar mensaje de error si las contraseñas no coinciden
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Si pasa todas las validaciones, puedes enviar los datos a través de una función prop que recibe Formulario.jsx
    // Por ejemplo, puedes llamar a una función llamada 'handleRegistro' que esté definida en Registro.jsx
    // handleRegistro({ nombre, email, contraseña });
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
      <button type="submit" className="btn btn-success">Registrarse</button>
    </form>
  );
}

export default Formulario;
