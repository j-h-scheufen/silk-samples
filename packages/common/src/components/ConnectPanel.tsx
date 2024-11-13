'use client';

import useSilk from '../hooks/useSilk';

export default function ConnectPanel() {
  const { silk, account, refreshAccount } = useSilk();

  return (
    <div className="flex flex-col gap-2">
      <div>Silk is {silk ? 'available' : 'not available'}</div>
      <div>User is {account ? `logged in as ${account}` : 'not logged in'}</div>
      <button
        className="mx-auto mt-1"
        onClick={() => silk?.login().then(() => refreshAccount())}
        disabled={!!account}
      >
        Login
      </button>
    </div>
  );
}
