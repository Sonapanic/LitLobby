CREATE TABLE IF NOT EXISTS books (
    id serial primary key,
    title text,
    description text, 
    page integer, 
    author text, 
    genre text 
);


PREPARE addBook (text, text, integer, text, text) AS INSERT INTO books (title, description, page, author, genre) VALUES ($1, $2, $3, $4, $5);

EXECUTE addBook('The Fifth Season', 'Broken Earth setting. World plagued by cataclysmic seasons. Protagonists with unique abilities. Quest to save civilization. Themes of oppression, survival, and the consequences of power. Engrossing narrative with intricate world-building.', 445, 'N.K. Jemisin', 'Dark Fantasy');
EXECUTE addBook('Warbreaker', 'Royal princesses Vivenna and Siri caught in political intrigue, magic, and war. Gods, alliances, sacrifices, and extraordinary powers. Themes of identity and gods vs. mortals. Intriguing and captivating fantasy narrative.', 355, 'Brandon Sanderson', 'Fantasy');
EXECUTE addBook('The Count of Monte Cristo', 'Revenge, betrayal, and redemption. Edmond Dantès imprisoned unjustly, escapes, and seeks vengeance. Twists, disguises, and intricate plot. Themes of justice, fate, and the consequences of obsession. Gripping tale of retribution and ultimate transformation.', 1266, 'Alexandre Dumas', 'Classic Literature');
EXECUTE addBook('The Lies of Locke Lamora', 'Fantasy heist novel. Cunning thief protagonist. Intricate city of Camorr. Elaborate cons and high-stakes schemes. Clashes with powerful enemies. Themes of loyalty, deception, and the allure of a life of crime. Gripping tale of adventure and intrigue.', 350, 'Scott Lynch', 'Fantasy');

