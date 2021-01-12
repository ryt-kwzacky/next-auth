import { FC, createContext, useEffect, useState } from 'react';
import { auth, User } from '@/plugins/firebase';

type CurrentUserType = User | null | undefined;

type AuthContextProps = {
  currentUser: CurrentUserType;
};

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUserType>(undefined);

  useEffect(() => {
    // ログイン状態が変化するとfirebaseのauthメソッドを呼び出す
    auth.onAuthStateChanged((authUser: User | null) => {
      console.log('----authUser----');
      console.log(authUser);
      // ログイン状態が変わるとここに自動的に値が入るようになっている。
      setCurrentUser(authUser);
    });
  }, []);

  /* 下階層のコンポーネントをラップする */
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
