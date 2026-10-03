import assert from "node:assert";
import test from "node:test";
import { clamp } from "./math.js";

// Test variable (change this value to break/fix the test)
const VALUE = 7;

test("sprawdzenie czy wartość mieści się w zakresie 6-10", () => {
  // Condition: VALUE >= 6 and VALUE <= 10
  const isInRange = VALUE >= 6 && VALUE <= 10;

  // Verification: if isInRange is false, the test will generate a readable error
  assert.strictEqual(
    isInRange,
    true,
    `Wartość ${VALUE} wykracza poza zakres [6, 10]`,
  );
});

test("clamp keeps a value inside the range", () => {
  assert.strictEqual(clamp(5, 1, 10), 5);
  assert.strictEqual(clamp(-3, 1, 10), 1);
  assert.strictEqual(clamp(42, 1, 10), 10);
});
