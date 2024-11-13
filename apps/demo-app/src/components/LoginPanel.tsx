import { useAccount, useConnect } from 'wagmi';
import silk from '../utils/SilkConnector';

const LoginPanel = () => {
  const account = useAccount();
  const { connect, connectors } = useConnect();

  const silkConnector = connectors.find((connector) => connector.id === 'silk');

  return (
    <div className="flex flex-col gap-2">
      <p>
        {account.address
          ? `You are logged in with address: ${account.address}`
          : 'Please Log In'}
      </p>
      <button
        className="mx-auto mt-1"
        onClick={() =>
          connect({ connector: silkConnector ? silkConnector : silk() })
        }
        disabled={!!account.address}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPanel;
