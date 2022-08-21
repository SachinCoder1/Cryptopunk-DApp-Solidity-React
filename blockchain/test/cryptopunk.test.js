const CryptoPunk = artifacts.require("Cryptopunk");

contract("CryptoPunk", () => {
  let cryptopunk = before(async () => {
    cryptopunk = await CryptoPunk.deployed();
  });
  it("should deploy", async () => {
    assert.notEqual(cryptopunk, "");
  });

  it("Should add the name to array", async () => {
    let name = "Hello";
    await cryptopunk.mint(name);
    let allPunks = await cryptopunk.getAllPunks();
    assert.equal(await allPunks[0], name);
  });
});
