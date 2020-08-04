 import { Post } from './Post'
import { JSONFileManager } from "./JSONFileManager";

// Receber os parâmetros do terminal
const newPostAuthor: string = process.argv[2];
const newPostText: string = process.argv[3];

//  Criar um novo post com os dados recebidos
const newPost: Post = new Post(newPostAuthor, newPostText);

//  Ler a base de dados
const fileManager: JSONFileManager = new JSONFileManager("posts.json");
const postList: any = fileManager.readDatabase();

//  Atualizar a base de dados
postList.push(newPost);

//  Salvar as atualizações
fileManager.writeToDatabase(postList);

//  Imprimir mensagem de sucesso
console.log("Sucesso!");


// 1) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?

// Ele monta o objeto conforme os parâmetros da classe. com o método "new"

//2) Chamado apenas uma vez

//3)Através dos métodos getters


//4) com uma função console.log(UserAccount.cpf), por exemplo