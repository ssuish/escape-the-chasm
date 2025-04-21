import './App.css'
import { useOpenConnectModal } from '@0xsequence/connect'

function App() {
  const {setOpenConnectModal} = useOpenConnectModal()
  
  return (
    <>
      <button onClick={() => setOpenConnectModal(true)}>Connect</button>
    </>
  )
}

export default App