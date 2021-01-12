import { FC, useEffect, useContext } from 'react';
import Router from 'next/router';
import { AuthContext } from '@/context/auth';

const redirect = () => {
  Router.push('/loggedIn');
};

const Auth: FC = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    console.log('----currentUser----');
    console.log(currentUser);
    if (currentUser) {
      console.log('redirect');
      redirect();
    }
  }, [currentUser]);

  return (
    <>
      <h1>Loading...</h1>
    </>
  );
};

export default Auth;
