
var books = require('./books.js')

const input = process.openStdin()

input.on('data', chunk => {
	const text = chunk.toString().trim()
	const space = text.indexOf(' ')
	const item = text.substring(space).trim()
	if (text.indexOf('search ') === 0) {
		console.log('searching for "' + item + '"')
		/* Notice how the callback takes two parameters, an error and the data where a non-null error parameter indicates an error has ocurred. */
		books.search(item, (err, data) => {
			if (err) {
				/* the message property contains the string passed to the error object. */
				console.log(err.message)
				return
			}
			console.log(JSON.stringify(data, null, 2))
		})
	}
	if (text.indexOf('add ') === 0) {
		console.log('adding "' + item + '"')
		/* we wrap our code in a 'try' block */
		try {
			const result = books.add(item)
			console.log("res: "+result)
		} catch (err) {
			/* if an exception is thrown the program flow jumps to the 'catch' block, the exception is stored in the 'err' parameter. */
			console.log(err)
		} finally {
			console.log('the list contains ' + books.bookCount() + ' books')
		}
	}
	if (text.indexOf('remove') === 0) {
		try {
			const rsult = books.remove(item);
			console.log(rsult);
		} catch (err) {
			console.log(err);
		}
	}
	if (text.indexOf("APISearch") === 0) {
		describe("API Search Test", function () {

			it("query tBbsAgAAQBAJ", function () {
				expect(books.add(tBbsAgAAQBAJ, (err, data) => {
					console.log(data);
					return data;
				})).toBeDefined();
			});

		});
	};
});