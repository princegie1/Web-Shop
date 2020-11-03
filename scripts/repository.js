var repository = (function () {
    'use strict';
    var products = [{
    id: 1,
    name: 'Nike Precision 4',
    price: 55.99,
    description: 'The Nike Precision 4 combines a racer look with a low-profile design, so you can make the most of your speed and agility during games.',
    category: 'Basketball Shoes'
    }, {
    id: 2,
    name: 'Kobe Exodus',
    price: 40,
    description: 'Nike Kobe AD is the fifth shoe in the AD line',
    category: 'Basketball Shoes'
    }, {
    id: 3,
    name: 'Kobe Mamba Focus',
    price: 50.99,
    description: 'A low-profile shoe built for quick attack.',
    category: 'Basketball Shoes'
    }, { 
    id: 4,
    name: 'Nike Kobe NXT',
    price: 56.50,
    description: 'A low-profile shoe built for quick attack.',
    category: 'Basketball Shoes'
    }, {
    id: 5,
    name: 'D-rose7',
    price: 30.50,
    description: 'hese basketball shoes honor the never-break attitude of derrick rose.',
    category: 'Basketball Shoes'
    }, {
    id: 6,
    name: 'Curry 4',
    price: 30.25,
    description: 'The Curry 4 is for the quick guard who likes a low to the ground ride with responsive cushioning, tight traction, stability and containment',
    category: 'Basketball Shoes'
    }, {
    id: 7,
    name: 'Freak 1',
    price: 59,
    description: 'The Zoom Freak 1 has the extra-responsive cushioning, forefoot stability and multi-directional traction needed to complement his freakishly athletic game.',
    category: 'Basketball Shoes'
    }, {
    id: 8,
    name: 'Kyrie 3',
    price: 60,
    description: ' Kyrie 3 Kyrie dominates the court with his lightning-quick first step and fluid playing style.',
    category: 'Basketball Shoes'
    }, {
    id: 9,
    name: 'Kyrie 2 Low',
    price: 70,
    description: 'The mesh upper of these sneakers creates just enough airflow to keep your foot cool.',
    category: 'Basketball Shoes'
    }, {
    id: 10,
    name: 'D-rose9',
    price: 55.99,
    description: 'The upper on the Rose 9 is definitely the bright spot, as adidas is using a knit upper (but not calling it Primeknit).',
    category: 'Basketball Shoes'
    }
    ];
    return {
    getTopProducts: function () {
    return [products[1], products[2], products[3]];
    },
    getProduct: function (id) {
    return products.filter(p => p.id === id)[0];
    },
    search: function (q) {
        if (q == null) {
       return [];
        } else {
        return products.filter(p => p.name.toLowerCase().indexOf(q.toLowerCase()) >= 0);
        }
    }
    };
    })();