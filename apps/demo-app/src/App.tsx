import LoginPanel from './components/LoginPanel';
import SilkWagmiProvider from './components/SilkWagmiProvider';

const App = () => {
  return (
    <SilkWagmiProvider>
      <div className="flex flex-col items-center justify-center h-screen w-screen">
        <h2 className=" text-2xl">DEMO APP</h2>
        <LoginPanel />
      </div>
    </SilkWagmiProvider>
  );
};

export default App;
