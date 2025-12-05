const hre = require("hardhat");

async function main() {
  console.log("Starting deployment...");

  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const greeting = "Hello Base!";
  
  // Contract Factory
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  
  // Deploy
  const greeter = await Greeter.deploy(greeting);
  await greeter.waitForDeployment();

  console.log(
    `Greeter contract deployed to ${greeter.target} with greeting: ${greeting}`
  );
}

// Handle errors
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
