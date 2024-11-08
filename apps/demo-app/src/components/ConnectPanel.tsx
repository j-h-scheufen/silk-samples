'use client';

import { useSilk } from '../hooks/useSilk';

export default function ConnectPanel() {
  const { silk, isLoggedIn, checkLoggedIn } = useSilk();

  return (
    <div>
      <div>
        Silk is {silk ? 'available' : 'not available'}
        <br />
        Window.ethereum is {window.ethereum?.isSilk ? 'Silk' : 'No Silk'}
        <br />
        User is {isLoggedIn ? 'logged in' : 'not logged in'}
      </div>
      {silk?.connected ? (
        <div>Connected to Silk</div>
      ) : (
        <button onClick={() => silk?.login().then(() => checkLoggedIn())}>
          Login 3
        </button>
      )}
    </div>
  );
}
