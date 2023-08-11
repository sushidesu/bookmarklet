const amznFilter = (): void => {
  const params = new URLSearchParams(location.search)
  params.append("emi", "AN1VRQENFRJN5")
  location.search = params.toString()
}

amznFilter()
