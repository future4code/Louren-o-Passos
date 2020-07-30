import axios from "axios";
import moment from "moment";

//1a) https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all
//1b)Promise<any>

//1c)

type User = {
  id: string;
  name: string;
  email: string;
};

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews/";

// async function getSubscribers(): Promise<any[]> {
//   try {
//     const response = await axios.get(`${baseUrl}subscribers/all`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

//2a A arrow function fica dentro de uma constante e usa essa sintaxe = () => {}, além de o async ficar antes dos parênteses

//2b)

// const getArrowSubscribers = async (): Promise<User[]> => {
//   try {
//     const users = await axios.get(`${baseUrl}subscribers/all`);
//     return users.data;
//   } catch (error) {}

//   return []
// };

// getArrowSubscribers();

//3a) Ele vai pedir que tenha um return ao final da função

// 3b) Para termos o controle de estruturarmos o resultado retornado exatamente como esperamos.

// 3c)

const getSubscribers = async (): Promise<User[]> => {
  const users = await axios.get(`${baseUrl}subscribers/all`);
  return users.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

// getSubscribers();

// 4a)

// const now = Date.now();

// const createNews = async (title: string, content: string): Promise<void> => {
//   const body = {
//     title,
//     content,
//     date: now,
//   };

//   try {
//     const news = await axios.put(`${baseUrl}news`, body);
//     console.log("Sucesso!");
//   } catch (error) {
//     console.log(error);
//   }
// };

// createNews("Novidade", "Começou o backend");

//5a) Não é aconselhavel utilizar métodos de array com promises, melhor utilizar o for
//5b)

// const sendNotification = async (
//   users: User[],
//   message: string
// ): Promise<void> => {
//   let usersIds: string[] = [];
//   try {
//     for (let user of users) {
//       axios.post(`${baseUrl}notifications/send`, {
//         subscriberId: user.id,
//         message,
//       });
//       console.log("Sucesso!");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// sendNotification(
//   [
//     { id: "uKuGZstWcWbf4UpneenL", name: "Mel", email: "Mel@gmail.com" },
//     {
//       id: "v2UW1apdIo5rwNs5o7UZ",
//       name: "Joãozinho",
//       email: "minijoao@joazinho.com",
//     },
//   ],
//   "Olá!"
// );

//6a) Junta todas as promises para o envio de uma vez só, ao invés de ir iterando e enviando diversas vezes
//6b) Ao invés de disparar o chamamento da api diversas vezes, é tudo feito de uma vez só! Imagina uma notificação começar a ser disparada as 18h e quando chegasse na letra "z" já seria 22h
//6c)

// const sendNotificationAll = async (
//   users: User[],
//   message: string
// ): Promise<void> => {
//   let notifications: Promise<any>[] = [];
//   try {
//     for (let user of users) {
//       notifications.push(
//         axios.post(`${baseUrl}notifications/send`, {
//           subscriberId: user.id,
//           message,
//         })
//       );
//       await Promise.all(notifications);
//       console.log("Sucesso!");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// // sendNotificationAll(
// //   [
// //     { id: "uKuGZstWcWbf4UpneenL", name: "Mel", email: "Mel@gmail.com" },
// //     {
// //       id: "v2UW1apdIo5rwNs5o7UZ",
// //       name: "Joãozinho",
// //       email: "minijoao@joazinho.com",
// //     },
// //   ],
// //   "Olá!"
// // );

// //7a)

// const signup = async (name: string, email: string) => {
//   const body = {
//     name,
//     email,
//   };

//   try {
//     await axios.put(`${baseUrl}subscribers`, body);
//   } catch (error) {
//     console.log(error);
//   }
// };

// signup("Lourenço", "lourenco@mello.com.br");

// //7b)

// let subscribers: User[] = [];

// const getSubscribers = async (): Promise<User[]> => {
//   const users = await axios.get(`${baseUrl}subscribers/all`);
//   return users.data.map((res: any) => {
//     subscribers.push(users.data);
//     return {
//       id: res.id,
//       name: res.name,
//       email: res.email,
//     };
//   });
// };

// const now = Date.now();

// const createNewsNotificate = async (
//   title: string,
//   content: string
// ): Promise<void> => {
//   const body = {
//     title,
//     content,
//     date: now,
//   };

//   try {
//     getSubscribers();
//     const news = await axios.put(`${baseUrl}news`, body);
//     sendNotificationAll(subscribers, "Nova notícia! Confira");
//   } catch (error) {
//     console.log(error);
//   }
// };

// createNewsNotificate("Novidade", "Começou o backend");

//7c)
let subscribers: User[] = [];

const getAllNotifications = async (): Promise<any> => {
  try {
    const users = await getSubscribers();
    let notifications = [];

    for (let user of users) {
      notifications.push(
        axios.get(`${baseUrl}subscribers/${user.id}/notifications/all`)
      );
      await Promise.all(notifications);
    }
  } catch (error) {
    console.log(error.message);
  }
};

getAllNotifications();
