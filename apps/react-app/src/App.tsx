import { isBlank } from 'common';
import ReactIcon from './assets/react.svg?react';

const App = () => {
  return (
    <>
      <div className="font-semibold text-lg text-green-500">
        <ReactIcon width="24px" height="24px" className="text-green-500" />
        Rendered from react app
      </div>

      <p>undefined isBlank - {isBlank(undefined) ? 'true' : 'false'}</p>
      <p>false isBlank - {isBlank(false) ? 'true' : 'false'}</p>
      <p>true isBlank - {isBlank(true) ? 'true' : 'false'}</p>
      <p>Empty object isBlank - {isBlank({}) ? 'true' : 'false'}</p>
    </>
  );
};

export default App;
