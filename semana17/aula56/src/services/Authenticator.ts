import * as jwt from "jsonwebtoken";

enum USER_ROLES {
  NORMAL = "normal",
  ADMIN = "admin",
}

export interface AuthenticationData {
  id: string;
  role: USER_ROLES;
}

export class Authenticator {
  static generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );
    console.log("token gerado", token);
    return token;
  }

  static getTokenData(token: string): any {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
    };
    return result;
  }
}
