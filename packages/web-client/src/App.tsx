import "./App.css";
import { useOpenConnectModal } from "@0xsequence/connect";
import Onboarding from "./Onboarding";

function App() {
  const { setOpenConnectModal, openConnectModalState } = useOpenConnectModal();

  const handleConnect = () => {
    setOpenConnectModal(true); 
  };

  return (
    <>
      <div>
        <Onboarding />
      </div>
      <button onClick={handleConnect}>Connect Wallet</button>

      {openConnectModalState && <div>Connect modal is open!</div>}
    </>
  );
}

export default App;
