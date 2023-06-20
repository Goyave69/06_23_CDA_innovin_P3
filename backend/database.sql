DROP DATABASE IF EXISTS innovin;
CREATE DATABASE IF NOT EXISTS innovin;
USE innovin;
-- Création de la table "cart"
DROP TABLE IF EXISTS cart;
CREATE TABLE cart (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    quantity INT
);
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
    phone VARCHAR(10),
    avatar VARCHAR(100),
    cart_id INT,
    FOREIGN KEY (cart_id) REFERENCES cart(id)
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
-- Création de la table "tasting_sheet"
DROP TABLE IF EXISTS tasting_sheet;
CREATE TABLE tasting_sheet (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    degustation_date DATE,
    shape VARCHAR(100),
    eye VARCHAR(100),
    nose VARCHAR(100),
    mouth VARCHAR(100),
    conclusion VARCHAR(100),
    note INT,
    commentaire TEXT,
    wine_id INT,
    user_id INT,
    FOREIGN KEY (wine_id) REFERENCES wine(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);
-- Création de la table "favorite"
DROP TABLE IF EXISTS favorite;
CREATE TABLE favorite (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_id INT,
    wine_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (wine_id) REFERENCES wine(id)
);
-- Création de la table "wine_cart"
DROP TABLE IF EXISTS wine_cart;
CREATE TABLE wine_cart (
    cart_id INT,
    wine_id INT,
    FOREIGN KEY (cart_id) REFERENCES cart(id),
    FOREIGN KEY (wine_id) REFERENCES wine(id)
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
-- Fixtures / Fausses données
INSERT INTO cart (quantity)
VALUES (2);
INSERT INTO cart (quantity)
VALUES (1);
INSERT INTO cart (quantity)
VALUES (3);
INSERT INTO user (
        firstname,
        lastname,
        username,
        role,
        email,
        password,
        address,
        phone,
        cart_id
    )
VALUES (
        'John',
        'Doe',
        'johndoe',
        'user',
        'johndoe@example.com',
        'password123',
        '123 Main St',
        '1234567890',
        1
    );
INSERT INTO user (
        firstname,
        lastname,
        username,
        role,
        email,
        password,
        address,
        phone,
        avatar,
        cart_id
    )
VALUES (
        'Jane',
        'Smith',
        'janesmith',
        'user',
        'janesmith@example.com',
        'password456',
        '456 Elm St',
        '9876543210',
        "/",
        2
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
        price
    )
VALUES (
        'Chardonnay',
        2020,
        'White',
        'France',
        'Burgundy',
        'Chardonnay',
        'A rich and buttery white wine.',
        1,
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
        price
    )
VALUES (
        'Merlot',
        2018,
        'Red',
        'Italy',
        'Tuscany',
        'Merlot',
        'A smooth and fruity red wine.',
        0,
        24.99
    );
INSERT INTO tasting_sheet (
        degustation_date,
        shape,
        eye,
        nose,
        mouth,
        conclusion,
        note,
        commentaire,
        wine_id,
        user_id
    )
VALUES (
        '2023-05-01',
        'Goblet',
        'Deep red color',
        'Intense aroma of berries',
        'Velvety texture',
        'Excellent wine',
        9,
        'Highly recommended',
        1,
        1
    );
INSERT INTO tasting_sheet (
        degustation_date,
        shape,
        eye,
        nose,
        mouth,
        conclusion,
        note,
        commentaire,
        wine_id,
        user_id
    )
VALUES (
        '2023-06-02',
        'Tulip',
        'Pale yellow color',
        'Citrus and tropical fruit notes',
        'Crisp and refreshing',
        'Good value for money',
        7,
        'Enjoyed it with seafood',
        2,
        2
    );
INSERT INTO favorite (user_id, wine_id)
VALUES (1, 1);
INSERT INTO favorite (user_id, wine_id)
VALUES (2, 2);
INSERT INTO wine_cart (cart_id, wine_id)
VALUES (1, 1);
INSERT INTO wine_cart (cart_id, wine_id)
VALUES (2, 2);
INSERT INTO `order` (
        cart_id,
        order_date,
        total_amount,
        shipping_address,
        status
    )
VALUES (1, '2023-06-05', 59.98, '789 Oak St', 'Pending');
INSERT INTO `order` (
        cart_id,
        order_date,
        total_amount,
        shipping_address,
        status
    )
VALUES (2, '2023-06-06', 24.99, '456 Pine St', 'Shipped');