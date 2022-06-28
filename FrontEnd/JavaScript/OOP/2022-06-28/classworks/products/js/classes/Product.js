class Product {
	constructor(name, price, category, url) {
		if (name) {
			this.setName(name);
		}

		if (price) {
			this.setPrice(price);
		}

		if (category) {
			this.setCategory(category);
		}
		
		if (url) {
			this.setUrl(url);
		}
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;

		return this;
	}

	getPrice() {
		return this.price;
	}

	setPrice(price) {
		this.price = price;

		return this;
	}

	getCategory() {
		return this.category;
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error
	setCategory(category) {
		if (!ALLOWED_CATEGORIES.includes(category)) {
			throw new Error('Whoops! Category not found.', {
				cause: {
					category
				}
			});
		}

		this.category = category;

		return this;
	}

	setUrl(url) {
		this.url = url;

		return this;
	}

	getSalePrice() {
		return this.getPrice() - (this.getPrice() * 0.10).toFixed(2);
	}

	isOnSale() {
		return Math.random() < 0.5;
	}
}