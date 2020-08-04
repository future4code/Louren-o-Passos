export class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User");
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }

  public introduceYourserlf(): string {
    return `Olá, meu nome é ${this.getName()}, bom dia!`
  }
}

// 1) Não, ela está privada
//2) FOi chamado uma vez

const user = new User("123", "lou@gmail.com", "lourenco", "12345");
