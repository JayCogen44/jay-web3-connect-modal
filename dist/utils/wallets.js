import metaMaskImg from '../assets/meta-mask.png';
import coinBaseImg from '../assets/coinbase-wallet.png';
import trustImg from '../assets/trust.png';
export const WALLET_NAMES = {
  META_MASK: 'MetaMask',
  COIN_BASE: 'Coinbase Wallet',
  TRUST: 'Trust'
};
export const wallets = [{
  id: 1,
  name: WALLET_NAMES.META_MASK,
  img: metaMaskImg
}, {
  id: 2,
  name: WALLET_NAMES.COIN_BASE,
  img: coinBaseImg
}, {
  id: 3,
  name: WALLET_NAMES.TRUST,
  img: trustImg
}];