import { useCallback, useEffect, useState } from 'react';
import { initSilk, EthereumProvider } from '@silk-wallet/silk-wallet-sdk';
import { SILK_METHOD } from '@silk-wallet/silk-interface-core';

export const useSilk = () => {
  const [silk, setSilk] = useState<EthereumProvider | undefined>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  if (!silk) {
    const newSilk = initSilk() as EthereumProvider;
    setSilk(newSilk);
    if (
      typeof window !== 'undefined' &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typeof (window as any).ethereum?.isSilk
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).ethereum = newSilk;
    }
  }

  const checkLoggedIn = useCallback(async () => {
    if (!silk) return false;
    const accounts = await silk.request({
      method: SILK_METHOD.eth_accounts,
    });
    setIsLoggedIn(!!accounts);
  }, [silk, setIsLoggedIn]);

  useEffect(() => {
    checkLoggedIn();
  }, [checkLoggedIn, silk]);

  return { silk, isLoggedIn, checkLoggedIn };
};
