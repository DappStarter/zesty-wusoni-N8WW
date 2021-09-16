require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture student rival soap universe hard light army giggle'; 
let testAccounts = [
"0x4780bfd1929575d5e73c662ab14156ee6522ea9c3bad32ca09ebef24338564ea",
"0x769cda0f36677d36fd0ef08106545fc0c147c265f943fe66b2120a967fc9eed8",
"0xf1bd1ca855fd968c37c5c3cedc2bc36b19e6beaa08c71d1f42880fbe97c64356",
"0x127fc95941240d04e72183b984b2b290e39d8f7849331e28033d42e3b9e4e997",
"0x9198ef1f0235beb13f01322437022c2f82c3b92b472e8de09211bd3f6eecbedd",
"0xcfd418193957187782953f37d373231931184de72b191679c1dc7b0a7bbca15b",
"0x47416f215f0f8c5cc758cb76ec7d6c3596563da0689b6280fd5142762c51e2de",
"0xa986a38fed09115c1adc90a6ace78e6e4ddc7202f408df4133ec90e0b44dd366",
"0xeb1a8d56444ddc81f2adc4bc1979c512e330d332c9927869e99868edbd66f213",
"0x18554937f9723b84a47b116ebc715bb3e05d30f5cf5be105705e9730acc8e357"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

