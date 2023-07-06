-- SQLBook: Code
DROP DATABASE IF EXISTS innovin;
CREATE DATABASE IF NOT EXISTS innovin;
USE innovin;
-- Création de la table "user"
DROP TABLE IF EXISTS user;
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    username VARCHAR(100),
    role VARCHAR(25),
    email VARCHAR(100),
    password VARCHAR(255),
    address VARCHAR(100),
    phone VARCHAR(10)
);
-- Création de la table "wine"
DROP TABLE IF EXISTS wine;
CREATE TABLE wine (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100),
    year INT,
    wine_type VARCHAR(10),
    origin_country VARCHAR(100),
    region VARCHAR(100),
    grape_variety VARCHAR(100),
    description TEXT,
    best_seller BOOLEAN,
    image VARCHAR(255),
    price FLOAT
);
-- Création de la table "cart"
DROP TABLE IF EXISTS cart;
CREATE TABLE cart (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    is_order BOOLEAN,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);
-- Création de la table "cart_wine"
DROP TABLE IF EXISTS cart_wine;
CREATE TABLE cart_wine (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    quantity INT,
    wine_id INT,
    cart_id INT,
    FOREIGN KEY (wine_id) REFERENCES wine(id),
    FOREIGN KEY (cart_id) REFERENCES cart(id)
);
-- Création de la table "order"
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    cart_id INT,
    order_date DATE,
    total_amount FLOAT,
    shipping_address VARCHAR(100),
    status VARCHAR(20),
    FOREIGN KEY (cart_id) REFERENCES cart(id)
);
-- Création de la table "article"
DROP TABLE IF EXISTS article;
CREATE TABLE article (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(100),
    content TEXT,
    publication_date DATE,
    author VARCHAR(50),
    category VARCHAR(50)
);
-- Fixtures / Fausses données
INSERT INTO user (
        firstname,
        lastname,
        username,
        role,
        email,
        password,
        address,
        phone
    )
VALUES (
        'John',
        'Doe',
        'johndoe',
        'user',
        'johndoe@example.com',
        'password123',
        '123 Main St',
        '1234567890'
    ),
    (
        'Jane',
        'Smith',
        'janesmith',
        'user',
        'janesmith@example.com',
        'password456',
        '456 Elm St',
        '9876543210'
    );
INSERT INTO wine (
        name,
        year,
        wine_type,
        origin_country,
        region,
        grape_variety,
        description,
        best_seller,
        image,
        price
    )
VALUES (
        'Terre des Anges, Chardonnay',
        2022,
        'White',
        'France',
        'Burgundy',
        'Chardonnay',
        "Le Chardonnay est un cépage emblématique et polyvalent qui donne naissance à des vins blancs d'une grande finesse et d\'une belle complexité. Originaire de la région de Bourgogne en France, le Chardonnay s'est répandu dans le monde entier et est aujourd'hui cultivé dans de nombreux pays viticoles.
         Le Chardonnay est apprécié pour sa capacité à refléter fidèlement le terroir où il est cultivé et les techniques de vinification utilisées. Il peut donner des vins frais et minéraux, mais aussi des vins riches et beurrés, en fonction du climat et des choix du vigneron.",
        1,
        "https://images.vivino.com/thumbs/48eow286SbuTtitSUycFdw_pb_x600.png",
        29.99
    );
INSERT INTO wine (
        name,
        year,
        wine_type,
        origin_country,
        region,
        grape_variety,
        description,
        best_seller,
        image,
        price
    )
VALUES (
        'Merlot',
        2018,
        'Red',
        'Italy',
        'Tuscany',
        'Merlot',
        "Le Merlot est l'un des cépages les plus répandus et appréciés dans le monde du vin. Originaire de la région de Bordeaux en France, le Merlot est désormais cultivé dans de nombreuses régions viticoles à travers le monde. Ce cépage donne naissance à des vins rouges caractérisés par leur douceur, leur fruité et leur souplesse. Le Merlot offre généralement des arômes de fruits rouges mûrs tels que la cerise, la prune et la mûre, ainsi que des notes subtiles d'épices, de chocolat et de tabac. Ces vins sont souvent appréciés pour leur caractère velouté et leur souplesse en bouche.",
        0,
        'https://cdn.vin.co/_clients_folder/2287PY1RJ0/LASSIQUE_MERLOT_ROUGE_SM_Detoure_1618900872_retina.png',
        24.99
    );
    INSERT INTO wine (
        name,
        year,
        wine_type,
        origin_country,
        region,
        grape_variety,
        description,
        best_seller,
        image,
        price
    )
VALUES (
        'Gamay',
        2018,
        'Red',
        'Croatie',
        'Dalmatie',
        'Gamay',
        "Le Gamay est un cépage rouge qui est principalement cultivé dans la région du Beaujolais, en France. Il produit des vins rouges légers, fruités et rafraîchissants, très appréciés des amateurs de vin.
        Le Gamay se distingue par ses arômes de fruits rouges frais tels que la cerise, la framboise et la fraise, ainsi que par des notes florales et épicées subtiles. Ces vins sont connus pour leur fraîcheur, leur acidité vive et leurs tanins souples.",
        1,
        'https://www.vins-perrier.com/medias/images/prestations/ gamay-chautagne-vin-rouge-de-savoie-perrier-718.png',
        12.99
    );
        INSERT INTO wine (
        name,
        year,
        wine_type,
        origin_country,
        region,
        grape_variety,
        description,
        best_seller,
        image,
        price
    )
VALUES (
        'Petrus',
        1968,
        'Red',
        'France',
        'Pomerol',
        'Merlot',
        "Reconnu comme étant l’un des meilleurs vins rouges au monde, le Petrus est une véritable légende. Produit dans la région de Bordeaux sur la célèbre appellation de Pomerol, son nom résonne comme une promesse d’excellence qui fascine les amateurs passionnés et les professionnels du vin.
        Réputé pour ses qualités gustatives exceptionnelles, Petrus est devenu l’un des vins les plus appréciés des Grands Crus de Bordeaux, au même titre des Grands Crus classés du Médoc, tels que Château Latour, Château Lafite-Rothschild ou encore Château Haut-Brion.",
        1,
        'https://images.vivino.com/thumbs/RPhc1fBwT0uLKoE6_mteFQ_pb_x960.png',
        7500
    );
INSERT INTO cart (is_order, user_id)
VALUES (false, 1),
    (true, 2);
INSERT INTO cart_wine (
        quantity,
        wine_id,
        cart_id
    )
VALUES (3, 1, 1),
    (2, 2, 1),
    (7, 1, 2),
    (9, 2, 2);
INSERT INTO `order` (
        cart_id,
        order_date,
        total_amount,
        shipping_address,
        status
    )
VALUES (
        1,
        '2023-06-05',
        59.98,
        '789 Oak St',
        'Pending'
    ),
    (
        2,
        '2023-06-06',
        24.99,
        '456 Pine St',
        'Shipped'
    );
INSERT INTO article (
        title,
        content,
        publication_date,
        author,
        category
    )
VALUES (
        'Introduction to Wine Tasting',
        'In this article, we explore the basics of wine tasting and the different characteristics to look for in a wine.',
        '2022-05-15',
        'John Smith',
        'Wine Tasting'
    ),
    (
        'The Art of Winemaking',
        'Learn about the intricate process of winemaking, from grape harvesting to fermentation and aging.',
        '2022-06-20',
        'Emily Johnson',
        'Winemaking'
    ),
    (
        'Exploring Popular Grape Varieties',
        'Discover the unique flavors and profiles of popular grape varieties like Cabernet Sauvignon, Chardonnay, and Merlot.',
        '2022-07-10',
        'Michael Davis',
        'Grape Varieties'
    ),
    (
        'Pairing Wine with Food',
        'Find out how to create delightful flavor combinations by pairing different types of wines with various dishes.',
        '2022-08-05',
        'Sophia Thompson',
        'Food and Wine'
    ),
    (
        'The Influence of Terroir on Wine',
        'Explore the concept of terroir and its impact on the characteristics and quality of wines.',
        '2022-09-12',
        'Daniel Wilson',
        'Terroir'
    );