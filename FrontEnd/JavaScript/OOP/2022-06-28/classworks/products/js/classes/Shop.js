class Shop {
	constructor() {
		this.products = [];
	}

	add(product) {
		this.products.push(product);
	}
	
	// 3.1. Kainą (turi būti sukuriama funkcija 
	// (turės tris argumentus pvz.: 
	// 		1 argumentas - produktai,
	// 		2 - visada bus skaičius,
	// 		3 argumentas - gali būti skaičius arba string "nuo" / "iki"),
	// 	kuri leis vartotojui nurodyti:
	//  	kainą nuo/iki (funkcja priims tis argumentus: produktų masyvas, kaina nuo, kaina iki)
	//  
	//  	arba nurodyti kainą nuo ir rodys prekes nuo tos kainos iki maksimalios galimos
	// 		arba kainą iki ir rodys prekes nuo minimalios galimos iki tos kainos kurią nurodė;
	filterBetweenPrices(from, to) {
		return this.products.filter(p => p.getPrice() >= from && p.getPrice() <= to);
	}

	orderByPrice(price, orderType) {
		if (orderType !== Shop.ORDER_BY_PRICE_ASCENDING && orderType !== Shop.ORDER_BY_PRICE_DESCENDING) {
			throw new Error('Order type not recognized');
		}

		return this.products
			.filter(p => orderType == Shop.ORDER_BY_PRICE_ASCENDING ? p.getPrice() >= price : p.getPrice() <= price)
			.sort((f, s) => orderType == Shop.ORDER_BY_PRICE_ASCENDING ? f.getPrice() - s.getPrice() : s.getPrice() - f.getPrice());
	}

	// 3.2. Kategoriją (turi būti sukuriama funkcija, kuri leis vartotjui kaip argumentą nurodyti vieną iš kategorijų ir jam atvaizduos tas prekes, kurios turi tą kategoriją);
	filterByCategory(categoryName) {
		return this.products.filter(p => p.getCategory().toLowerCase() === categoryName.toLowerCase());
	}

	// 3.3. Akcijas, kuri parodys tas prekes, kurios turi akcijinę kainą;
	fiterBySale() {
		return this.products.filter(p => p.isOnSale());
	}
}

// https://stackoverflow.com/a/32647583
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
Object.defineProperty(Shop, 'ORDER_BY_PRICE_ASCENDING', {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: false
});

// https://stackoverflow.com/a/32647583
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
Object.defineProperty(Shop, 'ORDER_BY_PRICE_DESCENDING', {
    value: 2,
    writable: false,
    enumerable: true,
    configurable: false
});