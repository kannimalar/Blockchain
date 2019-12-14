const sha256 = require('sha256');

class Block {
  constructor(index, timestamp, data,data1, prevHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.data1=data1;
    this.prevHash = prevHash;
    this.thisHash = sha256(
      this.index + this.timestamp + this.data +this.data1+ this.prevHash
    );
  }
}

const createGenesisBlock = () => new Block(0, Date.now(), 'Abi','O+ve', '0');

const nextBlock = (lastBlock, data,data1) =>
  new Block(lastBlock.index + 1, Date.now(), data,data1,lastBlock.thisHash);

const createBlockchain = num => {
  const blockchain = [createGenesisBlock()];
  let previousBlock = blockchain[0];
const ar= new Array("Abi","Banu","Chitra","Mahima","Preethi");
const bg= new Array("O+ve","A+ve","AB+ve","B+ve","O-ve");
  for (let i = 1; i < num; i += 1) {
    const blockToAdd = nextBlock(previousBlock, `Student:${ar[i]}`,`Blood Group:${bg[i]}`);
    
    blockchain.push(blockToAdd);
    previousBlock = blockToAdd;
  }
  console.log(blockchain);
};

const lengthToCreate = 5;
createBlockchain(lengthToCreate);













/* isChainValid()
 {

        for (let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}


let savjeeCoin = new Blockchain();
savjeeCoin.addBlock(new Block(1, "20/07/2017", { name: `Banu` }));
savjeeCoin.addBlock(new Block(2, "20/07/2017", { name: `Banu` }));

// Check if chain is valid (will return true)
console.log('Blockchain valid? ' + savjeeCoin.isChainValid());








// Let's now manipulate the data
savjeeCoin.chain[1].data = { amount: 100 };

// Check our chain again (will now return false)
console.log("Blockchain valid? " + savjeeCoin.isChainValid());
*/
