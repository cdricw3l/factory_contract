import { ethers } from 'ethers';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

function updateEnvFile(newPrivateKey: string, newAddress: string) {
  const envConfig = dotenv.parse(fs.readFileSync('.env'));

  envConfig['NEW_PRIVATE_KEY'] = newPrivateKey;
  envConfig['NEW_PRIVATE_ADDRESS'] = newAddress; // Corrigé pour écrire l'adresse

  const updatedEnv = Object.entries(envConfig)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

  fs.writeFileSync('.env', updatedEnv);
  console.log('New private key and address saved to .env file.');
}

async function main() {
  // Generate a new wallet
  const wallet = ethers.Wallet.createRandom();
  const privateKey = wallet.privateKey;
  const address = wallet.address;

  console.log(`New Ethereum Address: ${address}`);
  console.log(`Private Key: ${privateKey}`);

  // Update the .env file with the new private key and address
  updateEnvFile(privateKey, address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
