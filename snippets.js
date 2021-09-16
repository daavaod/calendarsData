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

// remove duplicates
const arr = [
    {label: 'All', value: 'All'},
    {label: 'All', value: 'All'},
    {label: 'Alex', value: 'Ninja'},
    {label: 'Bill', value: 'Op'},
    {label: 'Cill', value: 'iopop'}
]

var result = arr.reduce((unique, o) => {
    if(!unique.some(obj => obj.label === o.label && obj.value === o.value)) {
      unique.push(o);
    }
    return unique;
},[]);
console.log(result);

// array sort
computed: {
  sortedArray: function() {
    function compare(a, b) {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    }

    return this.arrays.sort(compare);
  }
}
