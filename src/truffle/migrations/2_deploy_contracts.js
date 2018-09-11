var DapLotto=artifacts.require ("./DapLotto.sol");
module.exports = function(deployer) {
      deployer.deploy(DapLotto, 1000, 3);
}