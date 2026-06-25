import { appendFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const storageDirectory = path.join(process.cwd(), "storage", "submissions");

async function ensureStorageDirectory() {
  await mkdir(storageDirectory, { recursive: true });
}

async function readCollection<T>(filename: string): Promise<T[]> {
  await ensureStorageDirectory();

  try {
    const raw = await readFile(path.join(storageDirectory, filename), "utf8");
    return JSON.parse(raw) as T[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

export async function appendCollectionItem<T>(filename: string, item: T) {
  const collection = await readCollection<T>(filename);
  collection.unshift(item);

  await writeFile(
    path.join(storageDirectory, filename),
    JSON.stringify(collection, null, 2),
    "utf8",
  );
}

export async function appendNotificationLog(line: string) {
  await ensureStorageDirectory();
  await appendFile(path.join(storageDirectory, "notifications.log"), `${line}\n`);
}
