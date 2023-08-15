const dontTrackMyFriends = () => {
  window.location.href = window.location.href.replace(/\?.*$/, "")
}

dontTrackMyFriends()
