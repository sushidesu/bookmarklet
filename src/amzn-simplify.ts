export const amznSimplify = () => {
  // https://www.amazon.co.jp/XXXXX/dp/4802511191
  location.href = location.href.replace(
    /amazon.co.jp\/.+\/dp/,
    "amazon.co.jp/dp"
  )
}

amznSimplify()
