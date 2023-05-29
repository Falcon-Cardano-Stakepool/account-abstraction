const hre = require("hardhat");

async function main() {

  
  const entrypointAddress = "0x77fCC2F28C5857B4E8B0254633c587809FD98331"
  const AccountFactory = await hre.ethers.getContractFactory("AccountFactory");
  const accountFactory = await AccountFactory.deploy(entrypointAddress);

  console.log(
    "Deploying AccountFactory \ntransaction: ",
    accountFactory.deployTransaction.hash,
    "\naddress: ",
    accountFactory.address,
  );

  await accountFactory.deployed();

  console.log("\n");

  //console.log("Verifying contract.");
  //await verify(accountFactory.address, [entrypointAddress]);
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