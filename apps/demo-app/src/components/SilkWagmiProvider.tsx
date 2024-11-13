import { createConfig, http, WagmiProvider } from 'wagmi';
import { sepolia, localhost } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient();

const SilkWagmiProvider = ({ children }: PropsWithChildren) => {
  const wagmiConfig = createConfig({
    chains: [sepolia, localhost],
    connectors: [],
    transports: {
      [sepolia.id]: http('sepolia-provider-url'),
      [localhost.id]: http('http://127.0.0.1:8545'),
    },
  });

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col items-center justify-center h-screen w-screen">
          {children}
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default SilkWagmiProvider;
