// This util is a compact number formatter (nice for showing likes, views, followers, etc.)
// that always outputs in en-GB style with at most 1 decimal place. 1234 -> 1.2K
export const { format: formatNumber } = Intl.NumberFormat('en-GB', {
  notation: 'compact',
  maximumFractionDigits: 1
})

export const getYouTubeId = (url: string) => {
  try {
    const u = new URL(url)

    // Case 1: embed links → https://www.youtube.com/embed/VIDEOID
    if (u.pathname.startsWith('/embed/')) {
      return u.pathname.split('/')[2]
    }

    // Case 2: normal watch links → https://www.youtube.com/watch?v=VIDEOID
    if (u.searchParams.has('v')) {
      return u.searchParams.get('v')
    }

    // Case 3: short links → https://youtu.be/VIDEOID
    if (u.hostname === 'youtu.be') {
      return u.pathname.slice(1)
    }

    return null
  } catch {
    return null
  }
}
