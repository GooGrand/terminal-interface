import { TerminalError } from 'utils/API/errors/TerminalError/TerminalError';
import {
  network,
} from 'config/config';
import { BigNumber as OldBigNumber, ethers } from 'ethers';
import BigNumber from 'bignumber.js';
import ERC20_ABI from './abi/erc20.json';
import { migrateBigNumber } from '../balance/balance';

const balance = async (tokenAddress: string): Promise<BigNumber> => {
  if (!window.ethereum || !window.ethereum!.isMetaMask) {
    throw new TerminalError({ code: 'NO_METAMASK' });
  }
  if (!window.ethereum.request) {
    throw new TerminalError({ code: 'METAMASK_WRONG_NETWORK' });
  }
  const chainId: string = await window.ethereum.request({ method: 'net_version' });
  if (chainId !== network) {
    throw new TerminalError({ code: 'METAMASK_WRONG_NETWORK' });
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(tokenAddress, ERC20_ABI, signer);
  const userBalance: OldBigNumber = await contract.balanceOf(signer.getAddress());
  return migrateBigNumber(userBalance);
};

export default balance;
