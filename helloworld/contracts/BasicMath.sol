// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 <0.9.0;

contract basicMath {
    uint256 constant private MAX_UINT256 = 2**256-1;

    function add(uint256 num1, uint256 num2) public pure returns (uint256){
        return num1 + num2;
    }
}