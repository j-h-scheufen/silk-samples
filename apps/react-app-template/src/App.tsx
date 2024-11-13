import ReactIcon from './assets/react.svg?react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-s">
      <div className="font-semibold text-lg text-green-500">
        <ReactIcon width="24px" height="24px" className="text-green-500" />
        Rendered from react app
      </div>
    </div>
  );
};

export default App;
