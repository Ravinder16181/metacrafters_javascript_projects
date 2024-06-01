// Create a variable to hold your NFTs
const NFTStore = [];

// Function to generate a unique ID
function generateUniqueId() {
  return "ID-" + Math.random().toString(36).substr(2, 9) + "-" + Date.now();
}

// Function to mint an NFT
function mintNFT(_name, _species, _planet, _skills, _spaceship) {
  const nft = {
    id: generateUniqueId(),
    name: _name,
    species: _species,
    planet: _planet,
    skills: _skills,
    spaceship: _spaceship,
    creationDate: new Date().toISOString(),
  };
  NFTStore.push(nft);
  console.log(
    `${_name} the ${_species} from ${_planet} Minted | ID -> ${nft.id}`
  );
}

// Function to list all NFTs
function listNFTs() {
  console.log("\nListing all minted Galactic Explorers:\n");
  NFTStore.forEach((nft) => {
    console.log(`NFT ID: ${nft.id}`);
    console.log(`Name: ${nft.name}`);
    console.log(`Species: ${nft.species}`);
    console.log(`Planet: ${nft.planet}`);
    console.log(`Skills: ${nft.skills}`);
    console.log(`Spaceship: ${nft.spaceship}`);
    console.log(`Creation Date: ${nft.creationDate}`);
    console.log("\n");
  });
  console.log("These are all the minted Galactic Explorers so far!\n");
}

// Function to get the total supply of NFTs
function getTotalSupply() {
  console.log(`Total number of minted Galactic Explorers: ${NFTStore.length}`);
}

// Call your functions below this line
mintNFT("Zara", "Martian", "Mars", "Terraforming", "Star Cruiser X1");
mintNFT("Orion", "Andromedan", "Andromeda", "Star Mapping", "Galaxy Glider");
mintNFT(
  "Lyra",
  "Venusian",
  "Venus",
