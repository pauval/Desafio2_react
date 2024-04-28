import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = () => {
  const [alerta, setAlerta] = useState({});

  const mostrarAlerta = (mensaje, tipo) => {
    setAlerta({ mensaje, tipo });
  };

  return (
    <div className="container">
      <h1 className="text-center">Crea una cuenta</h1>
      <div className="social-buttons-container">
        <SocialButton icon="fab fa-facebook" />
        <SocialButton icon="fab fa-instagram" />
        <SocialButton icon="fab fa-linkedin" />
      </div>
      <p className="text-center mb-4">o usa tu email para registrarte</p>
      <Formulario mostrarAlerta={mostrarAlerta} />
      {alerta.mensaje && <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />}
    </div>
  );
}

export default Registro;

