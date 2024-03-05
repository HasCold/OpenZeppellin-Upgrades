// SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0 < 0.9.0;

contract NUM2{
    uint256 private num;

    function update(uint256 _num) public{
        num = _num;
    }

    function get() public view returns(uint256) {
        return num;
    }

    function increment() public {
        num = num + 1;
    }
}
