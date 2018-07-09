export function timeFormatter(time) {
  let str = '';
  str += time.hour.toString().padStart(2,'0') + ':';
  str += time.minute.toString().padStart(2,'0') + ' ';
  str += (time.isAM) ? 'AM' : 'PM';
  return str;
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toMinutes(a, value) {
  let aTime = 0;
  switch(value) {
    case 'depart':
      const aDepartHour = a.depart_time.isAM ? a.depart_time.hour : a.depart_time.hour + 12;
      aTime = aDepartHour*60 + a.depart_time.minute;
      break;
    case 'arrive':
      const aArriveHour = a.arrive_time.isAM ? a.arrive_time.hour : a.arrive_time.hour + 12;
      aTime = aArriveHour*60 + a.arrive_time.minute;
      break;
    default:
      console.log('Value not passed to helper toMinutes function');
      break;
  }
  return aTime;
}

export function elapsedTime(t1 , t2) {
  // Convert to 24h
  const a = t1.hour !== 12 ?
    (t1.AM ? t1.hour : t1.hour+12) :
    t1.hour;
  const b = t2.hour !== 12 ?
    (t2.AM ? t2.hour : t2.hour+12) :
    t2.hour;
  // Convert to minutes
  const t1_new = a*60 + t1.minute;
  const t2_new = b*60 + t2.minute;
  const t = t2_new - t1_new;
  return (` (${Math.floor(t / 60)}h ${t % 60}m)`);
}
