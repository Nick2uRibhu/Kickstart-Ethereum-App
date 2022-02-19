import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xd260D62df20B968420855e416B69D2e89f7b69Dd'
);

export default instance;
