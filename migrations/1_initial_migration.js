// const Migrations = artifacts.require("Migrations");

// module.exports = function (deployer) {
//   deployer.deploy(Migrations);
// };

// var TodoList = artifacts.require('../contracts/TodoList.sol');

// module.exports = function(deployer) {
//     deployer.deploy(TodoList);
// }

const Migrations = artifacts.require("Migrations");
var TodoList = artifacts.require('../contracts/TodoList.sol');

module.exports = function(deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(TodoList);
};