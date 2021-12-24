import React from 'react';
import { useRouter } from 'next/router';

const Legal = () => {
  const router = useRouter()

  const handleClickYes = () => {
    sessionStorage.setItem('Beerman', 'YES')
    router.push('/')
  }

  return (
    <div className="legal">
      <div>
        <img src="/images/logo.png" alt="" />
        <h1>Are you of legal drinking age in your country?</h1>
        <div className="legal__options">
          <span onClick={handleClickYes}>YES</span>
          <span onClick={() => router.push('https://www.pokemon.com/es/')}>NO</span>
        </div>
      </div>
    </div>
  );
};

export default Legal;