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
