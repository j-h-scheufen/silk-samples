import { createConfig, http, WagmiProvider } from 'wagmi';
import { sepolia, localhost } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ConnectPanel from './components/ConnectPanel';

const queryClient = new QueryClient();

const App = () => {
  const wagmiConfig = createConfig({
    chains: [sepolia, localhost],
    connectors: [injected()],
    transports: {
      [sepolia.id]: http('sepolia-provider-url'),
      [localhost.id]: http('http://127.0.0.1:8545'),
    },
  });

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col items-center justify-center h-screen w-screen">
          <ConnectPanel />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;