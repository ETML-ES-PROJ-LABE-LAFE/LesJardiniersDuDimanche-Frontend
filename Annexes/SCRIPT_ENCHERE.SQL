DROP DATABASE IF EXISTS Enchere_LABE_LAFE;

CREATE DATABASE IF NOT EXISTS Enchere_LABE_LAFE;
USE Enchere_LABE_LAFE;

# -----------------------------------------------------------------------------
#       TABLE : USER
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS USER (
    ID_USER BIGINT AUTO_INCREMENT PRIMARY KEY,
    NAME VARCHAR(60) NOT NULL,
    EMAIL VARCHAR(80) NOT NULL,
    ISCONNECTED BOOLEAN NOT NULL,
    WALLET DECIMAL(10,2) NOT NULL
);

# -----------------------------------------------------------------------------
#       TABLE : CATEGORY
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS CATEGORY (
    ID_CATEGORY BIGINT AUTO_INCREMENT PRIMARY KEY,
    NAME CHAR(60) NOT NULL,
    PARENTCATEGORY INTEGER,
    FOREIGN KEY (PARENTCATEGORY) REFERENCES CATEGORY(ID_CATEGORY)
);

# -----------------------------------------------------------------------------
#       TABLE : LOT
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS LOT (
    ID_LOT BIGINT AUTO_INCREMENT PRIMARY KEY,
    ID_CATEGORY BIGINT NOT NULL,
    ID_USER BIGINT NOT NULL,
    NAME VARCHAR(60) NOT NULL,
    DESCRIPTION TEXT NOT NULL,
    STARTING_PRICE DECIMAL(10,2) NOT NULL,
    STARTINGDATEHOURS DATETIME NOT NULL,
    ENDINGDATEHOURS DATETIME NOT NULL,
    ACTUAL_PRICE DECIMAL(10,2) NOT NULL,
    SUB_CATEGORY_ID BIGINT, 
    FOREIGN KEY (ID_CATEGORY) REFERENCES CATEGORY(ID_CATEGORY),
    FOREIGN KEY (ID_USER) REFERENCES USER(ID_USER),
    FOREIGN KEY (SUB_CATEGORY_ID) REFERENCES CATEGORY(ID_CATEGORY)
);

# Insérer des utilisateurs
INSERT INTO USER (NAME, EMAIL, ISCONNECTED, WALLET) VALUES ('Evan Pineau', 'evan.pineau@example.com', FALSE, 100.00);
INSERT INTO USER (NAME, EMAIL, ISCONNECTED, WALLET) VALUES ('Max Verstappen', 'max.verstappen@example.com', FALSE, 150.00);

# Insérer des catégories
INSERT INTO CATEGORY (NAME, PARENTCATEGORY) VALUES ('Informatique', NULL);
INSERT INTO CATEGORY (NAME, PARENTCATEGORY) VALUES ('Ordinateur', 1);

INSERT INTO CATEGORY (NAME, PARENTCATEGORY) VALUES ('Jardinerie', NULL);
INSERT INTO CATEGORY (NAME, PARENTCATEGORY) VALUES ('Tondeuse', 3);

INSERT INTO CATEGORY (NAME, PARENTCATEGORY) VALUES ('Vêtements', NULL);
INSERT INTO CATEGORY (NAME, PARENTCATEGORY) VALUES ('Chaussures', 5);

INSERT INTO CATEGORY (NAME, PARENTCATEGORY) VALUES ('Cuisine', NULL);
INSERT INTO CATEGORY (NAME, PARENTCATEGORY) VALUES ('Électroménager', 7);

INSERT INTO CATEGORY (NAME, PARENTCATEGORY) VALUES ('Maison', NULL);
INSERT INTO CATEGORY (NAME, PARENTCATEGORY) VALUES ('Plantes', 3);

# Insérer des lots
INSERT INTO LOT (ID_CATEGORY, ID_USER, NAME, DESCRIPTION, STARTING_PRICE, STARTINGDATEHOURS, ENDINGDATEHOURS, ACTUAL_PRICE, SUB_CATEGORY_ID) VALUES
(2, 1, 'PC HP', 'PC HP très très rapide', 1000.00, '2023-01-01 09:00:00', '2023-01-01 21:00:00', 1001.00, 2),
(4, 1, 'Tondeuse', 'Tondeuse qui tondeuse bien', 1500.00, '2023-01-02 09:00:00', '2023-01-02 21:00:00', 1501.00, 4),
(6, 1, 'Nike', 'Chaussures qui courent vite', 400.00, '2023-02-04 15:00:00', '2023-04-05 21:00:00', 401.00, 6),
(8, 1, 'Four Râleur', 'Ce four intelligent critique vos recettes et votre technique de cuisson. Parfait pour ceux qui veulent améliorer rapidement leurs compétences en cuisine', 480.00, '2023-02-04 15:00:00', '2023-04-05 21:00:00', 481.00, 8),
(8, 1, 'Aspirateur Susceptible', 'Cet aspirateur ne se contente pas de nettoyer; il se plaint si la pièce est trop sale', 670.00, '2023-02-04 15:00:00', '2023-04-05 21:00:00', 671.00, 8),
(4, 1, 'Plante', 'Cette plante émet un léger grognement lorsque vous oubliez de l\'arroser. Parfaite pour ceux qui ont besoin d\'un rappel vivant!', 480.00, '2023-02-04 15:00:00', '2023-04-05 21:00:00', 481.00, 4);
