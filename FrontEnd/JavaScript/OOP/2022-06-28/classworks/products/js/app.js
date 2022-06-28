const ALLOWED_CATEGORIES = ['T-shirts', 'Pants', 'Sweaters', 'Shoes'];

try {
    const shop = new Shop();

    shop.add(new Product(
        'Champion',
        39.95,
        'Shoes',
        'https://pigu.lt/lt/grozis-ir-mada/vyriski-batai-avalyne/sportbaciai/champion-vyriski-kedai-jaunt-melyni?id=52426564'
    ));

    shop.add(new Product(
        'Helly Hansen Bluza Logo Hoodie',
        79.95,
        'Sweaters',
        'https://pigu.lt/lt/dzemperiai-vyrams/helly-hansen-vyriskas-dzemperis-bluza-logo-hoodie?id=26551177'
    ));

    shop.add(new Product(
        'Helly Hansen Crew',
        44.95,
        'T-shirts',
        'https://pigu.lt/lt/vyriski-marskineliai/helly-hansen-vyriski-marskineliai-crew-melyni?id=46843739'
    ));

    shop.add(new Product(
        'Texpak',
        29.95,
        'Pants',
        'https://pigu.lt/lt/vyriski-drabuziai/vyriska-sportine-apranga/vyriskos-sportines-kelnes-texpak-tamsiai-pilkos-907167611?id=43315058'
    ));

    shop.add(new Product(
        'Vytis',
        38,
        'Pants',
        'https://pigu.lt/lt/vyriski-drabuziai/vyriska-sportine-apranga/sportinis-komplektas-vyrams-vytis-pk209546607?id=52312869'
    ));

    // console.log(shop);

    console.log('filterBetweenPrices', shop.filterBetweenPrices(30, 50));
    console.log('orderByPrice ASCENDING', shop.orderByPrice(30, Shop.ORDER_BY_PRICE_ASCENDING));
    console.log('orderByPrice DESCENDING', shop.orderByPrice(40, Shop.ORDER_BY_PRICE_DESCENDING));
    // console.log(shop.orderByPrice(40, 2));
    // console.log(shop.orderByPrice(40, 'asdas'));
    console.log('fiterBySale', shop.fiterBySale());
    console.log('filterByCategory "Pants"', shop.filterByCategory('Pants'));
} catch (err) {
    console.warn(err.message);
}