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
