import { useState } from 'react';
import { ethers } from 'ethers';
import abi from '../CrowdFunding.json';

const LoginPage = () => {

  const [r, setR] = useState([]);
  const [name, setName] = useState("");
  const [mess, setMess] = useState("");
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install MetaMask!");
      return;
    }
  console.log("qwhjbdxjsbxb")
    try {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
      alert("Wallet connected: " + accounts[0]);
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  const a = async () => {
    if (!account) {
      alert("Please connect your wallet first.");
      return;
    }

    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
    const signer = new ethers.JsonRpcSigner(provider, account);

    const ABI = abi.abi;
    const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

    const contract = new ethers.Contract(address, ABI, provider);
    const contract2 = new ethers.Contract(address, ABI, signer);

    try {
      let last = await contract2.takepaise(name, mess, {
        value: ethers.utils.parseEther("0.001") // Convert to ether
      });

      await last.wait(); // Wait for the transaction to be mined

      let result = await contract.showpaisa();
      if (result) {
        alert("Check your wallet, all done");
      }
      setR(result);
    } catch (error) {
      console.error("Transaction error:", error);
    }
  };

  return (
    <div className='bg-blue-500 p-5'>
      <h1 className="text-white text-lg">Login Page</h1>
      <button 
        className="bg-white text-blue-500 p-2 rounded mt-4"
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
      <input 
        type="text" 
        placeholder="Enter name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className="mt-4 p-2"
      />
      <input 
        type="text" 
        placeholder="Enter message" 
        value={mess} 
        onChange={(e) => setMess(e.target.value)} 
        className="mt-4 p-2"
      />
      <button 
        className="bg-white text-blue-500 p-2 rounded mt-4"
        onClick={a}
      >
        Submit
      </button>
      {r && <div className="text-white mt-4">Result: {JSON.stringify(r)}</div>}
    </div>
  );
}

export default LoginPage;
