import { ethers } from "hardhat";

async function main() {
  const [minter] = await ethers.getSigners();

  // Adresse du contrat ERC721 déployé
  const erc721Address = "ADRESSE_DU_CONTRAT_ERC721"; // Remplacer par l'adresse réelle du contrat ERC721
  const ERC721 = await ethers.getContractFactory("MyNFTCollection"); // Remplacer par le nom de votre contrat ERC721
  const erc721 = ERC721.attach(erc721Address);

  // Mint un nouveau NFT
  const tx = await erc721.mint(minter.address, 1); // Mint un NFT avec l'ID 1 à l'adresse du minter
  await tx.wait();

  console.log(`Minted NFT with ID 1 to address ${minter.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
