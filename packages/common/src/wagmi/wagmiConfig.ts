import { Transport } from 'viem';
import { Config, createConfig, http } from 'wagmi';
import { Chain, localhost, sepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

export const getTransport = (chain: Chain): Transport => {
  switch (chain.id) {
    case sepolia.id:
      return http(process.env.NEXT_PUBLIC_SEPOLIA_PROVIDER_URL);
    case localhost.id:
      return http('http://127.0.0.1:8545');
    default:
      return http();
  }
};

export const createSilkConfig = (): Config => {
  const isSilkAvailable =
    typeof window !== 'undefined' &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof (window as any).silk !== 'undefined';
  return createConfig({
    chains: [sepolia, localhost],
    connectors: isSilkAvailable
      ? [
          injected({
            target() {
              return {
                id: 'silkProvider',
                name: 'Silk Secure Provider',
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                provider: (window as any).silk,
              };
            },
          }),
        ]
      : [],
    transports: {
      [sepolia.id]: http(process.env.NEXT_PUBLIC_SEPOLIA_PROVIDER_URL),
      [localhost.id]: http('http://127.0.0.1:8545'),
    },
  });
};

/**
 * Default wagmi configuration
 */
const wagmiConfig: Config = createConfig({
  chains: [sepolia, localhost],
  connectors: [],
  transports: {
    [sepolia.id]: http(process.env.NEXT_PUBLIC_SEPOLIA_PROVIDER_URL),
    [localhost.id]: http('http://127.0.0.1:8545'),
  },
  ssr: true,
});

export default wagmiConfig;
