import { useState } from 'react';

import { useWallet } from './WalletContext';

/**
 * Hook for handling Silk login
 */
const useAuth = () => {
  const [loginError, setLoginError] = useState<string | null>(null);
  // const [silkEmail, setSilkEmail] = useState<string | null>(null);
  const { setConnected, setWalletClient, setUserAddress, verifyConnection } =
    useWallet();

  const login = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (window as any).silk.login();
      // const email = (await (window as any).silk.requestEmail()) as string | undefined;
      // if (!email) {
      //   setLoginError('Please allow access to your email address in Silk to continue.');
      //   return;
      // }
      // setSilkEmail(email);
      return verifyConnection();
    } catch (error) {
      console.error(error);
      setLoginError('Error during login: ' + error);
    }
  };

  const logout = async () => {
    setConnected(false);
    setWalletClient(undefined);
    setUserAddress('');
  };

  return { login, logout, loginError };
};

export default useAuth;
