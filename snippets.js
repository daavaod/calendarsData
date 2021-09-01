loopObject(obj) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
      return this.loopObject(obj[key]);
    }
    obj[key] = null
  });
}

// with array
loopObject(obj) {
      console.log('eventdetails before', this.eventDetails);
      Object.keys(obj).forEach(key => {
        if(Array.isArray(obj[key])) {
          console.log('found array');
          obj[key] = []
        }
        if (typeof obj[key] === 'object') {
          return this.loopObject(obj[key]);
        }
        obj[key] = null
      });
      console.log('eventdetails after', this.eventDetails);
    }
