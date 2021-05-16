const MyDeFiProject = artifacts.require("MyDeFiProject.sol");

module.exports = function (deployer, network) {
  let comptrollerAddress, priceOracleProxy;
  if(network === 'rinkeby') {
    comptrollerAddress = '0x2EAa9D77AE4D8f9cdD9FAAcd44016E746485bddb';
    priceOracleProxy = '0xD2B1eCa822550d9358e97e72c6C1a93AE28408d0';
  }
  deployer.deploy(MyDeFiProject, comptrollerAddress, priceOracleProxy);
};
