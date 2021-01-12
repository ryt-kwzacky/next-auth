import { FC } from 'react';
import Router from 'next/router';

const LoggedIn: FC = () => {
  const push = () => {
    Router.push('/');
  };

  return (
    <>
      <h1>Logged In</h1>
      <button type="button" onClick={push}>
        push
      </button>
    </>
  );
};

export default LoggedIn;
