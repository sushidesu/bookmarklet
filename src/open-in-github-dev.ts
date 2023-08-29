const openInGithubDev = async () => {
  // get full page url
  const url = window.location.href

  // available only github.com
  if (!url.startsWith("https://github.com")) {
    return
  }

  // open in github.dev
  window.open(url.replace("https://github.com", "https://github.dev"))
}

openInGithubDev()
