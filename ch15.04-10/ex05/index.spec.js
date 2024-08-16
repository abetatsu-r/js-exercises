import { test, expect } from "@playwright/test";

function gotoTestTarget(page) {
  return page.goto("/ch15.04-10/ex05/index.html");
}

test.describe("inline-circle", () => {
  test("正しく表示されること", async ({ page }) => {
    await gotoTestTarget(page);
    const inlineCircle = page.locator("p inline-circle:nth-of-type(3)");
    await expect(inlineCircle).toHaveCSS("opacity", "0.5");
  });
});
