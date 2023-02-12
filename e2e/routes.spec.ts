import { expect, test } from "@playwright/test"

test.describe("Routes", () => {
	test.describe.configure({ mode: "parallel" })

	test("should navigate to HOME page", async ({ page }) => {
		await page.goto("http://localhost:3000/")
		await expect(page.locator("h1")).toContainText("Discover our beers")
		await page.getByRole("heading", { name: "Discover our beers" })
	})

	test("should navigate to /our-beers page", async ({ page }) => {
		await page.goto("http://localhost:3000/our-beers")
		await page.locator("li").first().waitFor()
		console.log(await page.locator("li").count())
		const countListItem = await page.locator("li").count()
		countListItem === 8
	})

	test("should navigate to Jobs page", async ({ page }) => {
		await page.goto("http://localhost:3000/jobs")
		await expect(page.locator("h2")).toContainText("Our Philosophy")
		await page.getByRole("heading", { name: "Our Philosophy" })
	})

	test("should navigate to History page", async ({ page }) => {
		await page.goto("http://localhost:3000/history")
		await expect(page.locator("h2").first()).toContainText("1979")
		await page.getByRole("heading", { name: "1979", exact: true })
	})

	test("should navigate to Wt page", async ({ page }) => {
		await page.goto("http://localhost:3000/wt")
		await page.getByText("TEAM")
		await page.getByText("BLOG")
	})

	test("should navigate to Contact page", async ({ page }) => {
		await page.goto("http://localhost:3000/contact")
		await page.getByText("Come to us!")
	})

	test("should navigate to Shop page", async ({ page }) => {
		await page.goto("http://localhost:3000/shop")
		await page.getByText("OUR PRODUCTS")
		await expect(page.locator("h2").first()).toContainText("Our products")
	})
})
