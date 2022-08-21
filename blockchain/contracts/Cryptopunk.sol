// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Cryptopunk is ERC721 {
    string[] private s_allPunks;
    constructor() ERC721("CryptoPunk", "CPS") {
        
    }

    function getAllPunks() external view returns(string[] memory) {
        return s_allPunks;
    }

    function mint(string memory _name) external {
       s_allPunks.push(_name);
    }
}