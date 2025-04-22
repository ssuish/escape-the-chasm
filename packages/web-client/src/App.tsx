import "./App.css";
import { useOpenConnectModal } from "@0xsequence/connect";

function App() {
  const { setOpenConnectModal, openConnectModalState } = useOpenConnectModal();

  const handleConnect = () => {
    setOpenConnectModal(true); 
  };

  return (
    <>
      <button onClick={handleConnect}>Connect Wallet</button>

      {openConnectModalState && <div>Connect modal is open!</div>}
    </>
  );
}

export default App;
