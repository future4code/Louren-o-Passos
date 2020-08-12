### Exercício 1

a) VARCHAR representa o uso de strings, DATE é para datas ( o formato é YYYY-MM-DD )
b) O SHOW databases mostrou todos banco de dados, já o show tables mostrou apenas a tabela "Actor" criada acima
c)

### Exercício 2

a) INSERT INTO Actor (id,name,salary,birth_date, gender)
VALUES (
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

b) Duplicata na primary key

c) contador de colunas não se conecta com a linha

INSERT INTO Actor (id, name, salary,birth_date, gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

d) o campo 'name' não tem um valor default (está faltando)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Carlos Miguel",
400000,
"1949-04-18",
"male"
);

e) o campo data de nascimento estava com formato errado, é string e não número. Ele executava como conta.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"006",
"João",
5000000,
"1993-12-25",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"007",
"Carolina",
800000,
"1993-04-20",
"female"
);

### Exercício 3

a) SELECT _ FROM Actor Where gender = "female"
b) SELECT salary from Actor where name ="Tony Ramos";
c) SELECT _ from Actor where gender ="invalid";

Não retornou nenhum resultao pois ou o genero é "male" ou é "female"

d) SELECT id, name, salary from Actor where salary < 500000;
e) SELECT id, name from Actor WHERE id = "002"

### Exercício 4

SELECT * from Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

a) os nomes começam com A ou J e depois disso, os salários abaixo do valor.

b) SELECT * from Actor WHERE (name NOT LIKE "A%") AND salary > 350000;

c) SELECT * from Actor WHERE (name LIKE "%G%" OR name LIKE "%g%");

d) SELECT * from Actor WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000;

### Exercício 5

a)

CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255)NOT NULL,
synopsis TEXT NOT NULL,
release_date DATE NOT NULL,
rating INT NOT NULL
);

b) INSERT INTO Movie(id,name,synopsis,release_date,rating)
VALUES ("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7)

c) INSERT INTO Movie(id,name,synopsis,release_date,rating)
VALUES ("002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27", 10);

d)INSERT INTO Movie(id,name,synopsis,release_date,rating)
VALUES ("003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02", 8);

e) INSERT INTO Movie(id,name,synopsis,release_date,rating)
VALUES ("004",
"Cidade de Deus",
"Nas favelas do Rio de Janeiro dos anos 1970, dois rapazes seguem caminhos diferentes. Buscapé é um fotógrafo que registra o cotidiano violento do lugar, e Zé Pequeno é um ambicioso traficante que usa as fotos de Buscapé para provar como é durão.",
"2002-08-30", 10);


### Exercício 6

a) SELECT id, name, rating from Movie where name ="Cidade de Deus";
b) SELECT * from Movie where name ="Cidade de Deus";
c) SELECT id, name, synopsis from Movie where rating > 7;

### Exercício 7

a) SELECT * from Movie where name LIKE "%vida%";
b)SELECT * from Movie where name LIKE "%TERMO DE BUSCA%";
c)SELECT * from Movie where release_date < "2020/08/10";
d) SELECT * from Movie where release_date < "2020/08/10" AND (name LIKE "%Deus%" OR synopsis LIKE "%Deus%") AND rating > 7;

