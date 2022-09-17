export const tokenLockerManagerAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "oldOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint40",
        "name": "id",
        "type": "uint40"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "token0",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "token1",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "createdBy",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint40",
        "name": "unlockTime",
        "type": "uint40"
      }
    ],
    "name": "TokenLockerCreated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenAddress_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      },
      {
        "internalType": "uint40",
        "name": "unlockTime_",
        "type": "uint40"
      }
    ],
    "name": "createTokenLocker",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "creationEnabled",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint40",
        "name": "id_",
        "type": "uint40"
      }
    ],
    "name": "getLpData",
    "outputs": [
      {
        "internalType": "bool",
        "name": "hasLpData",
        "type": "bool"
      },
      {
        "internalType": "uint40",
        "name": "id",
        "type": "uint40"
      },
      {
        "internalType": "address",
        "name": "token0",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "token1",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "balance0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "balance1",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "price0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "price1",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint40",
        "name": "id_",
        "type": "uint40"
      }
    ],
    "name": "getTokenLockAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint40",
        "name": "id_",
        "type": "uint40"
      }
    ],
    "name": "getTokenLockData",
    "outputs": [
      {
        "internalType": "bool",
        "name": "isLpToken",
        "type": "bool"
      },
      {
        "internalType": "uint40",
        "name": "id",
        "type": "uint40"
      },
      {
        "internalType": "address",
        "name": "contractAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "lockOwner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "createdBy",
        "type": "address"
      },
      {
        "internalType": "uint40",
        "name": "createdAt",
        "type": "uint40"
      },
      {
        "internalType": "uint40",
        "name": "unlockTime",
        "type": "uint40"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalSupply",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "address_",
        "type": "address"
      }
    ],
    "name": "getTokenLockersForAddress",
    "outputs": [
      {
        "internalType": "uint40[]",
        "name": "",
        "type": "uint40[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint40",
        "name": "id_",
        "type": "uint40"
      },
      {
        "internalType": "address",
        "name": "newOwner_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "previousOwner_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "createdBy_",
        "type": "address"
      }
    ],
    "name": "notifyLockerOwnerChange",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "value_",
        "type": "bool"
      }
    ],
    "name": "setCreationEnabled",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tokenLockerCount",
    "outputs": [
      {
        "internalType": "uint40",
        "name": "",
        "type": "uint40"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner_",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]