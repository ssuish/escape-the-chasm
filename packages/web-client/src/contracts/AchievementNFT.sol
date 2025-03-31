// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AchievementNFT is ERC721, Ownable {
    uint256 private _tokenIds;
    
    // Achievement types
    enum BadgeType { SILVER, GOLD, PLATINUM }
    
    struct Achievement {
        BadgeType badgeType;
        string name;
        string description;
    }
    
    // Mapping from token ID to Achievement
    mapping(uint256 => Achievement) private _achievements;
    
    // Mapping from player address to achievement type to boolean
    mapping(address => mapping(BadgeType => bool)) public hasAchievement;
    
    // Base URI for metadata
    string private _baseTokenURI;

    constructor() ERC721("Escape The Chasm Achievement", "ETCA") Ownable() {
        _tokenIds = 0;
    }
    
    function mintAchievement(
        address player,
        BadgeType badgeType,
        string memory name,
        string memory description
    ) public {
        require(!hasAchievement[player][badgeType], "Player already has this achievement type");
        
        _tokenIds++;
        uint256 newTokenId = _tokenIds;
        
        _achievements[newTokenId] = Achievement({
            badgeType: badgeType,
            name: name,
            description: description
        });
        
        _safeMint(player, newTokenId);
        hasAchievement[player][badgeType] = true;
    }
    
    function getAchievement(uint256 tokenId) public view returns (
        BadgeType badgeType,
        string memory name,
        string memory description
    ) {
        require(_ownerOf(tokenId) != address(0), "Token does not exist");
        Achievement memory achievement = _achievements[tokenId];
        return (achievement.badgeType, achievement.name, achievement.description);
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_ownerOf(tokenId) != address(0), "Token does not exist");
        return string(abi.encodePacked(super.tokenURI(tokenId)));
    }
}