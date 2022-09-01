const {ethers} = require('hardhat');



async function main(){
  const whiteListContract = await ethers.getContractFactory('Whitelist');
  const deployeWhitelistContract = await whiteListContract.deploy(10);
  await deployeWhitelistContract.deployed();
  console.log(deployeWhitelistContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });