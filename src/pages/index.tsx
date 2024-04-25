import React from 'react';
import Image from 'next/image';

const LoginPage: React.FC = () => {
  return (
    <div className="login-container">
      <div className="background-image">
        <Image src="/images/background-login-tela1.jpg" layout="fill" objectFit="cover" quality={100} alt={''} />
      </div>
      <div className="login-content">
        <h1 className="logo">
          <span className="ink">INK</span>
          <span className="verse">Verse</span>
        </h1>
        </div>
        <div>
        <h2 className="cliente">CLIENTE</h2>
        </div>
        <div className="input-group">
          <input type="text" placeholder="E-mail" className="input-field" />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Senha" className="input-field" />
        </div>
        <div className="button-group">
          <button className="login-button">ENTRAR</button>
          <button className="login-apple">Iniciar sessão com a Apple</button>
          <button className="login-google">Iniciar sessão com o Google</button>
          <button className="login-esqueceu-senha">ESQUECEU A SENHA?</button>
        </div>
        <div>
          <button className="login-criar-conta">CRIE SUA CONTA</button>
        </div>
      </div>
  );
};

export default LoginPage;


