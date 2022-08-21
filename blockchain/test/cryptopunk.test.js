const CryptoPunk = artifacts.require("Cryptopunk");

contract("CryptoPunk", () => {
  let cryptopunk = before(async () => {
    cryptopunk = await CryptoPunk.deployed();
  });
  it("should deploy", async () => {
    assert.notEqual(cryptopunk, "");
  });

  it("Should add the name to array and if name exist return the error", async () => {
    let name = "Hello";

    let isExist = await cryptopunk.isNameExists(name);
    assert.equal(isExist, false);
    
    await cryptopunk.mint(name);
    let allPunks = await cryptopunk.getAllPunks();
    assert.equal(await allPunks[0], name);
    
    isExist = await cryptopunk.isNameExists(name);
    assert.equal(isExist, true);
  });

});
