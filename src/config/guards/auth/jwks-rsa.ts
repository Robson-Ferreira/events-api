import * as jwksRsa from 'jwks-rsa';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.development.local' });

export const client = jwksRsa({
  jwksUri: process.env.JWKS_URI,
});

export async function verifyToken(token: string): Promise<any> {
  const getKey = (header: any, callback: any) => {
    client.getSigningKey(header.kid, (err: Error, key: any) => {
      const signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, signingKey);
    });
  };

  return new Promise((resolve, reject) => {
    jwt.verify(token, getKey, (err: jwt.VerifyErrors, decoded: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
}
