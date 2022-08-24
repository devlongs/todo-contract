import { ethers } from "hardhat";

async function main() {
  const Todo = await ethers.getContractFactory("Todo");
  const todo = await Todo.deploy();

  await todo.deployed();

  console.log(`todo contract is deployed to this address: ${todo.address}`); // 0x58659688bdF1c45fE0e78a11ff77b0d318C1b5c5
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});