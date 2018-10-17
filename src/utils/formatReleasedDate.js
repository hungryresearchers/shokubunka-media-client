export default function formatReleasedDate(date: ?string) {
  if (!date) {
    return ''
  }
  const releasedDate = new Date(date)
  return `${releasedDate.getFullYear()} ${releasedDate.getMonth() + 1} ${releasedDate.getDate()}`
}
