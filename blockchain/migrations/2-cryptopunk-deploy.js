const Cryptopunk = artifacts.require("Cryptopunk");

module.exports = function (deployer) {
  deployer.deploy(Cryptopunk);
};
