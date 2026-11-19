import { cp, mkdtemp, rename, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const source = new URL('../site/', import.meta.url);
const output = new URL('../dist', import.meta.url);
const staging = await mkdtemp(fileURLToPath(new URL('../.portfolio-build-', import.meta.url)));

try {
  await cp(source, staging, { recursive: true });
  await rm(output, { recursive: true, force: true });
  await rename(staging, output);
} finally {
  await rm(staging, { recursive: true, force: true });
}
