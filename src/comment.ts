const comment = async () => {
  const USERNAME = "sushidesu"

  // get full page url
  const url = window.location.href
  // get page title
  const title = `「${document.title}」`
  // copy title with url to clipboard
  await navigator.clipboard.writeText(`[${title} ${url}]`)

  // create new tab with scrapbox page
  window.open(`https://scrapbox.io/${USERNAME}/${encodeURIComponent(title)}`)
}

comment()
