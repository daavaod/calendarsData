loopObject(obj) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
      return this.loopObject(obj[key]);
    }
    obj[key] = null
  });
}
