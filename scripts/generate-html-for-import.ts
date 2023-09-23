import { readFile, writeFile } from "fs/promises"
import { globby } from "globby"

const DIST_DIR = "./dist"

const generateHtmlForImport = async () => {
  const files = await globby([`${DIST_DIR}/*.js`])
  const contents = {}
  for (const file of files) {
    const name = file.split("/").pop()?.split(".")[0]
    if (!name) continue
    const f = await readFile(file)
    contents[name] = f.toString().replace(/"/g, "'").slice(0, -1)
  }

  const html = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>
<DL>
  ${Object.entries(contents)
    .map(([name, content]) => dt(name, content))
    .join("\n  ")}
</DL>
`
  await writeFile(`${DIST_DIR}/index.html`, html)
}

const dt = (name, content) => `<DT><A HREF="${content}">${name}</A></DT>`

await generateHtmlForImport()
