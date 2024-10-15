import child_process from "child_process";

let listing = child_process.execSync("ls -l", { encoding: "utf-8" });
console.log(listing);
