require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const RINKEBY_API_KEY = process.env.RINKEBY_API_KEY;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    rinkeby:{
      url:ALCHEMY_API_KEY,
      accounts: [RINKEBY_API_KEY],
    }
  }
};
