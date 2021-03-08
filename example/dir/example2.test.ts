// sample test
describe("some describe1", () => {
	
	beforeAll(async () => {
		xxx
	})
	
	beforeEach(async () => {
		xxx
	})
	
	describe("some describe2", () => {
		
		describe("some describe3", () => {
			
			test("test1", async () => {
				const actual = xxx
				await expect(actual).resolves.toBeUndefined()
			})
			
		describe("some describe4", () => {
			
			test("test2", async () => {
				const actual = xxx
				await expect(actual).resolves.toBeUndefined()
			})
			
			test("test3", async () => {
				const actual = xxx
				await expect(actual).resolves.toBeUndefined()
			})
		})
	})
	
	
	describe("some describe5", () => {
		
		describe("some describe6", () => {
			
			test("test4", async () => {
				const actual = xxx
				await expect(actual).resolves.toBeUndefined()
			})
			
		describe("some describe7", () => {
			
			test("test5", async () => {
				const actual = xxx
				await expect(actual).resolves.toBeUndefined()
			})
			
			test("test6", async () => {
				const actual = xxx
				await expect(actual).resolves.toBeUndefined()
			})
		})
	})
	
	afterEach(async () => {
		xxx
	})
	
	afterAll(async () => {
		xxx
	})
	
})
