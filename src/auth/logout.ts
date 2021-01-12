import { auth } from '@/plugins/firebase';

export const logout = async () => {
  await auth.signOut();
};
