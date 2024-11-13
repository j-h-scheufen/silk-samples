import { useCallback, useEffect, useState } from 'react';
import { initSilk, EthereumProvider } from '@silk-wallet/silk-wallet-sdk';
import { SILK_METHOD } from '@silk-wallet/silk-interface-core';

const useSilk = () => {
  const [silk, setSilk] = useState<EthereumProvider | undefined>();
  const [account, setAccount] = useState<string | undefined>();

  const refreshAccount = useCallback(async () => {
    if (!silk) return;
    const accounts = (await silk.request({
      method: SILK_METHOD.eth_accounts,
    })) as string[];
    if (accounts) setAccount(accounts[0]);
  }, [silk, setAccount]);

  useEffect(() => {
    if (!silk) setSilk(initSilk() as EthereumProvider);
  }, [silk, refreshAccount]);

  return { silk, account, refreshAccount };
};

export default useSilk;
