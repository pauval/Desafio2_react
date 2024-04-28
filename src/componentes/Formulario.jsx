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
        <label>Nombre:</label>
        <input type="text" className="form-control" value={nombre} onChange={handleNombreChange} />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" className="form-control" value={email} onChange={handleEmailChange} />
      </div>
      <div className="form-group">
        <label>Contraseña:</label>
        <input type="password" className="form-control" value={contraseña} onChange={handleContraseñaChange} />
      </div>
      <div className="form-group">
        <label>Confirmar Contraseña:</label>
        <input type="password" className="form-control" value={confirmarContraseña} onChange={handleConfirmarContraseñaChange} />
      </div>
      <button type="submit" className="btn btn-primary">Registrarse</button>
    </form>
  );
}

export default Formulario;
