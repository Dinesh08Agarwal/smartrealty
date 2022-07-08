# smartRealty

## Abstract

Land registry in India as well as in many parts of the world is very slow and cumbersome process. There are also many intermediaries involved in the process of land registration. Developing a system that not only accelerate the process of land registration, but also make it easier for Buyers, Sellers and Government registrars to transfer the land ownership from seller to a new buyer, is only possible by creating a distributed system that store all the transactions made during the process of land buying. Through this project we tried to explore the possibilities and problems solved by using a blockchain based system for land ownership transfer. Blockchain is making waves in the real estate sector with the level of transparency it provides. The technology is being increasingly considered for use in land registration with its ability to immutably record and share information. The immutable, decentralized nature of the blockchain network renders data transparent for any untrusted party to verify. The system that we are trying to implement is based on Ethereum Blockchain that will store all the transactions made during the process of land ownership transfer. Using the concept of smart contracts of blockchain technology we can triggers various events like access of land documents to a land inspector and fund transfer event from buyer to seller after successful verification of the land ownership transfer. This system will solve the problems faced by all the three parties during the land registration and will also remove the intermediaries like property dealers. This system makes the process of land registration resilient and decrease the cases of fraud in the process. Using the system, validation of the lands is also possible as immutable transactions are being stored in the public ledger.

#### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs.

#### Install Ganache
Refer to https://www.trufflesuite.com/ganache to install Ganache.

#### Install Truffle
Install truffle npm package globally. Use the following command to install truffle
`npm install -g truffle`

#### Install Metamask Chrome Extension
Refer to https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en to download the extension.

#### Make an account on MongoDB Altas
https://www.mongodb.com/cloud/atlas

## Getting Started
To set up the project, go along with the following steps:-
- Clone the repository. <br/>
`git clone `
- Go to the directory with the repository. <br/>
`cd folder_name`
- Run **npm install** and **hdwallet** (or **yarn install** if you use yarn) to download the npm packages. <br/>
`npm install`
`npm i @truffle/hdwallet-provider`

- Open Ganache.
- Run **truffle compile** to compile the truffle project. <br/>
`truffle compile`
- Run **truffle migrate** to deploy the contracts. <br/>
`truffle migrate`
- Run **npm start** to start the project. <br/>
`npm start`
- Open another terminal and navigate to the **Server** folder. <br/>
`cd Server`
- Run **npm install** (or **yarn install** if you use yarn) to download the npm packages. <br/>
`npm install`
- Navigate to the **backend** folder then to the **Config** folder. <br/>
`cd backend/Config`
- Change the credentials of **db_config.js** .
- Run the server using this command:- <br/>
`npm start`
- Open another terminal and execute the following command to add the government registrar detail to the database. <br/>
`curl -X POST http://localhost:3001/register_govt`
