import { ethToEvmos, evmosToEth } from '@evmos/address-converter'

let destination = '0xd9145CCE52D386f254917e481eB44e9943F39138'
// The address must be bech32 encoded
if (destination.split('0x').length == 2) {
    destination = ethToEvmos(destination)
}
console.log("evmos destination: ", destination);