/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';
import { initSilk, EthereumProvider } from '@silk-wallet/silk-wallet-sdk';
import { SILK_METHOD } from '@silk-wallet/silk-interface-core';

const useSilk = () => {
  const [silk, setSilk] = useState<EthereumProvider | undefined>();
  const [account, setAccount] = useState<string | undefined>();

  const refreshAccount = useCallback(async () => {
    if (!silk) return false;
    const accounts = (await silk.request({
      method: SILK_METHOD.eth_accounts,
    })) as string[];
    if (accounts) setAccount(accounts[0]);
  }, [silk, setAccount]);

  useEffect(() => {
    if (!silk) {
      if (
        typeof window !== 'undefined' &&
        typeof (window as any).ethereum?.isSilk
      ) {
        setSilk((window as any).ethereum);
      }
      const newSilk = initSilk() as EthereumProvider;
      (window as any).ethereum = newSilk;
      setSilk(newSilk);
    }
    refreshAccount();
  }, [refreshAccount, silk]);

  return { silk, account, refreshAccount };
};

export default useSilk;
