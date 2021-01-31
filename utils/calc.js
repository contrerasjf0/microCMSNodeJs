function rand(maxLimit = 100) { 
  
  let rand = Math.random() * maxLimit; 
  
  return Math.floor(rand);
}

module.exports = {
  rand
}
