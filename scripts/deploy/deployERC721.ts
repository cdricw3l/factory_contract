import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);


  // Déployer le contrat ERC721
  const ERC721 = await ethers.getContractFactory("MyNFTCollection"); // Remplacer par le nom de votre contrat ERC721
  const erc721 = await ERC721.deploy("My NFT Collection", "MNFT"); // Nom et symbole du NFT
  await erc721.deployed();
  console.log("ERC721 NFT Collection deployed to:", erc721.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
