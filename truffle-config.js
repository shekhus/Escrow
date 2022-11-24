const fs =require('fs');
const HDWalletProvider = require('truffle-hdwallet-provider');

const secrets = JSON.parse(fs.readFileSync('.secrets').toString().trim());
// truffle-hdwallet-provider
module.exports = {networks : {
    goerli:{
        provider:() =>
            new HDWalletProvider(
                secrets.seed,
                `https://goerli.infura.io/v3/${secrets.projectId}`

            ),
            network_id :5
            }
        }
    }
