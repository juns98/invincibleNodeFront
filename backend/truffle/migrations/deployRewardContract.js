var RewardContract = artifacts.require("RewardContract");
module.exports = function(deployer) {
    deployer.deploy(RewardContract, "inEvmos");
    // Additional contracts can be deployed here
};