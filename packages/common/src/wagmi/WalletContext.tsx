'use client';

import { createContext, useContext } from 'react';
import { Address, WalletClient } from 'viem';

type WalletContextType = {
  connected: boolean | undefined;
  setConnected: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  walletClient: WalletClient | undefined;
  setWalletClient: React.Dispatch<
    React.SetStateAction<WalletClient | undefined>
  >;
  userAddress: string;
  setUserAddress: React.Dispatch<React.SetStateAction<string>>;
  currentNetwork: string;
  setCurrentNetwork: React.Dispatch<React.SetStateAction<string>>;
  initializeWalletClient: (account: Address) => void;
  verifyConnection: () => Promise<void>;
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletContext.Provider');
  }
  return context;
};

export default WalletContext;
