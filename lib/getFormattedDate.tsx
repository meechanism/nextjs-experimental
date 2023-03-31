export function getFormattedDate(dateString: string) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
    new Date(dateString)
  );
}

/**
 * "Cool" form for list
 * @param dateString
 * @returns
 */
export function getHipDate(dateString: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  }).format(new Date(dateString));
}
