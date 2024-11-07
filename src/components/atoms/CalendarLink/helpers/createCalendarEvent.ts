export const toISOiCalFormat = (date: Date) =>
  date.toISOString().replace(/[^a-zA-Z0-9]/g, '');

// iCalendar Mime Type
// https://en.wikipedia.org/wiki/ICalendar#Technical_specifications
export const ICAL_TEMPLATE = (
  summary: string,
  startDate: string,
  endDate: string,
  dateNow: Date,
) => `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//hacksw/handcal//NONSGML v1.0//EN
BEGIN:VEVENT
UID:${startDate}-${endDate}-${summary}
DTSTAMP:${toISOiCalFormat(dateNow)}
DTSTART:${toISOiCalFormat(new Date(startDate))}
DTEND:${toISOiCalFormat(new Date(endDate))}
SUMMARY:${summary}
END:VEVENT
END:VCALENDAR
`;

export default (startDate: any, endDate: any, summary: any) => {
  const blob = new Blob(
    [ICAL_TEMPLATE(summary, startDate, endDate, new Date(Date.now()))],
    {
      type: 'text/calendar;charset=utf-8',
    },
  );
  if ((window.navigator as any).msSaveOrOpenBlob) {
    (window.navigator as any).msSaveBlob(blob, summary);
  } else {
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = `${summary}.ics`;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
};
