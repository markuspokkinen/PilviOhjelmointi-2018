describe("docker", function () {
	var stone, bag, book, cotton, cargo, bag2;

	beforeAll(function () {
		bag = new Bag(10);
		bag2 = new Bag(10);
		cargo = new Cargo(15);
		stone = new Stuff("stone", 3);
		book = new Stuff("book", 7);
		cotton = new Stuff("cotton", 0.001);
	});
	describe("laukku", function () {
		it("laukun paino: pitäisi olla 3: ", function () {
			bag.add(stone);
			expect(bag.weight()).toEqual(3);
		});

		it("laukun paino: pitäisi olla 10:", function () {
			bag.add(book);
			expect(bag.weight()).toEqual(10);
		});
		it("laukkun yli paino", function () {
			bag.add(cotton);
			expect(bag.weight()).toEqual(10);

		});
	});
	describe("cargo", function () {
		it("cargon vääränlinen esine", function () {
			cargo.add(cotton);
			expect(cargo.weight()).toEqual(0);
		});
		it("cargoon lisääminen oikea esine", function () {
			cargo.add(bag);
			expect(cargo.weight()).toEqual(10);
		});
		it("toisen laukun lisääminen", function () {
			bag2.add(cotton);
			cargo.add(bag2);
			expect(cargo.weight()).toEqual(10.001);
		});
		it("sallittu ruuman yli paino hups", function () {
			cotton.weight = 300;
			expect(cargo.weight()).toEqual(310);
		});

	});
});