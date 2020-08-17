import * as jwt from "jsonwebtoken";

export class Authenticator {
  private static EXPIRES_IN = "90min";

  static generateToken(input: AuthenticationData): string {
    
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: Authenticator.EXPIRES_IN,
      }
    );
    console.log("token gerado", token);
    return token;
  }
}

interface AuthenticationData {
  id: string;
}
