import { CommonBlock, CommonTransaction } from "@/contexts/BlockchainContext";
import { DAGBlock, EVMBlock, DAGTransaction, EVMTransaction } from "@/services/api";
const SDK = require("@mazze-labs/mazze-js-sdk");
const { decode, isValidMazzeAddress } = require("@mazze-labs/mazze-address-js");

export function formatTimeAgo(timestampInSeconds: number): string {
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const seconds = nowInSeconds - timestampInSeconds;
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
}

export function formatLongString(str: string, length: number = 6): string {
    return str?.substring(0, length) + "..." + str?.substring(str?.length - length);
}

export function createCommonBlockFromDag(block: DAGBlock): CommonBlock {
    return {
        id: block.id,
        hash: block.hash,
        timestamp: block.timestamp ? parseInt(block.timestamp) : undefined,
        transaction_count: block.transaction_count,
        blockNumber: block.block_number ? parseInt(block.block_number) : undefined,
        type: "dag",
        author: block.miner
    };
}

export function createCommonBlockFromEvm(block: EVMBlock): CommonBlock {
    return {
        id: block.id,
        hash: block.hash,
        timestamp: block.timestamp ? parseInt(block.timestamp) : undefined,
        transaction_count: block.transaction_count,
        blockNumber: block.number ? parseInt(block.number) : undefined,
        type: "evm",
        author: block.miner
    };
}

export function createCommonTransactionFromDag(transaction: DAGTransaction): CommonTransaction {
    return {
        id: transaction.id,
        hash: transaction.hash,
        timestamp: transaction.timestamp ? parseInt(transaction.timestamp) : undefined,
        from: transaction.from_address,
        to: transaction.to_address,
        value: transaction.value ?? '0',
        type: "dag",
        status: transaction.status === "0x0" ? "success" : "failed",
        blockHash: transaction.block_hash,
        gasPrice: transaction.gas_price ?? undefined,
        gas: transaction.gas ?? undefined
    };
}

export function createCommonTransactionFromEvm(transaction: EVMTransaction): CommonTransaction {
    return {
        id: transaction.id,
        hash: transaction.hash,
        timestamp: transaction.timestamp ? parseInt(transaction.timestamp) : undefined,
        from: transaction.from_address,
        to: transaction.to_address,
        value: transaction.value ?? '0',
        type: "evm",
        status: transaction.status === "1" ? "success" : "failed",
        blockHash: transaction.block_hash,
        gasPrice: transaction.gas_price ?? undefined,
        gas: transaction.gas ?? undefined
    };
}

export function formatMazzeAddress(address: string): string {
    return address.split(':')[address.split(':').length - 1].toLowerCase();
}

export function mazzeAddressToHex(address: string): string | undefined {
    address = address.toLowerCase();
    if (!address.includes(':')) {
        address = "mazze:" + address;
    }

    if (isValidMazzeAddress(address)) {
        return decode(address).hexAddress.toString('hex');
    }
}

export function hexToMazzeAddress(hexAddress: string): string | undefined {
    if (!hexAddress.startsWith("0x")) {
        hexAddress = "0x" + hexAddress;
    }
    return SDK.format.address(hexAddress, 1990);
}

export function sanitizeMazzeAddress(address: string): string {
    address = address.toLowerCase();
    // if (address.split(':').length > 1) {
    //     address = address.split(':')[address.split(':').length - 1];
    // }
    if (!address.includes(':')) {
        address = "mazze:" + address;
    }

    return address;
}