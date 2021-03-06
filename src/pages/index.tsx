import { FC } from 'react';
import Router from 'next/router';
import Login from '@/components/login';

const Home: FC = () => {
  const push = () => {
    Router.push('/loggedIn');
  };

  return (
    <>
      <h1>Firebase Auth Test</h1>
      <Login />
      <button type="button" onClick={push}>
        push
      </button>
    </>
  );
};

export default Home;
