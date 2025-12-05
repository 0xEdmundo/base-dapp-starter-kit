# Base dApp Starter Kit

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Base](https://img.shields.io/badge/network-Base-0052FF)

The ultimate boilerplate for building decentralized applications on the **Base** L2 blockchain. This starter kit includes everything you need to go from zero to production with the latest Web3 stack.

## Features

- **Frontend:** Next.js 13 (App Router) + Tailwind CSS for styling.
- **Web3 Integration:** Wagmi + Viem for Ethereum hooks and interactions.
- **Wallet Connection:** RainbowKit for the best wallet connection experience.
- **Smart Contracts:** Hardhat configured for Base Mainnet and Base Sepolia testnet.
- **Type Safety:** Fully typed with TypeScript.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v16 or later)
- NPM or Yarn
- Git

## Getting Started

Follow these steps to set up the project locally.

### 1. Clone the Repository

```bash
git clone [https://github.com/0xEdmundo/base-dapp-starter-kit.git](https://github.com/0xEdmundo/base-dapp-starter-kit.git)
cd base-dapp-starter-kit

### 2. Install Dependencies

npm install
# or
yarn install

### 3. Configure Environment Variables

Create a .env file in the root directory and add your private key and API keys.

cp .env.example .env

### Example .env file:

PRIVATE_KEY=your_private_key_here
ETHERSCAN_API_KEY=your_basescan_api_key
NEXT_PUBLIC_WALLET_CONNECT_ID=your_project_id

### 4. Run the Development Server

npm run dev

Open http://localhost:3000 with your browser to see the result.

### Smart Contract Deployment
This project comes with a pre-configured Hardhat setup for Base.

Compile Contracts

npm run compile

### Deploy to Base Sepolia (Testnet)

npm run deploy:base-sepolia

### Deploy to Base Mainnet

npm run deploy:base

### Project Structure

├── contracts/       # Solidity smart contracts
├── scripts/         # Deployment scripts
├── src/
│   ├── app/         # Next.js pages and components
│   ├── components/  # Reusable UI components
│   └── utils/       # Helper functions
├── hardhat.config.js
└── package.json

### Contributing
Contributions are always welcome! Please create a Pull Request or open an Issue if you find any bugs.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

License
Distributed under the MIT License. See LICENSE for more information.

Built for the Base Ecosystem.
