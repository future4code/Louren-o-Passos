### Exercício 1

a) É uma chave estrangeira à nossa tabela, ou seja, proveniente de outra tabela.
b)

INSERT INTO Rating(id,comment,rate,movie_id)
VALUES ("a",
"Filme muito legal",
5.5,
"001");

INSERT INTO Rating(id,comment,rate,movie_id)
VALUES ("b",
"Filme muito show",
7.5,
"002");


c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_lourenco_passos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))


Ele não deixa, diz que não conseguiu atualizar uma linha filha pois ha erro na foregin key.

d) ALTER TABLE Movie DROP rating;

e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_lourenco_passos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não é possível deletar uma linha pai, ja que é ela é referenciada em outra tabela.


### Exercício 2

a) É uma tabela com relação de vários para vários. Pega da tabela Movie o id do filme do qual o ator participa, além de pegar da tabela Actor o Id do ator em questão.
b)INSERT INTO MovieCast (movie_id, actor_id)
VALUES("001","002"),
("001","005"),
("001","007"),
("004","002"),
("004","005"),
("004","007");

c)
INSERT INTO MovieCast (movie_id, actor_id)
VALUES("099","002"),

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_lourenco_passos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Erro na foreign key de movie, não deixa deletar

d) Erro no forgein key de actor, não deixa deletar


### Exercício 3

a) Ocorre a junção de duas tabelas diferentes, pareadas pelas chaves entre o ON.
b) SELECT Movie.name, Rating.rate, Rating.movie_id FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

### Exercício 4

a) SELECT * FROM Movie 
LEFT JOIN Rating ON Movie.id = Rating.movie_id;

b) SELECT m.id as movie_id, m.name, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;

c) SELECT avg(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id)

### Exercício 5


a) primeiro ocorre pareamento entre os itens do movie cast com o do movie, para deixar quem está no filme conectado com as outras informações do filme. Depois as infos do ator entram na jogada.
b) SELECT m.id as movie_id, m.name, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

Ficava dois campos id, sem a identificação correta.

### Exercício 6

a) CREATE TABLE MovieOscar (
		movie_id VARCHAR(255) NOT NULL,
		oscar_name ENUM("Melhor Filme", "Melhor Direção") NOT NULL,
        date Date NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
Relação de de vários para vários. Um filme pode ter mais de um oscar, e um oscar pode ter sido recebido por mais de um filme.

b) movie id como foreign key, o tipo de oscar é um enum e a data de recebimento está como date.

c) 

SELECT m.name as movie_name,oscar_name as premiação FROM Movie m
LEFT JOIN MovieOscar  ON m.id = MovieOscar.movie_id;




