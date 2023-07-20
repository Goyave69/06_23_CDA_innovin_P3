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
INSERT INTO wine(
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
        "Campagne",
        1999,
        "Rouge",
        "France",
        "Champagne-Ardennes",
        "variété",
        "une descripion",
        true,
        "",
        19.99
    ),
    (
        "Campagne2",
        1999,
        "Rouge",
        "France",
        "Champagne-Ardennes",
        "variété",
        "une descripion",
        false,
        "",
        19.99
    ),
    (
        "Campagne3",
        1999,
        "Rouge",
        "France",
        "Champagne-Ardennes",
        "variété",
        "une descripion",
        true,
        "",
        19.99
    );
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