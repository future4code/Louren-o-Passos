### Exercício 1 

a) Este comando tiraria a coluna salário
b) Muda a coluna gênero para sexo
c) aumenta o limite de caracteres para 255 ao invés de 6
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 2

a) UPDATE Actor
SET name = "Maria"
WHERE id = "003"
b) UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

c)
UPDATE Actor
SET name = "Número 5",
 salary = 100000,
 birth_date = "1992-12-25",
 gender = "male"
WHERE id = "005";

d) Dá como completo, sem avisar que não havia esse id no DB.

### Exercício 3

a) DELETE FROM Actor WHERE name="Fernanda Montenegro";
b) DELETE FROM Actor WHERE gender="male" AND salary > 1000000;


### Exercício 4

a) SELECT MAX(salary) from Actor
b)  SELECT MIN(salary) from Actor;
c) SELECT COUNT(*) FROM Actor WHERE gender="female";
d) SELECT SUM(salary) FROM Actor;

### Exercício 5

a) Está dando o resultado agrupado conforme o gênero no banco de dados
b) 

SELECT id, name FROM Actor ORDER BY name DESC;

c) SELECT * FROM Actor ORDER BY salary ASC;

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e) SELECT AVG(salary), gender from Actor GROUP BY gender;

### Exercício 6


a) ALTER TABLE Movie ADD playing_limit_date DATE;

b)ALTER TABLE Movie CHANGE rating rating FLOAT;


c) UPDATE Movie 
SET playing_limit_date ="2020-12-08"
WHERE id="002";

UPDATE Movie 
SET playing_limit_date ="2019-12-08"
WHERE id="001";

d) DELETE FROM Movie
WHERE id="001";

e) DELETE FROM Movie
WHERE id="003";

### Exercício 7

a) SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

b) SELECT AVG(rating) FROM Movie; 

c) SELECT AVG(rating) FROM Movie WHERE playing_limit_date > CURDATE();

d) SELECT COUNT(*) From Movie WHERE release_date > CURDATE();

e) SELECT MAX(rating) * from Movie;

f) SELECT MIN(rating) * from Movie;

### Exercício 8

a) SELECT * FROM Movie ORDER BY name ASC;

b) SELECT * FROM Movie ORDER BY name DESC LIMIT 5;

c) SELECT * FROM Movie WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;

d) SELECT * FROM Movie ORDER BY release_date DESC LIMIT 3;