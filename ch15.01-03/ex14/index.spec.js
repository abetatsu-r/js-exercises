import { test, expect } from "@playwright/test";

function gotoTestTarget(page) {
  return page.goto("/ch15.01-03/ex14/index.html");
}

function getfood1(page) {
  return page.getByTestId("food1");
}

function getStationery1(page) {
  return page.getByTestId("stationery1");
}

function getStationery2(page) {
  return page.getByTestId("stationery2");
}

function getSelect(page) {
  return page.getByTestId("select");
}

test.describe("choice", () => {
  test("allを選択したとき、すべて表示されていること", async ({ page }) => {
    await gotoTestTarget(page);
    await getSelect(page).selectOption("all");
    await expect(getfood1(page)).not.toHaveCSS("display", "none");
    await expect(getStationery1(page)).not.toHaveCSS("display", "none");
    await expect(getStationery2(page)).not.toHaveCSS("display", "none");
  });

  test("foodを選択したとき、お菓子のみ表示されていること", async ({ page }) => {
    await gotoTestTarget(page);
    await getSelect(page).selectOption("food");
    await expect(getfood1(page)).not.toHaveCSS("display", "none");
    await expect(getStationery1(page)).toHaveCSS("display", "none");
    await expect(getStationery2(page)).toHaveCSS("display", "none");
  });

  test("stationeryを選択したとき、消しゴム物差しだけが表示されていること", async ({
    page,
  }) => {
    await gotoTestTarget(page);
    await getSelect(page).selectOption("stationery");
    await expect(getfood1(page)).toHaveCSS("display", "none");
    await expect(getStationery1(page)).not.toHaveCSS("display", "none");
    await expect(getStationery2(page)).not.toHaveCSS("display", "none");
  });
});
