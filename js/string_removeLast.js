// REPLACE

function remove(string) {
    
    // return string.endsWith('!') ? string.slice (0, -1) : string;
    return string.replace( /!$/, '');
  }

  console.log(remove("Hi!!!, Hi!!"));
  console.log(remove("Hi!!!, Hi!"));