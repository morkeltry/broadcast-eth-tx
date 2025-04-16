// Don't want to link your Twitter or do a bunch of CAPTCHAs just to broadcast an EVM tx?
// Do it through Metamask!

// Run me from console (set Metamask to correct network first)

let rawTx;

async function broadcastRawTransaction(rawTx) {
  try {
    // Ensure MetaMask is available
    if (typeof window.ethereum === "undefined") {
      throw new Error("MetaMask is not installed.");
    }

    // Need to connct wallet to page manually
    // TODO: add connect button ;)

    // Send the raw transaction using MetaMask's RPC endpoint
    const txHash = await window.ethereum.request({
      method: "eth_sendRawTransaction",
      params: [rawTx],
    });

    console.log("Transaction broadcasted successfully. Tx Hash:", txHash);
    return txHash;
  } catch (error) {
    console.error("Error broadcasting transaction:", error.message || error);
  }
}

// Replace `YOUR_RAW_TRANSACTION_HEX` with signed raw transaction hex string
rawTx = "RAW_TRANSACTION_HEX_HERE";
broadcastRawTransaction(rawTx);