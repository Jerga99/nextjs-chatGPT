

import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "db.json");

export async function dbConnect() {
  const adapter = new JSONFile(file);
  const db = new Low(adapter);
  return db;
}

