// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract CrowdFunding {
    struct Campaign {
        uint256 id;
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        uint256 noofvotes;
        string theme;
        string types;
        address[] vote;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaigns;

    uint256 public numberOfCampaigns = 0;

    function createCampaign(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _image,string memory _theme
     , string memory _types) public returns (uint256) {
        Campaign storage campaign = campaigns[numberOfCampaigns];

        require(campaign.deadline < block.timestamp, "The deadline should be a date in the future.");
        campaign.id=numberOfCampaigns;
        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.image = _image;
        campaign.theme= _theme;
        campaign.types=_types;
        numberOfCampaigns++;

        return numberOfCampaigns - 1;
    }

    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;

        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        (bool sent,) = payable(campaign.owner).call{value: amount}("");

        if(sent) {
            campaign.amountCollected = campaign.amountCollected + amount;
        }
    }

    function getDonators(uint256 _id) view public returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        for(uint i = 0; i < numberOfCampaigns; i++) {
            Campaign storage item = campaigns[i];

            allCampaigns[i] = item;
        }

        return allCampaigns;
    }

   function markvote(uint256 _id) public {
    Campaign storage item = campaigns[_id];
    address[] storage thevote = item.vote;

    // Check if the sender has already voted
    for (uint256 i = 0; i < item.noofvotes; i++) {
        require(thevote[i] != msg.sender, "You have already voted.");
    }

    // If not already voted, increment the number of votes and add the sender to the vote list
    item.noofvotes++;
    item.vote.push(msg.sender);
    }

    function getvote(uint256 _id) public view returns(address [] memory )
    {
        Campaign storage item = campaigns[_id];
        return (item.vote);
    }



}