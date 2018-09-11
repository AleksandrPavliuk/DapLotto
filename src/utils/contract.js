import { getWeb3 } from './web3';
import config from '../truffle/build/contracts/DapLotto.json';

export const getContractInstance = () => {
  const web3 = getWeb3();
  const Contract = web3.eth.contract(config.abi);
  return Contract.at(config.address);
};
