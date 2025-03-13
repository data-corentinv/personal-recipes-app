export const categories = [
  {
    id: 0,
    name: 'Pizza',
    photo_url: 'https://amp.businessinsider.com/images/5c084bf7bde70f4ea53f0436-750-563.jpg'
  },
  {
    id: 1,
    name: 'Cuisine Mexicaine',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
  },
  {
    id: 2,
    name: 'Cuisine Italienne',
    photo_url:
    'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 3,
    name: 'Cookies',
    photo_url:
    'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
    id: 4,
    name: 'Boissons',
    photo_url:
    'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Tarte Tatin',
    photo_url:
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrEfT9qXicNkMkyTvw9ViC4ZOzJMsVlDyrQ26n48DcgvxxRLP3PbFr20owJ_zV4Qh-0rVY09mA5ZYBhIsQF7Pcv1J0HmXIIyX3pqFIAw'
  },
];

export const recipes = [
  {
    recipeId: 42,
    categoryId: 5,
    title: 'Tarte Tatin',
    photo_url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrEfT9qXicNkMkyTvw9ViC4ZOzJMsVlDyrQ26n48DcgvxxRLP3PbFr20owJ_zV4Qh-0rVY09mA5ZYBhIsQF7Pcv1J0HmXIIyX3pqFIAw',
    photosArray: [
     ],
    time: '5',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      '-- Préchauffer le four à 180 degrés. Eplucher et couper le pommes en quartiers.'
  },
  {
    recipeId: 5,
    categoryId: 1,
    title: 'Fajitas au Poulet',
    photo_url:
      'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Flavorful-Chicken-Fajitas_EXPS_GHBZ18_12540_B08_15_8b.jpg',
    photosArray: [
      'https://dadwithapan.com/wp-content/uploads/2015/07/Spicy-Chicken-Fajitas-22-1200x480.jpg',
      'https://3.bp.blogspot.com/-X-dHj7ORF9Q/XH4ssgTuSZI/AAAAAAAAEig/E46HP9wCfdsvyJFcMTX30cw-ICep8lF9ACHMYCw/s1600/chicken-fajitas-mexican-food-id-149559-buzzerg.jpg',
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201403-xl-chipotle-chicken-fajitas.jpg?itok=ghVcI5SQ'
    ],
    time: 35,
    ingredients: [
      [9, '1/2 cuillères à café'],
      [0, '4 cuillères à soupe'],
      [1, '1/2 cuillères à café'],
      [30, '2 cuillères à soupe'],
      [31, '1 cuillère à café'],
      [7, '1 cuillère à café'],
      [24, '1/2 cuillères à café'],
      [3, '1/2 cuillères à café'],
      [21, '1 livre'],
      [22, '1/2 tasse'],
      [27, '6'],
      [36, '4'],
      [37, '1/2'],
      [38, '1/2']
    ],
    description:
      '-- Dans un grand bol, combinez 2 cuillères à soupe d\'huile, le jus de citron et les assaisonnements ; ajoutez le poulet. Retournez pour enrober ; couvrez. Réfrigérez pendant 1-4 heures Dans une grande poêle, faites sauter les poivrons et les oignons dans l\'huile restante jusqu\'à ce qu\'ils soient tendres-croquants. Retirez et gardez au chaud. Égouttez le poulet, en jetant la marinade. Dans la même poêle, faites cuire le poulet à feu moyen-vif pendant 5-6 minutes ou jusqu\'à ce qu\'il ne soit plus rose.\n\n -- Remettez le mélange de poivrons dans la poêle ; réchauffez. Mettez la garniture au centre des tortillas ; pliez en deux. Servez avec les garnitures au choix.'
  },
  {
    recipeId: 9,
    categoryId: 1,
    title: 'Wraps au Saumon Fumé et Avocat',
    photo_url: 'https://sf1.viepratique.fr/wp-content/uploads/sites/2/2014/06/183762.jpg',
    photosArray: [
      'https://sf1.viepratique.fr/wp-content/uploads/sites/2/2014/06/183762.jpg'
    ],
    time: 15,
    ingredients: [
      [27, '1 paquet'],
      [34, '1'],
      [62, '100g'],
      [63, '2 cuillères à soupe'],
      [30, '1'],
      [64, 'quelques feuilles'],
      [32, '1 pincée'],
      [1, 'sel'],
      [4, 'poivre']
    ],
    description:
      '-- Écraser l\'avocat à la fourchette et le mélanger avec le jus de citron, une pincée de piment, du sel et du poivre.\n\n -- Étaler une fine couche de crème fraîche sur le wraps, mettre du saumon fumé sur la moitié et de l\'avocat au milieu du saumon. Sur l\'autre moitié, mettre une feuille de salade et rouler le wraps.\n\n -- Le couper en tronçon et mettre un pic pour tenir.'
  },
  {
    recipeId: 10,
    categoryId: 0,
    title: 'Toast Magret, Chèvre, Miel',
    photo_url: 'https://i.pinimg.com/736x/15/1b/7c/151b7c9638b049688ed632410f0aa75e.jpg',
    photosArray: [
      'https://i.pinimg.com/736x/15/1b/7c/151b7c9638b049688ed632410f0aa75e.jpg'
    ],
    time: 15,
    ingredients: [
      [70, '10'],
      [65, '8 tranches'],
      [66, '2'],
      [67, '1 tour de moulin'],
      [68, 'quelques gouttes'],
      [69, '1 pincée'],
      [4, '1 tour de moulin']
    ],
    description:
      '-- Préchauffez le gril du four.\n\n -- Faites griller les mini toasts.\n\n -- Étalez sur chaque toasts, 1/2 crottin coupé en deux dans le sens de la largeur (on obtient deux disques).\n\n -- Disposez dessus quelques tranches de magret de canard fumé.\n\n -- Disposez une goutte de miel.\n\n -- Un tour de moulin : 5 baies, un tour de moulin à poivre et une petite pincée de fleur de sel.\n\n -- Passez 5 min sous le gril du four.\n\n -- Servez.'
  },
  {
    recipeId: 11,
    categoryId: 0,
    title: 'Roulés au Chorizo',
    photo_url: 'https://media.ccmbg.com/tc/3982138654/308043',
    photosArray: [
      "https://media.ccmbg.com/tc/3982138654/308043"
    ],
    time: 30,
    ingredients: [
      [71, '150g'],
      [72, '100g'],
      [16, '1 gros'],
      [73, '1']
    ],
    description:
      '-- Mixez le chorizo et le gruyère.\n\n -- Ajoutez l\'oeuf battu et mélangez le tout.\n\n -- Etalez cette mixture sur la pâte feuilletée déroulée.\n\n -- Roulez la pâte sur elle-même de façon à obtenir un boudin et entreposez-le au réfrigérateur 15 minutes de manière à pouvoir le couper plus facilement.\n\n -- Après réfrigération, coupez le boudin en rondelles d\'1 cm environ, disposez-les sur une plaque recouverte de papier cuisson et enfournez dans un four préchauffé jusqu\'à ce que les rondelles soient bien dorées.\n\n -- Tout aussi bon, vous pouvez remplacer le chorizo par une bûche de chèvre émiettée (vous ne mettrez alors que 40 g de gruyère).'
  },
  {
    recipeId: 12,
    categoryId: 0,
    title: 'Rillettes de Thon',
    photo_url: 'https://i0.wp.com/www.programme-malin.com/wp-content/uploads/2022/07/Rillettes-de-thon-pour-bebe.jpg?fit=1920%2C1080&ssl=1',
    photosArray: [
      'https://i0.wp.com/www.programme-malin.com/wp-content/uploads/2022/07/Rillettes-de-thon-pour-bebe.jpg?fit=1920%2C1080&ssl=1'
    ],
    time: 15,
    ingredients: [
      [74, '1 grosse boîte'],
      [75, '1'],
      [76, '1 boîte familial'],
      [77, 'quelques gouttes'],
      [1, 'sel'],
      [30, '1']
    ],
    description:
      '-- Coupez l\'échalote en tout petits morceaux.\n\n -- Dans un grand bol, émiettez le thon et ajoutez l\'échalote.\n\n -- Arrosez avec le jus de citron, puis ajoutez le St Moret.\n\n -- Bien mélanger, versez ensuite quelques gouttes de Tabasco et salez légèrement.\n\n -- Mettre au frais pendant que vous faites griller des tartines de pain de mie que vous coupez en 4.\n\n -- Mettez des fourchettes dans le bol, et servez l\'apéro !'
  },
  {
    recipeId: 13,
    categoryId: 0,
    title: 'Petits Croissants au Saumon Fumé',
    photo_url: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3FA9A40A-BFBB-4D14-A814-116E42A16624/Derivates/e27b129b-760b-4a7c-806b-28d172855cd5.jpg',
    photosArray: [
      'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3FA9A40A-BFBB-4D14-A814-116E42A16624/Derivates/e27b129b-760b-4a7c-806b-28d172855cd5.jpg'
    ],
    time: 30,
    ingredients: [
      [73, '1'],
      [62, '4 tranches'],
      [79, '2 cuillères']
    ],
    description:
      '-- Préchauffer le four à 200°C (thermostat 6-7).\n\n -- Couper votre rond de pâte en 4, puis chaque quart en 4; ce qui fait 16 parts.\n\n -- Disposer dessus des petits morceaux de saumon fumé.\n\n -- Rouler chaque petite part en forme de petit croissant.\n\n -- Passer un petit peu de lait dessus, et mettre à four 25 min.\n\n -- Remarques : Rajouter avec le saumon de la crème fraiche, du citron et des 5 baies'
  },
  {
    recipeId: 14,
    categoryId: 0,
    title: 'Cake aux Tomates Séchées, Feta, Basilic',
    photo_url: 'https://img.over-blog-kiwi.com/1/02/97/00/20190411/ob_c4950a_p1020083.JPG',
    photosArray: [
      'https://img.over-blog-kiwi.com/1/02/97/00/20190411/ob_c4950a_p1020083.JPG'
    ],
    time: 60,
    ingredients: [
      [80, '200g'],
      [12, '180g'],
      [81, '100g'],
      [72, '50g'],
      [16, '3'],
      [79, '12 cl'],
      [0, '6 cl'],
      [82, '1 sachet'],
      [10, '1 bouquet'],
      [1, 'sel'],
      [4, 'poivre']
    ],
    description:
      '-- Préchauffer le four à 200°C (thermostat 6-7).\n\n -- Découper les tomates séchées en petits morceaux puis les égoutter.\n\n -- Couper la feta en dés.\n\n -- Ciseler le bouquet de basilic.\n\n -- Dans une terrine, déposer la farine et la levure.\n\n -- Ajouter les oeufs un par un, puis le lait et l\'huile.\n\n -- Bien mélanger pour obtenir une pâte bien lisse.\n\n -- Saler et poivrer.\n\n -- Incorporer les morceaux de tomates séchées, le gruyère râpé, le basilic ciselé, les dés de feta à la pâte.\n\n -- Mélanger de nouveau.\n\n -- Beurrer et fariner un moule à cake.\n\n -- Y verser le cake et cuire 40 minutes environ à four moyen.\n\n -- Démouler sur une grille, laisser tiédir et servir accompagné d\'une salade de tomates parsemée de basilic et arrosée d\'un filet d\'huile d\'olive ou d\'une salade verte.'
  }
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Huile',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 1,
    name: 'Sel',
    photo_url:
      'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: 2,
    name: 'Pommes de terre rousses',
    photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
  },
  {
    ingredientId: 3,
    name: 'Paprika',
    photo_url:
      'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg'
  },
  {
    ingredientId: 4,
    name: 'Poivre noir',
    photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg'
  },
  {
    ingredientId: 5,
    name: 'Sel de céleri',
    photo_url: 'https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg'
  },
  {
    ingredientId: 6,
    name: 'Sauge séchée',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png'
  },
  {
    ingredientId: 7,
    name: 'Poudre d\'ail',
    photo_url:
      'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 8,
    name: 'Poudre de quatre-épices',
    photo_url:
      'https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg'
  },
  {
    ingredientId: 9,
    name: 'Origan séché',
    photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg'
  },
  {
    ingredientId: 10,
    name: 'Basilic séché',
    photo_url: 'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png'
  },
  {
    ingredientId: 11,
    name: 'Marjolaine séchée',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
  },
  {
    ingredientId: 12,
    name: 'Farine tout usage',
    photo_url:
      'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
  },
  {
    ingredientId: 13,
    name: 'Sucre roux',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png'
  },
  {
    ingredientId: 14,
    name: 'Sel casher',
    photo_url:
      'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg'
  },
  {
    ingredientId: 15,
    name: 'Poulet entier',
    photo_url:
      'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
  },
  {
    ingredientId: 16,
    name: 'Œufs',
    photo_url:
      'https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg'
  },
  {
    ingredientId: 17,
    name: 'Quarts d\'huile neutre',
    photo_url:
      'https://images.ctfassets.net/3s5io6mnxfqz/2TkXXTDfNbL2W03eSi7T3J/ef41f82f50f4953b7ca7326eba6d5ed7/AdobeStock_126109976_2.jpeg?w=1920'
  },
  {
    ingredientId: 18,
    name: 'Eau',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg'
  },
  {
    ingredientId: 19,
    name: 'Poudre d\'oignon',
    photo_url:
      'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
  },
  {
    ingredientId: 20,
    name: 'MSG',
    photo_url:
      'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 21,
    name: 'Blanc de poulet',
    photo_url:
      'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  },
  {
    ingredientId: 22,
    name: 'Oignon haché',
    photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
  },
  {
    ingredientId: 23,
    name: 'Concentré de tomates',
    photo_url:
      'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
  },
  {
    ingredientId: 24,
    name: 'Poudre de chili',
    photo_url:
      'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 25,
    name: 'Bœuf haché',
    photo_url:
      'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
  },
  {
    ingredientId: 26,
    name: 'Haricots rouges en boîte, rincés et égouttés',
    photo_url:
      'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg'
  },
  {
    ingredientId: 27,
    name: 'Grandes tortillas',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  },
  {
    ingredientId: 28,
    name: 'Fritos',
    photo_url:
      'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  },
  {
    ingredientId: 29,
    name: 'Cheddar râpé',
    photo_url:
      'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  },
  {
    ingredientId: 30,
    name: 'Citron vert',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  },
  {
    ingredientId: 31,
    name: 'Cumin moulu',
    photo_url:
      'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
  },
  {
    ingredientId: 32,
    name: 'Poudre de piment de Cayenne',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  },
  {
    ingredientId: 33,
    name: 'Poisson blanc feuilleté',
    photo_url:
      'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
  },
  {
    ingredientId: 34,
    name: 'Avocat',
    photo_url:
      'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    ingredientId: 35,
    name: 'Flocons de piment rouge',
    photo_url:
      'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  },
  {
    ingredientId: 36,
    name: 'Oignons',
    photo_url: 'http://www.allwhitebackground.com/images/2/2650.jpg'
  },
  {
    ingredientId: 37,
    name: 'Poivron vert',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Poivron rouge',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Pâte à pizza',
    photo_url:
      'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
  },
  {
    ingredientId: 40,
    name: 'Sauce ketchup',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Sauce piquante',
    photo_url:
      'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  },
  {
    ingredientId: 42,
    name: 'Beurre',
    photo_url: 'https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg'
  },
  {
    ingredientId: 43,
    name: 'Crème épaisse',
    photo_url:
      'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 44,
    name: 'Yaourt nature entier',
    photo_url:
      'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
  },
  {
    ingredientId: 45,
    name: 'Fromage',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  },
  {
    ingredientId: 46,
    name: 'Mozzarella',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  },
  {
    ingredientId: 47,
    name: 'Branches de céleri',
    photo_url:
      'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
  },
  {
    ingredientId: 48,
    name: 'Parmesan',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  },
  {
    ingredientId: 49,
    name: 'Pancetta',
    photo_url:
      'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  },
  {
    ingredientId: 50,
    name: 'Spaghetti',
    photo_url:
      'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  },
  {
    ingredientId: 51,
    name: 'Ail',
    photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  },
  {
    ingredientId: 52,
    name: 'Nouilles à lasagnes',
    photo_url:
      'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
  },
  {
    ingredientId: 53,
    name: 'Sauce italienne',
    photo_url:
      'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
  },
  {
    ingredientId: 54,
    name: 'Tomates concassées',
    photo_url:
      'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 55,
    name: 'Sucre',
    photo_url:
      'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 56,
    name: 'Persil frais haché',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  },
  {
    ingredientId: 57,
    name: 'Ricotta',
    photo_url:
      'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  },
  {
    ingredientId: 58,
    name: 'Graines de fenouil',
    photo_url:
      'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  },
  {
    ingredientId: 59,
    name: 'Banane',
    photo_url:
      'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg'
  },
  {
    ingredientId: 60,
    name: 'Fraises surgelées',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Yaourt grec',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },
  {
    ingredientId: 62,
    name: 'Saumon fumé',
    photo_url: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    ingredientId: 63,
    name: 'Crème fraîche',
    photo_url: 'https://images-ca-1-0-1-eu.s3-eu-west-1.amazonaws.com/photos/original/1339/creme-fraiche-produit-AdobeStock_56409659.jpg'
  },
  {
    ingredientId: 64,
    name: 'Feuilles de salade',
    photo_url: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    ingredientId: 65,
    name: 'Magret de canard fumé',
    photo_url: 'https://www.le-caucase.com/wp-content/uploads/2025/02/55156_decouvrez-comment-preparer-facilement-votre-magret-de-canard-fume-et-seche-maison-1024x721.jpg'
  },
  {
    ingredientId: 66,
    name: 'Crottin de chavignol',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiY8VVHUM8AaC2Eahq9mJ4pX8cSKuIjj1A2dLDGqVwG7sbeSbOE0c7dlg&usqp=CAE&s'
  },
  {
    ingredientId: 67,
    name: 'Mélange 5 baies',
    photo_url: 'https://www.epices.com/970-large_default/melange-5-baies.jpg'
  },
  {
    ingredientId: 68,
    name: 'Miel',
    photo_url: 'https://im.qccdn.fr/node/conseils-miel-3-vertus-sante-prouvees-103256/thumbnail_800x480px-128414.jpg'
  },
  {
    ingredientId: 69,
    name: 'Fleur de sel',
    photo_url: 'https://img-3.journaldesfemmes.fr/qayMWVT3iCcw-ftKNoQJqtD-3ms=/1500x/smart/0e1771205f2a46c087209779489231e5/ccmcms-jdf/15979053.jpg'
  },
  {
    ingredientId: 70,
    name: 'Mini toasts ronds',
    photo_url: 'https://iod.keplrstatic.com/api/ar_1,c_crop,g_north/c_fill,dpr_auto,f_auto,q_70,w_750/mon_marche/74830_Pain_de_mie_toast_rond_nature.jpg'
  },
  {
    ingredientId: 71,
    name: 'Chorizo',
    photo_url: 'https://images.radio-canada.ca/q_auto,w_952/v1/alimentation/ingredient/4x3/saucisson-chorizo.jpg'
  },
  {
    ingredientId: 72,
    name: 'Gruyère râpé',
    photo_url: 'https://www.andreclaude.fr/web/wp-content/uploads/2015/12/rap%C3%A9.jpg'
  },
  {
    ingredientId: 73,
    name: 'Pâte feuilletée',
    photo_url: 'https://www.maspatule.com/blog/wp-content/uploads/2021/10/FEUILLETEE2-1440x1508.jpg'
  },
  {
    ingredientId: 74,
    name: 'Thon en boîte',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4zrq94lk_LbKtRsZ1bnL5qSX2SJwl5vC99g&s'
  },
  {
    ingredientId: 75,
    name: 'Échalote',
    photo_url: 'https://images.ctfassets.net/b85ozb2q358o/4d97cfd39683dc05cecc74dec87fd74a2e8913b193eac392a56a2d6b0c714987/645a4692adea4d629244e5f0094a3c7d/image.png'
  },
  {
    ingredientId: 76,
    name: 'St Moret',
    photo_url: 'https://dxm.dam.savencia.com/api/wedia/dam/transform/fix635d9eidk6z1kxmcn9p3ikctx5ipg1c1941a/savencia_2000_webp?t=crop&x=0.000&y=0.098&width=1.000&height=0.459&t=resize&width=2000'
  },
  {
    ingredientId: 77,
    name: 'Tabasco',
    photo_url: 'https://countrystore.tabasco.eu/cdn/shop/products/tabasco_7-min_9f4a098c-43d2-46aa-a4df-c09ec7ab675b_900x.jpg?v=1625755828'
  },
  {
    ingredientId: 78,
    name: 'Pain de mie',
    photo_url: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    ingredientId: 79,
    name: 'Lait',
    photo_url: 'https://www.nutriting.com/wp-content/uploads/2021/08/les-differents-types-de-lait-comment-les-choisir.jpg.webp'
  },
  {
    ingredientId: 80,
    name: 'Tomates séchées',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Tomates_s%C3%A9ch%C3%A9es.jpg'
  },
  {
    ingredientId: 81,
    name: 'Feta',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUmRVtL5lrO9EOv6EvLwqDsYECdVyPczGlhQ&s'
  },
  {
    ingredientId: 82,
    name: 'Levure chimique',
    photo_url: 'https://www.boulangeriemarionromain.fr/wp-content/uploads/2022/04/levure-chimique-alsa.jpg'
  }
];
