export function getDayMonthYear(dateStr: string) {

  dateStr = dateStr.trim();
  let dateRegex: RegExp
  if (dateStr.includes('/')) {
    dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/

  } else {
    dateRegex = /^(\d{4})-(\d{2})-(\d{2})$/;

  }
  const match = dateStr.match(dateRegex);

  if (!match) {
    throw new Error();
  }
  
  let day: string, month: string, year: string
  if (dateStr.includes('/')) {
    [, day, month, year] = match

  } else {
    [, year, month, day] = match
  }
  
  return [day, month, year]
}