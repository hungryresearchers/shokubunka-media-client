export default function formatReleasedDate(date: string) {
  const releasedDate = new Date(date)
  return `${releasedDate.getFullYear()} ${releasedDate.getMonth() + 1} ${releasedDate.getDate()}`
}
