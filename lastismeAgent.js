loadScript('localPsw.js');
var CONTRACTS_ABI=[ { "constant": true, "inputs": [], "name": "houseFee", "outputs": [ { "name": "", "type": "uint256", "value": "10", "displayName": "" } ], "type": "function", "displayName": "house Fee" }, { "constant": false, "inputs": [ { "name": "_newValue", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;new Value", "template": "elements_input_address" } ], "name": "updateLeftLottery", "outputs": [], "type": "function", "displayName": "update Left Lottery" }, { "constant": true, "inputs": [], "name": "houseFeeVal", "outputs": [ { "name": "", "type": "uint256", "value": "100000000000000", "displayName": "" } ], "type": "function", "displayName": "house Fee Val" }, { "constant": true, "inputs": [], "name": "elapsed", "outputs": [ { "name": "", "type": "uint256", "value": "1330162", "displayName": "" } ], "type": "function", "displayName": "elapsed" }, { "constant": false, "inputs": [], "name": "finance", "outputs": [], "type": "function", "displayName": "finance" }, { "constant": true, "inputs": [], "name": "baseData", "outputs": [ { "name": "_balance", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>balance" }, { "name": "_lastPlayer", "type": "address", "value": "0x0000000000000000000000000000000000000000", "displayName": "<span class=\"punctuation\">_</span>last Player" }, { "name": "_lastBlock", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>last Block" }, { "name": "_blockNumber", "type": "uint256", "value": "1330162", "displayName": "<span class=\"punctuation\">_</span>block Number" }, { "name": "_totalWinners", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>total Winners" }, { "name": "_jackpot", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>jackpot" }, { "name": "_price", "type": "uint256", "value": "10000000000000000", "displayName": "<span class=\"punctuation\">_</span>price" }, { "name": "_blocks", "type": "uint256", "value": "10", "displayName": "<span class=\"punctuation\">_</span>blocks" }, { "name": "_totalWinnings", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>total Winnings" }, { "name": "_startedAt", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>started At" } ], "type": "function", "displayName": "base Data" }, { "constant": false, "inputs": [ { "name": "_newValue", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;new Value", "template": "elements_input_uint" } ], "name": "setLotteryFee", "outputs": [], "type": "function", "displayName": "set Lottery Fee" }, { "constant": true, "inputs": [], "name": "remaining", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "remaining" }, { "constant": false, "inputs": [ { "name": "_newValue", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;new Value", "template": "elements_input_uint" } ], "name": "setHouseFee", "outputs": [], "type": "function", "displayName": "set House Fee" }, { "constant": true, "inputs": [], "name": "jackpot", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "jackpot" }, { "constant": true, "inputs": [], "name": "lotteryFee", "outputs": [ { "name": "", "type": "uint256", "value": "40", "displayName": "" } ], "type": "function", "displayName": "lottery Fee" }, { "constant": true, "inputs": [], "name": "lastBlock", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "last Block" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0x6f4250b4c1db1b611e43cbd9a04c4138c7c0af39", "displayName": "" } ], "type": "function", "displayName": "owner" }, { "constant": true, "inputs": [], "name": "blocks", "outputs": [ { "name": "", "type": "uint256", "value": "10", "displayName": "" } ], "type": "function", "displayName": "blocks" }, { "constant": true, "inputs": [], "name": "price", "outputs": [ { "name": "", "type": "uint256", "value": "10000000000000000", "displayName": "" } ], "type": "function", "displayName": "price" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "", "template": "elements_input_uint" } ], "name": "winners", "outputs": [ { "name": "winner", "type": "address", "value": "0x", "displayName": "winner" }, { "name": "jackpot", "type": "uint256", "value": "0", "displayName": "jackpot" }, { "name": "timestamp", "type": "uint256", "value": "0", "displayName": "timestamp" } ], "type": "function", "displayName": "winners" }, { "constant": false, "inputs": [ { "name": "_ref", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;ref", "template": "elements_input_address" } ], "name": "buyTicket", "outputs": [], "type": "function", "displayName": "buy Ticket" }, { "constant": true, "inputs": [], "name": "leftLottery", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000", "displayName": "" } ], "type": "function", "displayName": "left Lottery" }, { "constant": true, "inputs": [], "name": "lotteryFeeVal", "outputs": [ { "name": "", "type": "uint256", "value": "400000000000000", "displayName": "" } ], "type": "function", "displayName": "lottery Fee Val" }, { "constant": false, "inputs": [ { "name": "_newValue", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;new Value", "template": "elements_input_address" } ], "name": "updateRightLottery", "outputs": [], "type": "function", "displayName": "update Right Lottery" }, { "constant": true, "inputs": [], "name": "totalWinnings", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "total Winnings" }, { "constant": true, "inputs": [], "name": "allData", "outputs": [ { "name": "_balance", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>balance" }, { "name": "_lastPlayer", "type": "address", "value": "0x0000000000000000000000000000000000000000", "displayName": "<span class=\"punctuation\">_</span>last Player" }, { "name": "_lastBlock", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>last Block" }, { "name": "_blockNumber", "type": "uint256", "value": "1330162", "displayName": "<span class=\"punctuation\">_</span>block Number" }, { "name": "_totalWinners", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>total Winners" }, { "name": "_jackpot", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>jackpot" }, { "name": "_price", "type": "uint256", "value": "10000000000000000", "displayName": "<span class=\"punctuation\">_</span>price" }, { "name": "_blocks", "type": "uint256", "value": "10", "displayName": "<span class=\"punctuation\">_</span>blocks" }, { "name": "_houseFee", "type": "uint256", "value": "10", "displayName": "<span class=\"punctuation\">_</span>house Fee" }, { "name": "_lotteryFee", "type": "uint256", "value": "40", "displayName": "<span class=\"punctuation\">_</span>lottery Fee" }, { "name": "_leftLottery", "type": "address", "value": "0x0000000000000000000000000000000000000000", "displayName": "<span class=\"punctuation\">_</span>left Lottery" }, { "name": "_rightLottery", "type": "address", "value": "0x0000000000000000000000000000000000000000", "displayName": "<span class=\"punctuation\">_</span>right Lottery" }, { "name": "_totalWinnings", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>total Winnings" }, { "name": "_startedAt", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>started At" } ], "type": "function", "displayName": "all Data" }, { "constant": true, "inputs": [], "name": "totalWinners", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "total Winners" }, { "constant": true, "inputs": [], "name": "rightLottery", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000", "displayName": "" } ], "type": "function", "displayName": "right Lottery" }, { "constant": true, "inputs": [], "name": "refFeeVal", "outputs": [ { "name": "", "type": "uint256", "value": "50000000000000", "displayName": "" } ], "type": "function", "displayName": "ref Fee Val" }, { "constant": true, "inputs": [], "name": "lastPlayer", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000", "displayName": "" } ], "type": "function", "displayName": "last Player" }, { "constant": true, "inputs": [], "name": "startedAt", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "started At" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "new Owner", "template": "elements_input_address" } ], "name": "transferOwnership", "outputs": [], "type": "function", "displayName": "transfer Ownership" }, { "inputs": [ { "name": "_priceParam", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;price Param", "template": "elements_input_uint", "value": "10000000000000000" }, { "name": "_blocksParam", "type": "uint256", "index": 1, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;blocks Param", "template": "elements_input_uint", "value": "10" } ], "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "_from", "type": "address" } ], "name": "TicketBought", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "_winner", "type": "address" }, { "indexed": false, "name": "_from", "type": "address" } ], "name": "WinnerPayedTicketBought", "type": "event" } ];
var lottery12h="0x33A683a7Af55942220e4eFEC514dA11B5dc47996";
var contract12h=web3.eth.contract(CONTRACTS_ABI).at(lottery12h);
//var lottery24h="0xAf396dcE15cb9E834fF9187f34f589dB22C849a8";
//var contract24h=web3.eth.contract(CONTRACTS_ABI).at(lottery24h);
var player1=eth.accounts[0];
var player2=eth.accounts[1];
console.log("player1=" + player1 + " player2=" + player2);


var remaining12h=contract12h.remaining().toNumber();
var totalBlocks12h=contract12h.blocks().toNumber();
var lastPlayer12h=contract12h.lastPlayer();
console.log("12h lottery remaining blocks " + remaining12h + " of " + totalBlocks12h+ " lastPlayer " + lastPlayer12h );
console.log("psw=" + psw);
if(remaining12h<25) {
  console.log("betting!");
  if(lastPlayer12h==player2) {
    console.log("player1 playing");
    var unlocked= personal.unlockAccount(player1, psw);
    console.log("player1 unlocked=" + unlocked);
    var val=eth.sendTransaction({from: player1, to: lottery12h , value: web3.fromWei(0.5,"ether") , gas:200000, gasPrice:20000000000 });
    console.log("player1 payed=" + val);

  } else {
    console.log("player2 playing");
    var unlocked= personal.unlockAccount(player2, psw);
    console.log("player2 unlocked=" + unlocked);
    var val=eth.sendTransaction({from: player2, to: lottery12h , value: web3.fromWei(0.5,"ether") , gas:200000, gasPrice:20000000000 });
    console.log("player2 payed=" + val);

  }
}
