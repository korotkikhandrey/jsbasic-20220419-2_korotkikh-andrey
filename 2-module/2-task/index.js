function isEmpty(obj) {

  for (key in obj) {
    if (key != null) {
      return false;
    } 
  }

  return true;
}
