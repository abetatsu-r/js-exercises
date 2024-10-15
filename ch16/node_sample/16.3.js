let eight = Buffer.alloc(1024, 1, "hex");
console.log(eight.readBigUInt64BE(0));
console.log(eight.readBigUInt64BE(1));
console.log(eight.readBigUInt64BE(6));
