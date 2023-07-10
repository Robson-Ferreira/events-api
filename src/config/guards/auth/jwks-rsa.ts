import * as jwksRsa from 'jwks-rsa';
import * as jwt from 'jsonwebtoken';

const jwksClient =
  'https://dev-dv3m37h2cowxryg3.us.auth0.com/.well-known/jwks.json';
export const client = jwksRsa({
  jwksUri: jwksClient,
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
