/*
insert into users
    (first_name, last_name, username)
VALUES
    ('Pancakes', 'Rocky', 'ilovepancakes77'),
    ('Nick', 'Milton', 'swoltraphouse'),
    ('Leslie', 'Knope', 'pawneeisthbest'),
    ('James', 'Holden', 'rocinante'),
    ('John', 'Duo', 'conflictosung')
;

insert into businesses
    (name, address, phone, type)
VALUES
    ('The Prancing Pony', '2385 Shire Lane, The Shire, Middle Earth, 06095', '123-456-7891','Tavern'),
    ('Real Fake Doors', '85 Wood Way, Nantucket, MA 12180', '346-223-9507','Home and Office'),
    ('Target', '2345 Lennox Ave, Atlanta, GA 30305', '223-452-6734','Department Store'),
    ('Little Five Pizza', '1120 Euclid Ave NE, Atlanta, GA 30307', '360-258-0967', 'Pizzeria')
;
*/
insert into reviews
    (score, content, business_id, user_id)
VALUES
    (4, 'Stew and Ale were great, could do with less Wringwraiths', 1, 23),
    (3, 'Good place to meet with friends, creepy guy in the corner stared at us', 1, 25),
    (5, 'The doors really were fake! True to their name!', 2, 22),
    (2, 'I have had better pizza as a captive on an MCRN gunship', 4, 24),
    (3, 'Target is a perfectly adequate place to shop', 3, 25)
;