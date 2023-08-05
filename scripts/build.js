import { writeFileSync } from "fs"
import esbuild from "esbuild"
import { globby } from "globby"

// https://github.com/reesericci/esbuild-plugin-bookmarklet/blob/eba725c7470b5e7fc14d83fa9e218b5da4608a76/mod.js
const convertBookmarkletPlugin = {
  name: "bookmarklet",
  setup(build) {
    build.onEnd((result) => {
      if (result.outputFiles === undefined) {
        throw new Error(
          "Unable to access outputFiles. This is likely due to `write` being set to true."
        )
      }
      const js = result.outputFiles.find((f) => f.path.match(/\.js$/))
      writeFileSync(js.path, `javascript:${js.text}`)
    })
  },
}

const build = async () => {
  const entryPoints = await globby(["./src/*.ts"])
  await esbuild.build({
    entryPoints,
    bundle: true,
    outdir: "./dist",
    minify: true,
    write: false,
    format: "iife",
    plugins: [convertBookmarkletPlugin],
  })
}

await build()
