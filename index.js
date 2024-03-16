import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

async function transferEther(toAddress, amount) {
  const accounts = await web3.eth.getAccounts();
  const tx = await web3.eth.sendTransaction({
    from: accounts[0],
    to: toAddress,
    value: web3.utils.toWei(amount, 'ether'),
  });
  return tx.transactionHash;
}
