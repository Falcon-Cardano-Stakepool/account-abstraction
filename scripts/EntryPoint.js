const hre = require("hardhat");
const { BigNumber } = require("ethers");

async function main() {

  
  const EntryPoint = await hre.ethers.getContractFactory("EntryPoint");
  const entryPoint = await EntryPoint.deploy(BigNumber.from("50000000000000000"), 5);

  console.log(
    "Deploying EntryPoint \ntransaction: ",
    entryPoint.deployTransaction.hash,
    "\naddress: ",
    entryPoint.address,
  );

  await entryPoint.deployed();

  console.log("\n");

  //console.log("Verifying contract.");
  //await verify(entryPoint.address, [BigNumber.from("50000000000000000"), 5]);
}

async function verify(address, args) {
  try {
    return await hre.run("verify:verify", {
      address: address,
      constructorArguments: args,
    });
  } catch (e) {
    console.log(address, args, e);
  }
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.error(e);
    process.exit(1);
  });