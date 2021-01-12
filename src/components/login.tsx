import { FC, useEffect, useContext } from 'react';
import Router from 'next/router';
import { loginGoogle } from '@/auth/login';
import { AuthContext } from '@/context/auth';

const Login: FC = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    console.log('----currentUser----');
    console.log(currentUser);
    if (currentUser) {
      console.log('yes');
      Router.push('/loggedIn');
    }
  }, [currentUser]);

  return (
    <div>
      <button type="button" onClick={loginGoogle}>
        login with google
      </button>
    </div>
  );
};

export default Login;
