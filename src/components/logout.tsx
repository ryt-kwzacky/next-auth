import { FC, useEffect, useContext } from 'react';
import Router from 'next/router';
import { logout } from '@/auth/logout';
import { AuthContext } from '@/context/auth';

const Login: FC = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    console.log('----currentUser----');
    console.log(currentUser);
    if (currentUser) {
      console.log('yes');
      Router.push('/loggedIn');
    } else {
      console.log('no');
    }
  }, [currentUser]);

  return (
    <div>
      <button type="button" onClick={logout}>
        logout
      </button>
    </div>
  );
};

export default Login;
