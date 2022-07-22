function quereParser(str) {
  if (typeof str !== 'string' || str.length === 0) return {};
  const s = str.split('&');
  const sLength = s.length;
  let bit; const query = {}; let first; let
    second;
  for (let i = 0; i < sLength; i += 1) {
    bit = s[i].split('=');
    first = decodeURIComponent(bit[0]);
    if (first.length === 0) continue;
    second = decodeURIComponent(bit[1]);
    if (typeof query[first] === 'undefined') query[first] = second;
    else if (query[first] instanceof Array) query[first].push(second);
    else query[first] = [query[first], second];
  }
  return query;
}

export default quereParser;
