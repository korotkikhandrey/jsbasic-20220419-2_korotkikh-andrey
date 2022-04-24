function truncate(str, maxlength) {
  if (maxlength < str.length) {
    return (str.substring(0, maxlength-1) + '…');
  }
  return str;
}