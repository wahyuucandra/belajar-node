import jwt from "jsonwebtoken";
import env from "../config/env.config";
import fs from "fs";

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, env.ACCESS_TOKEN_SECRET, {
    expiresIn: env.ACCESS_TOKEN_EXPIRY,
  });
};

export const generateRefreshToken = (userId: string) => {
  return jwt.sign({ userId }, env.REFRESH_TOKEN_SECRET, {
    expiresIn: env.REFRESH_TOKEN_EXPIRY,
  });
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret);
};

export const readJSONFile = (fileName: string) => {
  try{
    if (!fs.existsSync(fileName)) {
      fs.writeFileSync(fileName, "[]")
    }

    return JSON.parse(fs.readFileSync(fileName, 'utf-8') || "[]")
  }catch(err: any){
    console.error(`Failed to read or parse file at ${fileName}: ` , err)
  }
}

export const writeJSONFile = (fileName: string, data: any) => {
  try{
    if (!fs.existsSync(fileName)) {
      fs.writeFileSync(fileName, "[]")
    }

    fs.writeFileSync(fileName, JSON.stringify(data))
    
  }catch(err: any){
    console.error(`Failed to write file at ${fileName}: ` , err)
  }
}
