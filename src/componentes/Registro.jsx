import React from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Crea una cuenta</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center mb-4">
            <SocialButton icon="fa fa-facebook mr-2" />
            <SocialButton icon="fa fa-instagram mr-2" />
            <SocialButton icon="fa fa-linkedin mr-2" />
          </div>
          <p className="text-center mb-4">o usa tu email para registrarte</p>
          <Formulario />
        </div>
      </div>
      <Alert />
    </div>
  );
}

export default Registro;
