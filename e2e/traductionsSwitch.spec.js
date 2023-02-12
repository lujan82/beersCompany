import { expect, test } from "@playwright/test"

test.describe("Traduction switch", () => {
	test("should traduction to spanish", async ({ page }) => {
		await page.goto("http://localhost:3000/")
		await page.getByRole("button", { name: "ES" }).click()
		await expect(page.locator("h1")).toContainText("Descubre nuestras cervezas")
		await page.getByText("Nuestras cervezas")
	})
})
