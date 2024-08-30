import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  

  // Déployer le contrat ERC20
  const ERC20 = await ethers.getContractFactory("MyERC20Token"); // Remplacer par le nom de votre contrat ERC20
  const erc20 = await ERC20.deploy(1000000); // Fournir l'offre initiale comme argument
  await erc20.getAddress();
  console.log("ERC20 Token deployed to:", erc20.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
