const BasicMath = artifacts.require("BasicMath");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */

contract("BasicMath", async accounts => {
  it("the sum should not overflow", async() => {
    try {
      const addResult = contractInstance.add((2**256-1), 5)
      assert.ok(false, "Threw an exception instead of overflowing")
    } catch(error) {
      assert.ok(true, "Caught the exception");
    }
  });
});