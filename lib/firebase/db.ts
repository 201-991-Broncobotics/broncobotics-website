import { randomInt } from "crypto";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync } from "fs";

import serviceAccountJson from "./iam-account.json";

let serviceAccount: any = serviceAccountJson;

serviceAccount["private_key"] = process.env.PRIVATE_KEY;
serviceAccount["private_key_id"] = process.env.PRIVATE_KEY_ID!.replace(
   /\\n/g,
   "\n"
);
serviceAccount["client_id"] = process.env.CLIENT_ID;
serviceAccount["client_x509_cert_url"] = process.env.CLIENT_X509_CERT_URL;
serviceAccount["project_id"] = process.env.PROJECT_ID;
serviceAccount["client_email"] = process.env.CLIENT_EMAIL;

let app = initializeApp(
   {
      credential: cert(serviceAccount),
   },
   `IAM App #${randomInt(0, 248)}`
);

let db = getFirestore(app);

export { db };
