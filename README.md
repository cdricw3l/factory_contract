# Installation des dépendances
npm install

# Compilation des contrats Solidity
npx hardhat compile

# Compilation contrats Specifique
npx hardhat compile:specific --contract MyERC721Token

# Exécution des tests
npx hardhat test

# Exécution des tests avec rapport de gas
npx hardhat test --gas

# Démarrage d'un nœud local Hardhat
npx hardhat node

# Déploiement des contrats sur le nœud local
npx hardhat run scripts/deployERC20.ts --network localhost
npx hardhat run scripts/deployERC721.ts --network localhost

# Déploiement des contrats sur Sepolia Testnet
npx hardhat run scripts/deployERC20.ts --network sepolia
npx hardhat run scripts/deployERC721.ts --network sepolia

# Interaction avec un contrat ERC20
npx hardhat run scripts/interactERC20.ts --network <network-name>

# Interaction avec un contrat ERC721
npx hardhat run scripts/interactERC721.ts --network <network-name>

# Vérification des contrats sur Etherscan
npx hardhat verify --network sepolia <contract-address> <constructor-arguments>

# Linting du code
npx eslint . --ext .ts

# Formatage du code
npx prettier --write .

# Génération des types TypeScript avec TypeChain
npx hardhat typechain

# Nettoyage des fichiers compilés
npx hardhat clean
