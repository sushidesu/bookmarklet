const headingTagNames = ["h1", "h2", "h3", "h4", "h5", "h6"] as const
type HeadingTagName = (typeof headingTagNames)[number]

const isHeadingTagName = (tagName: string): tagName is HeadingTagName => {
  return headingTagNames.includes(tagName as HeadingTagName)
}

const headingSymbolMap = {
  h1: "#",
  h2: "##",
  h3: "###",
  h4: "####",
  h5: "#####",
  h6: "######",
} as const satisfies Record<string, string>

const injectHeadingVisualizer = (): void => {
  const headings = document.querySelectorAll(headingTagNames.join(", "))
  console.log(`${headings.length} headings found`)

  headings.forEach((heading) => {
    const headingId: string | undefined = heading.id
    const tagName = heading.tagName.toLowerCase()

    if (!isHeadingTagName(tagName)) {
      return
    }

    if (heading.querySelectorAll(".heading-visualizer").length > 0) {
      return
    }

    const symbol = createSymbolElement(
      headingSymbolMap[tagName],
      headingId ?? `#${headingId}`
    )
    heading.appendChild(symbol)
  })
}

function createSymbolElement(symbol: string, href?: string): HTMLAnchorElement {
  const anchor = document.createElement("a")
  anchor.classList.add("heading-visualizer")
  anchor.textContent = symbol
  if (href) {
    anchor.href = href
  }
  return anchor
}

injectHeadingVisualizer()
