export function getShopStatus() {
  // Always get the current time normalized to California
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  const findPart = (type: string) => parts.find(p => p.type === type)?.value || '';

  const weekday = findPart('weekday'); // e.g., "Monday"
  const hour = parseInt(findPart('hour'), 10);
  const minute = parseInt(findPart('minute'), 10);
  const timeAsFloat = hour + minute / 60;

  if (weekday === 'Sunday') return { isOpen: false, text: "CLOSED" };

  if (weekday === 'Saturday') {
    const open = 8.5;  // 8:30 AM
    const close = 16.0; // 4:00 PM
    const isOpen = timeAsFloat >= open && timeAsFloat < close;
    return { isOpen, text: isOpen ? "OPEN NOW" : "CLOSED" };
  }

  // Weekdays (Monday - Friday)
  const open = 8.5;   // 8:30 AM
  const close = 17.5; // 5:30 PM
  const isOpen = timeAsFloat >= open && timeAsFloat < close;
  return { isOpen, text: isOpen ? "OPEN NOW" : "CLOSED" };
}