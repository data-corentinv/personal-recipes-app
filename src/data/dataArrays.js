export const categories = [
  {
    id: 0,
    name: 'Entrées',
    photo_url: 'https://img-3.journaldesfemmes.fr/QSklP4463zLxb8QZkNlBX-bwuRE=/1240x/smart/ce000e509d6f47bea19ce36d6a676b99/ccmcms-jdf/40003697.jpg'
  },
  {
    id: 1,
    name: 'Plats Principaux',
    photo_url: 'https://www.1001recettes.net/wp-content/uploads/2025/02/1739491756-plat-principal-comment-choisir-ses-ingredients-bio-1024x585.jpg'
  },
  {
    id: 2,
    name: 'Cuisine du Monde',
    photo_url: 'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 3,
    name: 'Desserts',
    photo_url: 'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
    id: 4,
    name: 'Boissons',
    photo_url: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Apéritifs',
    photo_url: 'https://huiles-et-olives.fr/wp-content/uploads/2023/12/huiles-et-olives-aperitif-de-fetes.jpg'
  }
];

export const recipes = [
  {
    recipeId: 5,
    categoryId: 2,
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
    recipeId: 15,
    categoryId: 5,
    title: 'Verrines Saumon, Mangue',
    photo_url: 'https://img.over-blog-kiwi.com/0/98/06/52/20140615/ob_1b0b1d_verrine-saumon-mangue3.jpg',
    photosArray: [
      'https://img.over-blog-kiwi.com/0/98/06/52/20140615/ob_1b0b1d_verrine-saumon-mangue3.jpg'
    ],
    time: 30,
    ingredients: [
      [62, '3 tranches'],
      [34, '2'],
      [83, '200g'],
      [30, '1'],
      [84, '20cl'],
      [85, '5 brins'],
      [86, '1 cuillère à soupe'],
      [1, 'sel']
    ],
    description:
      '-- Presser le citron pour en récupérer le jus.\n\n -- Couper les avocats en petits cubes arroser d\'une cuillère à soupe de jus de citron pour ne pas qu\'ils noircissent. Réserver.\n\n -- Couper le saumon en petites lamelles, arroser également d\'1 ou 2 cuillères à soupe de jus de citron selon vos goûts.\n\n -- Couper les mangues en petits cubes (préalablement décongelées et égouttées le cas échéant). Saler.\n\n -- Dans un bol, mélanger la crème, la ciboulette hachée, 1 cuillère à soupe de jus de citron. Saler.\n\n -- Disposer les 12 petits verres (type shooters ou verres à tequila) dans le plat de service.\n\n -- Remplir à un tiers le fond de chaque verre avec la mangue puis un tiers de saumon et enfin un tiers d\'avocat.\n\n -- Recouvrir d\'une cuillère à café de la sauce à la ciboulette.\n\n -- Enfin, pour décorer saupoudrer de paprika et éventuellement d\'un brin de ciboulette.'
  },
  {
    recipeId: 9,
    categoryId: 0,
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
    categoryId: 5,
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
    categoryId: 5,
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
    categoryId: 5,
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
    categoryId: 5,
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
  },
  {
    recipeId: 16,
    categoryId: 1,
    title: 'Chili con Carne',
    photo_url: 'https://assets.afcdn.com/recipe/20211222/126214_w1024h1024c1cx1124cy721cxt0cyt0cxb2119cyb1415.jpg',
    photosArray: [
      'https://assets.afcdn.com/recipe/20211222/126214_w1024h1024c1cx1124cy721cxt0cyt0cxb2119cyb1415.jpg'
    ],
    time: 60,
    ingredients: [
      [42, '50g'],
      [36, '2 gros'],
      [51, '2 gousses'],
      [25, '500g'],
      [24, '1 cuillère à café'],
      [31, '2 cuillères à café'],
      [23, '65g'],
      [26, '1 grosse boîte'],
      [87, '30cl'],
      [1, 'sel'],
      [4, 'poivre'],
      [56, 'pour décorer']
    ],
    description:
      '-- Préchauffer le four à 180°C (thermostat 6).\n\n -- Hacher l\'oignon et l\'ail.\n\n -- Dans une cocotte en fonte, faire fondre le beurre, et ensuite dorer doucement l\'oignon et l\'ail.\n\n -- Incorporer le boeuf haché et laisser cuire doucement 10 min.\n\n -- Mélanger le chili, le cumin, le concentré de tomates, et incorporer le tout au boeuf. Ajouter les haricots, le bouillon, du sel et du poivre.\n\n -- Couvrir et cuire 25 min au four.\n\n -- Remarques : Si vous ne trouvez pas de Chili, vous pouvez utiliser une petite cuillère à café de poivre de Cayenne. Au moment de mettre au four, vérifiez que le bouillon arrive au raz de la préparation, au besoin, rajoutez un peu d\'eau.'
  },
  {
    recipeId: 17,
    categoryId: 7,
    title: 'Lasagne de Chantal',
    photo_url: 'https://www.cuisineactuelle.fr/imgre/fit/~1~cac~2018~09~25~57db1393-fe3d-41f3-9a0d-77e29f57be79.jpeg/650x365/quality/80/crop-from/center/lasagnes-a-la-viande-de-boeuf-hachee.jpeg',
    photosArray: [
      'https://www.cuisineactuelle.fr/imgre/fit/~1~cac~2018~09~25~57db1393-fe3d-41f3-9a0d-77e29f57be79.jpeg/650x365/quality/80/crop-from/center/lasagnes-a-la-viande-de-boeuf-hachee.jpeg'
    ],
    time: 90,
    ingredients: [
      [25, '700g'],
      [88, '1'],
      [47, '1 petit bâton'],
      [36, '1'],
      [51, '2 gousses'],
      [56, '1 bouquet'],
      [54, '1 bonne boîte'],
      [1, 'sel'],
      [4, 'poivre'],
      [42, '75g'],
      [12, 'farine'],
      [79, '1L'],
      [52, '1 paquet']
    ],
    description:
      '-- Faire mijoter la viande 10 minutes\n\n -- Saler poivrer\n\n -- Rajouter les légumes à mijoter (céleri, carotte, oignons, ail, persil) 5-10 minutes\n\n -- Incorporer le coulis et la pulpe de tomate et laisser mijoter 30 minutes\n\n -- Faire la béchamel (75g de beurre – farine- 1l de lait- poivre - sel)\n\n -- Cuire les pates – rincer à l\'eau froide\n\n -- Dresser : Béchamel – 1 plaques de pates – béchamel – parmesan – viande – béchamel – pates – béchamel – viande - béchamel pates – gruyère - béchamel\n\n -- 30 min à 180°'
  },
  {
    recipeId: 18,
    categoryId: 1,
    title: 'Tartiflette',
    photo_url: 'https://assets.afcdn.com/recipe/20160401/38946_w1024h768c1cx2690cy1793.webp',
    photosArray: [
      'https://assets.afcdn.com/recipe/20160401/38946_w1024h768c1cx2690cy1793.webp'
    ],
    time: 45,
    ingredients: [
      [2, '1kg'],
      [89, '200g'],
      [36, '200g'],
      [90, '1'],
      [0, '2 cuillères à soupe'],
      [51, '1 gousse'],
      [1, 'sel'],
      [4, 'poivre']
    ],
    description:
      '-- Eplucher les pommes de terre, les couper en dés, bien les rincer et les essuyer dans un torchon propre.\n\n -- Faire chauffer l\'huile dans une poêle, y faire fondre les oignons.\n\n -- Lorsque les oignons sont fondus, ajouter les pommes de terre et les faire dorer de tous les côtés.\n\n -- Lorsqu\'elles sont dorées, ajouter les lardons et finir de cuire.\n\n -- D\'autre part, gratter la croûte du reblochon et le couper en deux (ou en quatre).\n\n -- Préchauffer le four à 200°C (thermostat 6-7) et préparer un plat à gratin en frottant le fond et les bords avec la gousse d\'ail épluchée.\n\n -- Dans le plat à gratin, étaler une couche de pommes de terre aux lardons, disposer dessus la moitié du reblochon, puis de nouveau des pommes de terre. Terminer avec le reste du reblochon (croûte vers les pommes de terre).\n\n -- Enfourner pour environ 20 minutes de cuisson.'
  },
  {
    recipeId: 19,
    categoryId: 1,
    title: 'Endives au Jambon',
    photo_url: 'https://resize.elle.fr/original/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/endives-au-jambon-thermomix-3680660/86963081-1-fre-FR/Endives-au-jambon-Thermomix.jpg',
    photosArray: [
      'https://resize.elle.fr/original/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/endives-au-jambon-thermomix-3680660/86963081-1-fre-FR/Endives-au-jambon-Thermomix.jpg'
    ],
    time: 60,
    ingredients: [
      [91, '4'],
      [92, '4 tranches'],
      [12, '40g'],
      [42, '40g'],
      [79, '60cl'],
      [1, 'sel'],
      [4, 'poivre'],
      [93, 'pincée']
    ],
    description:
      '-- Préparez une grande quantité de sauce béchamel. N\'hésitez pas sur le noix de muscade en assaisonnant.\n\n -- Enroulez chaque chicon dans une tranche de jambon et disposez-les dans le plat. Prévoyez 2 chicons par personne.\n\n -- Remplissez le plat avec la sauce.\n\n -- Saupoudrez de gruyère râpé.\n\n -- Hop au four 180°C pendant 45 min.\n\n -- Servez avec une purée maison éventuellement gratinée elle aussi.'
  },
  {
    recipeId: 20,
    categoryId: 1,
    title: 'Carbonnade Flamande',
    photo_url: 'https://lecoupdegrace.ca/app/uploads/2019/01/carbonnade-flamande-inpage.jpg',
    photosArray: [
      'https://lecoupdegrace.ca/app/uploads/2019/01/carbonnade-flamande-inpage.jpg'
    ],
    time: 240,
    ingredients: [
      [94, '1kg'],
      [95, '2 cuillères à soupe'],
      [96, '1'],
      [97, '1L'],
      [36, '400g'],
      [89, '250g'],
      [98, '7 tranches'],
      [42, '30g'],
      [1, 'sel de Guérande'],
      [99, '3 cuillères à soupe']
    ],
    description:
      '-- Couper la viande en cubes de 2 à 3 centimètres de côté.\n\n -- Découper grossièrement les oignons et couper le lard en gros lardons.\n\n -- Faire fondre le beurre et faire suer les oignons dedans 10 minutes pour les ramollir (feu au mini à couvert).\n\n -- Ajouter le lard en augmentant légèrement le feu, remuer régulièrement en essayant de garder couvert le plus possible.\n\n -- Une fois le lard bien rose, retirer le tout (sauf le jus) et le réserver dans un plat.\n\n -- Mettre le feu au maxi et mettre la viande dans la cocotte, remuer régulièrement (ne pas couvrir), la viande doit se colorer de tous les côtés.\n\n -- Diluer la cassonade dans le jus de viande et mettre sur le feu à fond pour le réduire de moitié.\n\n -- Une fois réduit, mettre le feu au mini et remettre le mélange lard-oignons, ajouter la viande, le bouquet garni et recouvrir de bière.\n\n -- Recouvrir avec le pain d\'épices moutardé. Laisser mijoter 3 heures.\n\n -- L\'idéal est de préparer la veille et de faire mijoter en 2 fois.'
  },
  {
    recipeId: 21,
    categoryId: 1,
    title: 'Lasagne aux Saint-Jacques',
    photo_url: 'https://resize.elle.fr/portrait_1280/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/lasagne-st-jacques-crevettes-graines-de-fenouil-et-huile-de-pistache-2030494/7463085-1-fre-FR/Lasagne-st-jacques-crevettes-graines-de-fenouil-et-huile-de-pistache.jpg',
    photosArray: [
      'https://resize.elle.fr/portrait_1280/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/lasagne-st-jacques-crevettes-graines-de-fenouil-et-huile-de-pistache-2030494/7463085-1-fre-FR/Lasagne-st-jacques-crevettes-graines-de-fenouil-et-huile-de-pistache.jpg',
      'https://b2292119.smushcdn.com/2292119/wp-content/uploads/2022/11/boblechef-recette-lasagne-st-jacques-04-1024x768.jpg?lossy=2&strip=1&webp=1'
    ],
    time: 60,
    ingredients: [
      [100, '250g'],
      [101, '250g'],
      [0, '3 cuillères à soupe'],
      [36, '4 cuillères à soupe'],
      [51, '1'],
      [56, '1 cuillère à soupe'],
      [52, '1 paquet'],
      [1, 'sel'],
      [4, 'poivre'],
      [42, '50g'],
      [12, '50g'],
      [79, '60cl'],
      [93, '1 pincée']
    ],
    description:
      '-- Dans une sauteuse, faites revenir l\'oignon à feu moyen dans l\'huile jusqu\'à ce qu\'il soit tendre et doré. Ajoutez l\'ail et le persil, et laissez cuire 1 minute.\n\n -- Augmentez légèrement le feu, puis incorporez les noix de saint Jacques. Lorsque l\'eau s\'est évaporée, ajoutez les crevettes. Assaisonnez et poursuivez la cuisson 2-3 minutes.\n\n -- Préparez la sauce béchamel.\n\n -- Faites cuire les pâtes à lasagne al dente.\n\n -- Préchauffez le four à 200°C.\n\n -- Montez les lasagnes en alternant pâtes, béchamel et mélange fruits de mer.\n\n -- Enfournez 15-20 minutes jusqu\'à obtention d\'une légère croûte dorée.\n\n -- Laissez reposer 10 minutes avant de servir.'
  },
  {
    recipeId: 22,
    categoryId: 3,
    title: 'Tiramisu aux Framboises',
    photo_url: 'https://media.ccmbg.com/tc/6004177366/311398/1613493243',
    photosArray: [
      'https://media.ccmbg.com/tc/6004177366/311398/1613493243'
    ],
    time: 75,
    ingredients: [
      [102, '500g'],
      [103, '500g'],
      [16, '4'],
      [104, '150g'],
      [105, '1 cuillère à café'],
      [55, '50g'],
      [106, '18']
    ],
    description:
      '-- Dans une casserole, faites bouillir 100g de framboises avec le sucre en poudre et 15cl d\'eau durant 5 min.\n\n -- Séparez les jaunes d\'œufs des blancs, gardez 2 blancs.\n\n -- Battez les jaunes et le sucre glace, ajoutez la vanille et le mascarpone et fouettez.\n\n -- Montez les blancs en neige et incorporez-les à la crème.\n\n -- Répartissez la moitié de celle-ci dans 6 verres.\n\n -- Trempez les boudoirs dans le sirop de framboise, disposez-les sur la crème, ajoutez une couche de framboise, le reste de la crème et terminez par les framboises.\n\n -- 1h au réfrigérateur avant de servir.'
  },
  {
    recipeId: 23,
    categoryId: 3,
    title: 'Gâteau au Chocolat',
    photo_url: 'https://assets.afcdn.com/recipe/20190529/93153_w1024h768c1cx2736cy1824.webp',
    photosArray: [
      'https://assets.afcdn.com/recipe/20190529/93153_w1024h768c1cx2736cy1824.webp'
    ],
    time: 35,
    ingredients: [
      [107, '200g'],
      [16, '4'],
      [55, '150g'],
      [12, '80g'],
      [42, '200g']
    ],
    description:
      '-- Faites fondre le chocolat, ajoutez le beurre, mélangez.\n\n -- Mélangez les œufs et le sucre puis la farine.\n\n -- Versez le chocolat fondu puis mélangez.\n\n -- Faites cuire pendant 25 min à 200°C.'
  },
  {
    recipeId: 24,
    categoryId: 3,
    title: 'Cake aux Framboises',
    photo_url: 'https://www.rustica.fr/images/cake-aux-framboises-shutterstock-l790-h526.jpg.webp',
    photosArray: [
      'https://www.rustica.fr/images/cake-aux-framboises-shutterstock-l790-h526.jpg.webp'
    ],
    time: 60,
    ingredients: [
      [16, '3'],
      [42, '150g'],
      [55, '150g'],
      [108, '1 cuillère à café'],
      [12, '190g'],
      [82, '1/2 sachet'],
      [1, '1/2 cuillère à café'],
      [103, '200g'],
      [109, '2 cuillères à soupe']
    ],
    description:
      '-- Fouettez le beurre et le sucre en mousse.\n\n -- Ajoutez les oeufs, un par un, puis la vanille, tout en continuant de fouetter.\n\n -- Incorporez la farine tamisée avec la levure et le sel.\n\n -- Versez une mince de couche de pâte dans un moule à cake ; disposez des framboises dessus ; puis, remettez une couche de pâte et à nouveau des framboises ; procédez ainsi, jusqu\'à épuisement des ingrédients.\n\n -- Faites cuire votre cake aux framboises, 40 à 45 min, à 180°C.\n\n -- A la fin de la cuisson, sortez votre cake du four et arrosez-le de l\'alcool de framboise.\n\n -- Patientez 15 min, puis démoulez le cake aux framboises sur une grille et laissez-le refroidir entièrement.'
  },
  {
    recipeId: 25,
    categoryId: 3,
    title: 'Cake Marbré Ultra Moelleux',
    photo_url: 'https://rockthebretzel.com/wp-content/uploads/2020/03/Gateau-marbre47-scaled-2.jpg',
    photosArray: [
      'https://i.ytimg.com/vi/or_aqB-gp1o/sddefault.jpg',
      'https://rockthebretzel.com/wp-content/uploads/2020/03/Gateau-marbre47-scaled-2.jpg'
    ],
    time: 45,
    ingredients: [
      [16, '5'],
      [12, '125g'],
      [42, '125g'],
      [55, '125g'],
      [110, '1 sachet'],
      [107, '125g'],
      [82, '1 sachet']
    ],
    description:
      '-- Préchauffer le four à 180°C. Séparer les blancs des jaunes de 4 oeufs. Battre les jaunes avec le sucre jusqu\'à ce que le mélange blanchisse.\n\n -- Ajouter l\'oeuf entier au mélange, bien mélanger, puis incorporer le beurre fondu et la farine tamisée/le sachet de levure.\n\n -- Séparer la pâte dans deux récipients : -Dans l\'un, ajouter le sucre vanillé -Dans l\'autre ajouter le chocolat fondu au bain-marie.\n\n -- Monter les blancs en neige puis les incorporer équitablement aux 2 préparations. Il faut le faire délicatement sans casser les blancs de façon à ce que la préparation garde une texture mousseuse.\n\n -- Beurrer un moule à cake. Verser successivement une couche de pâte blanche, une couche de pâte au chocolat, une couche de pâte blanche, une couche de pate au chocolat, etc.\n\n -- Enfournez pour 35 minutes environ. Pour vérifier la cuisson, enfoncer la pointe d\'un couteau. Retirez le cake dès quelle ressort propre.\n\n -- Laissez refroidir, dégustez!'
  },
  {
    recipeId: 26,
    categoryId: 3,
    title: 'Fraisier Express',
    photo_url: 'https://www.vanessacuisine.fr/wp-content/uploads/2022/05/Fraisier-grande-verrine-500x500.jpg',
    photosArray: [
      'https://www.google.com/imgres?q=fraisier%20express&imgurl=https%3A%2F%2Fwww.cuisineactuelle.fr%2Fimgre%2Ffit%2F~1~cac~2021~01~29~fb020e02-0915-451b-ac4f-360213da3479.jpeg%2F650x365%2Fquality%2F80%2Fcrop-from%2Fcenter%2Ffraisier-express.jpeg&imgrefurl=https%3A%2F%2Fwww.cuisineactuelle.fr%2Frecettes%2Ffraisier-express-211059&docid=NETtmJjW3_Gf-M&tbnid=vhMycOKz46CMcM&vet=12ahUKEwj2i7KQ7oeMAxU-U6QEHR8RFJ0QM3oECHIQAA..i&w=650&h=365&hcb=2&itg=1&ved=2ahUKEwj2i7KQ7oeMAxU-U6QEHR8RFJ0QM3oECHIQAA',
      'https://www.vanessacuisine.fr/wp-content/uploads/2022/05/Fraisier-grande-verrine-500x500.jpg'
    ],
    time: 240,
    ingredients: [
      [60, '250g'],
      [111, '275g'],
      [102, '250g'],
      [16, '2'],
      [55, '80g'],
      [110, '1 sachet'],
      [112, '8 cuillères à soupe'],
      [113, '2 cuillères à soupe'],
      [114, '2 brins']
    ],
    description:
      '-- Mélangez le sirop et le rhum. Tapissez un plat carré ou rectangulaire de film étirable.\n\n -- Fouettez les jaunes d\'œufs, le sucre et le sucre vanillé avec un batteur électrique jusqu\'à ce que le mélange blanchisse, puis ajoutez le mascarpone en fouettant à petite vitesse.\n\n -- Passez les fraises sous l\'eau froide, égouttez-les, équeutez-les et coupez-les en deux.\n\n -- Trempez les biscuits 1 seconde dans le sirop au rhum, disposez une première couche dans le fond du plat, étalez une couche de crème, une couche de fraises en mettant le coté coupé à plat sur la crème, encore une couche de crème et terminez par une couche de biscuits, trempés de la même façon dans le sirop.\n\n -- Rabattez le film sur les biscuits, appuyez légèrement dessus pour les enfoncer dans la crème et mettez au frais 4 heures.'
  },
  {
    recipeId: 27,
    categoryId: 3,
    title: 'Roulée à la Confiture',
    photo_url: 'https://assets.afcdn.com/recipe/20160404/19895_w1024h1024c1cx1500cy1110.jpg',
    photosArray: [
      'https://assets.afcdn.com/recipe/20160404/19895_w1024h1024c1cx1500cy1110.jpg'
    ],
    time: 25,
    ingredients: [
      [16, '4'],
      [55, '125g'],
      [12, '125g'],
      [110, '2 sachets'],
      [82, '1 cuillère à café'],
      [42, '15g'],
      [115, '1 pot'],
      [104, 'pour saupoudrer']
    ],
    description:
      '-- Préchauffez le four à 210°C (thermostat 7).\n\n -- Cassez les oeufs, en séparant les blancs des jaunes.\n\n -- Dans un saladier, mélangez les jaunes avec le sucre.\n\n -- Ajoutez petit à petit la farine tamisée, le sucre vanillé et la levure.\n\n -- Battez les blancs en neige, puis incorporez-les au mélange précédent.\n\n -- Tapissez la plaque du four de papier alu bien beurré, et versez ensuite la pâte dessus.\n\n -- Enfournez pour 10 min de cuisson.\n\n -- Une fois la cuisson terminée, roulez le biscuit immédiatement avec le papier sulfurisé.\n\n -- Laissez refroidir, puis déroulez, et retirez le papier.\n\n -- Etalez la confiture sur la pâte, et roulez-le à nouveau, puis saupoudrez de sucre glace.'
  },
  {
    recipeId: 28,
    categoryId: 3,
    title: 'Gaufres à l\'Ancienne',
    photo_url: 'https://kabiloutte.fr/wp-content/uploads/2019/03/gaufre-kabiloutte.jpg',
    photosArray: [
      'https://kabiloutte.fr/wp-content/uploads/2019/03/gaufre-kabiloutte.jpg'
    ],
    time: 45,
    ingredients: [
      [12, '250g'],
      [1, '1 cuillère à café'],
      [16, '4'],
      [42, '75g'],
      [82, '1 sachet'],
      [79, '150ml'],
      [18, '150ml'],
      [55, '60g'],
      [110, '2 sachets'],
      [0, '1 cuillère à soupe'],
      [113, '2 cuillères à soupe']
    ],
    description:
      '-- Mélangez la farine et le sel, faites un puit au centre et cassez-y les oeufs.\n\n -- Ajoutez le beurre fondu, le lait et l\'eau. Fouettez avec un fouet manuel ou électrique.\n\n -- Ajoutez le sucre, le sucre vanillé, l\'huile, la levure et éventuellement le rhum. Fouettez de nouveau. La pâte doit être liquide et fluide. Dans le cas contraire, rajoutez de l\'eau.\n\n -- Laissez reposer 30 minutes minimum.\n\n -- Versez la pâte dans les moules du gaufrier préalablement huilés.\n\n -- Faites cuire 3 minutes environ en retournant le gaufrier à mi-cuisson.\n\n -- Mangez ces gaufres saupoudrées de sucre glace, avec de la confiture, du nutella, du sirop d\'érable...'
  },
  {
    recipeId: 29,
    categoryId: 3,
    title: 'Tarte aux Pommes de Chantal',
    photo_url: 'https://fac.img.pmdstatic.net/fit/~1~fac~2021~04~07~2139ac35-a5f8-4cdc-93fe-279a3f19efc4.jpeg/970x545/quality/80/crop-from/center/la-tarte-aux-pommes-a-la-normande-de-ma-grand-mere.jpeg',
    photosArray: [
      'https://fac.img.pmdstatic.net/fit/~1~fac~2021~04~07~2139ac35-a5f8-4cdc-93fe-279a3f19efc4.jpeg/970x545/quality/80/crop-from/center/la-tarte-aux-pommes-a-la-normande-de-ma-grand-mere.jpeg'
    ],
    time: 45,
    ingredients: [
      [116, '5'],
      [55, '80g'],
      [42, '50g'],
      [16, '2'],
      [73, '1']
    ],
    description:
      '-- Préchauffez le four à 180°C.\n\n -- Étalez la pâte feuilletée dans un moule à tarte.\n\n -- Épluchez et coupez les pommes en fines tranches.\n\n -- Disposez les pommes en rosace sur la pâte.\n\n -- Saupoudrez de sucre et parsemez de petits morceaux de beurre.\n\n -- Battez les œufs et versez sur les pommes.\n\n -- Enfournez pour 30-35 minutes jusqu\'à ce que la tarte soit dorée.'
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
    photo_url: 'https://im.qccdn.fr/node/guide-d-achat-quelle-eau-boire-4855/thumbnail_800x480px-121326.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Tomato_pur%C3%A9e_in_cans_-_multilingual.jpg/1200px-Tomato_pur%C3%A9e_in_cans_-_multilingual.jpg'
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
      'https://cache.marieclaire.fr/data/photo/w750_c17/cuisine/3y/haricotvins.jpg'
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
    photo_url: 'https://www.academiedugout.fr/images/15721/1200-auto/fotolia_55631648_subscription_xl-copy.jpg?poix=50&poiy=50'
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
    photo_url: 'https://img-3.journaldesfemmes.fr/wL8YsmuUZnKQprYtJFg0isTvxzY=/1500x/smart/432c5298182d45818c7a1b140e6b21f1/ccmcms-jdf/10662027.jpg'
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
      'https://www.gemuese.ch/media/bgihmymg/stangensellerie_010919.png?width=720&height=720&format=png&quality=80'
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
      'https://www.mgc-prevention.fr/wp-content/uploads/2014/12/fraise_165452462_web.jpg'
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
  },
  {
    ingredientId: 83,
    name: 'Mangue',
    photo_url: 'https://cdn.futura-sciences.com/sources/mangue-opti.jpeg'
  },
  {
    ingredientId: 84,
    name: 'Crème fraîche liquide',
    photo_url: 'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 85,
    name: 'Ciboulette',
    photo_url: 'https://www.rustica.fr/images/ciboulette-recolte-coupe.jpg'
  },
  {
    ingredientId: 86,
    name: 'Paprika',
    photo_url: 'https://media.istockphoto.com/id/1131655709/fr/photo/paprika-moulu-dans-un-bol.jpg?s=612x612&w=0&k=20&c=SProoTqBlUyBpYXGBfU9EbpMwJBigYpOhBgaJBfUEz0='
  },
  {
    ingredientId: 87,
    name: 'Bouillon de boeuf',
    photo_url: 'https://assets.unileversolutions.com/v1/88931366.png'
  },
  {
    ingredientId: 88,
    name: 'Carotte',
    photo_url: 'https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/1-2-700x700.png'
  },
  {
    ingredientId: 89,
    name: 'Lardons fumés',
    photo_url: 'https://static.wixstatic.com/media/5a295f_d82c9413e614483b8c8fbab47abae43d~mv2.jpg/v1/fill/w_480,h_372,al_c,lg_1,q_80,enc_avif,quality_auto/5a295f_d82c9413e614483b8c8fbab47abae43d~mv2.jpg'
  },
  {
    ingredientId: 90,
    name: 'Reblochon',
    photo_url: 'https://www.viandeetvolaille.com/pub/planches_noel_2019/937828_reblochon.jpg'
  },
  {
    ingredientId: 91,
    name: 'Endives',
    photo_url: 'https://resize.elle.fr/original/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/poelee-d-endives-aux-gambas-et-pommes-fruits-2075202/21943082-3-fre-FR/Poelee-d-endives-aux-gambas-et-pommes-fruits.jpg'
  },
  {
    ingredientId: 92,
    name: 'Jambon blanc',
    photo_url: 'https://im.qccdn.fr/node/guide-d-achat-jambon-blanc-3979/thumbnail_1000x600px-119710.jpg'
  },
  {
    ingredientId: 93,
    name: 'Muscade',
    photo_url: 'https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/4/4/0/4409f85248_114028_05-858.jpg'
  },
  {
    ingredientId: 94,
    name: 'Boeuf à braiser',
    photo_url: 'https://www.lafermeduvivier.com/75-large_default/boeuf-a-braiser.jpg'
  },
  {
    ingredientId: 95,
    name: 'Cassonade',
    photo_url: 'https://img.cuisineaz.com/1024x768/2019/06/18/i147661-cassonade.jpeg'
  },
  {
    ingredientId: 96,
    name: 'Bouquet garni',
    photo_url: 'https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_600,q_auto,w_800/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/10331/Bouquet_garni_wikimedia.jpg'
  },
  {
    ingredientId: 97,
    name: 'Bière brune',
    photo_url: 'https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/elle-a-table/les-dossiers-de-la-redaction/dossier-de-la-redac/calories-alcool/combien-de-calories-dans-la-biere-brune/78807128-1-fre-FR/Combien-de-calories-dans-la-biere-brune.jpg'
  },
  {
    ingredientId: 98,
    name: 'Pain d\'épices',
    photo_url: 'https://assets.afcdn.com/recipe/20221011/135945_w1024h768c1cx1060cy707cxt115cyt94cxb2045cyb1326.jpg'
  },
  {
    ingredientId: 99,
    name: 'Moutarde',
    photo_url: 'https://cache.marieclaire.fr/data/photo/w1000_ci/1bi/moutarde.jpg'
  },
  {
    ingredientId: 100,
    name: 'Noix de Saint-Jacques',
    photo_url: 'https://assets.afcdn.com/recipe/20221011/135946_w1024h768c1cx1060cy707cxt0cyt194cxb2121cyb1414.jpg'
  },
  {
    ingredientId: 101,
    name: 'Crevettes crues',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgc_nj0Kc-gAFx3A2Hb4OgXckJQDrhkqmdfQ&s'
  },
  {
    ingredientId: 102,
    name: 'Mascarpone',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Mascarpone_preparato_in_casa.jpg/1200px-Mascarpone_preparato_in_casa.jpg'
  },
  {
    ingredientId: 103,
    name: 'Framboises',
    photo_url: 'https://img-3.journaldesfemmes.fr/BZs54b5UBRJQ8wcQ3EYGrM91ZTs=/1500x/smart/45768007f10e4e269b3f7901e339a1f4/ccmcms-jdf/25039199.jpg'
  },
  {
    ingredientId: 104,
    name: 'Sucre glacé',
    photo_url: 'https://img-3.journaldesfemmes.fr/Xy1Xd0eqyAlU2wA4w8NMMsTPFaE=/1500x/smart/a1ca4d9f78744a93a3652c50ee45a440/ccmcms-jdf/16212262.jpg'
  },
  {
    ingredientId: 105,
    name: 'Vanille en poudre',
    photo_url: 'https://www.academiedugout.fr/images/15898/1200-auto/vanille-en-poudre_000.jpg?poix=50&poiy=50'
  },
  {
    ingredientId: 106,
    name: 'Boudoirs',
    photo_url: 'https://www.academiedugout.fr/images/15898/1200-auto/boudoirs_000.jpg?poix=50&poiy=50'
  },
  {
    ingredientId: 107,
    name: 'Chocolat noir',
    photo_url: 'https://www.salon-du-chocolat.com/wp-content/uploads/2021/01/Sans-titre-40.png'
  },
  {
    ingredientId: 108,
    name: 'Vanille liquide',
    photo_url: 'https://ileauxepices.com/blog/wp-content/uploads/2018/07/extrait-de-vanille.jpg'
  },
  {
    ingredientId: 109,
    name: 'Liqueur de framboise',
    photo_url: 'https://lachanenche.com/cdn/shop/files/framboise-70_4256f2ad-5719-43cb-a59f-bf9072f4963b_1000x1000.jpg?v=1706265857'
  },
  {
    ingredientId: 110,
    name: 'Sucre vanillé',
    photo_url: 'https://d1e3z2jco40k3v.cloudfront.net/-/media/vah18/produits/800x800/sucre_vanille_800.png?rev=721a12870bef4a948f7b5154d8c39792&vd=20230227T161541Z&extension=webp&hash=6C3F03937FDCE003C2567C639C0B481A'
  },
  {
    ingredientId: 111,
    name: 'Biscuits roses de Reims',
    photo_url: 'https://assets.afcdn.com/recipe/20220224/129383_w1024h1024c1cx708cy1058cxt0cyt0cxb1416cyb2116.jpg'
  },
  {
    ingredientId: 112,
    name: 'Sirop de canne',
    photo_url: 'https://www.cultures-sucre.com/Medias/article/extraction-sucre-de-canne-936x572@c141f6a7-a41f-4c91-98c0-14d12a5632a3.jpeg'
  },
  {
    ingredientId: 113,
    name: 'Rhum blanc',
    photo_url: 'https://www.laroutedesrhums.com/1034-large_default/saint-james-rhum-blanc-50-100cl.jpg'
  },
  {
    ingredientId: 114,
    name: 'Menthe',
    photo_url: 'https://soriavie.fr/wp-content/uploads/menthe-poivree.jpeg'
  },
  {
    ingredientId: 115,
    name: 'Confiture',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6rEEI2A_uhRFOuiNUA3hS13Dyel4YEs7YLQ&s'
  },
  {
    ingredientId: 116,
    name: 'Pommes',
    photo_url: 'https://www.nutriting.com/wp-content/uploads/2023/06/pomme-bienfaits-1024x1024.jpg'
  }
];
