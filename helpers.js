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
