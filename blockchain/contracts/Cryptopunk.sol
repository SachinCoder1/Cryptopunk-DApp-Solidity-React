// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

error Cryptopunk__NameAlreadyExists();

contract Cryptopunk is ERC721, ERC721Enumerable {
    string[] private s_allPunks;
    mapping(string => bool) punksExists;

    constructor() ERC721("CryptoPunk", "CPS") {}

    function getAllPunks() external view returns (string[] memory) {
        return s_allPunks;
    }

    function mint(string memory _name) external {
        if (punksExists[_name]) {
            revert Cryptopunk__NameAlreadyExists();
        }
        s_allPunks.push(_name);
        uint256 punksLength = s_allPunks.length - 1;
        _mint(msg.sender, punksLength);
        punksExists[_name] = true;
    }

    /* Inheriting functions */

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
