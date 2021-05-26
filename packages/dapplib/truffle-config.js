require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture stone rate mad huge history light army gate'; 
let testAccounts = [
"0x9d3b0d9fac2010a810bc006f508593b22af2487a19690c2b512ad8fccf7207dc",
"0xa49b21e84fe0e80cb820d5f5cde2eb77a99834aebdbcd5005d51bd9785282cff",
"0x8847476659a6ad5973587385a7b704ae3cb9cf3ce97c492cdb3810fa7e03aa5b",
"0x5b095178d942065fb630d30a8cec721b852e329e75c3b7d6a8b89b936298be0f",
"0xa90be89cf265a05ae55806f1279e00f6d27937d44aec42ede82f950a407eea79",
"0x194a35e5062e82ea4f611ca36e10ee6679264ad65907eeff922ba1d2bb74e889",
"0x7b8585b3ba2d6716b3884303d64b6af0e110bfab07c85b91ade322b3730eb3e9",
"0xf9ebf880641650e41f77235155fb2ac8d4bb37bcbdd0a86ee6eb3a23af656899",
"0xfdf4fd7e6a877213e94feb935bb9adc9434e7b69077c5e825c0f36edba47e9c2",
"0xf7d6b47b89a30f638075efafb29948f2e13cf3c73883922d3ca0a834acfb77cd"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
