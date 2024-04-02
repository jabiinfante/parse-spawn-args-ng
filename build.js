import esbuild from "esbuild";
import { dtsPlugin } from "esbuild-plugin-d.ts";
import { rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outdir = join(dirname(fileURLToPath(import.meta.url)), "dist");

const option = {
  bundle: true,
  color: true,
  logLevel: "info",
  sourcemap: true,
  entryPoints: ["./src/index.ts"],
  minify: true,
};

async function run() {
  await rm(outdir, { recursive: true, force: true });

  await esbuild
    .build({
      format: "esm",
      outdir: "dist",
      splitting: false,
      plugins: [dtsPlugin()],
      ...option,
    })
    .catch((e) => {
      console.log(e);
      process.exit(1);
    });

  await esbuild
    .build({
      format: "cjs",
      outfile: "./dist/cjs.js",
      ...option,
    })
    .catch(() => process.exit(1));
}

run();
