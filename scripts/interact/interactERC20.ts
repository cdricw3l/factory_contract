import { ethers } from "hardhat";

async function main() {
  const [sender, recipient] = await ethers.getSigners();

  // Adresse du contrat ERC20 déployé
  const erc20Address = "ADRESSE_DU_CONTRAT_ERC20"; // Remplacer par l'adresse réelle du contrat ERC20
  const ERC20 = await ethers.getContractFactory("MyERC20Token"); // Remplacer par le nom de votre contrat ERC20
  const erc20 = ERC20.attach(erc20Address);
  

  // Transférer des tokens
  
  const amount = ethers.parseUnits("100", 18); // Transférer 100 tokens
  const tx = await erc20.transfer(recipient.address, amount);
  await tx.wait();

  console.log(`Transferred ${amount} tokens from ${sender.address} to ${recipient.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
