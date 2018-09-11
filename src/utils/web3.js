import Web3 from 'web3';

let web3;

export const initWeb3 = () =>
  new Promise(resolve => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener('load', () => {
        const provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
        web3 = new Web3(provider);
        resolve(web3);
    });
  });

export const getWeb3 = () => web3;
