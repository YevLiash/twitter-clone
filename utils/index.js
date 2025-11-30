// Displaying full date, when the post was created
export function formatDate(createdAt) {
  const date = new Date(createdAt)
  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
  const dayMonthYear = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
  return {time, dayMonthYear}
}

//Calculate how much time ago was the post created

export function timeAgo(dateString) {
  const date = new Date(dateString)
  const now = new Date()
  const seconds = Math.floor((now - date) / 1000)

  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (seconds < 60) return 'now'
  if (minutes < 60) return `${minutes}m`
  if (hours < 24) return `${hours}h`
  if (days < 7) return `${days}d`

  // "Nov 29"
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  })
}