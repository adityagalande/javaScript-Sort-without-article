const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName){
  return bandName.replace(/^(a |an |the)/i, '').trim();
}

const sortingBands = bands.sort((a, b) => {
  if(strip(a) > strip(b)){
    return 1;
  } else {
    return -1
  }
  console.log(sortingBands);

})

document.querySelector('#bands').innerHTML = sortingBands.map(band => `<li>${band}</li>`).join('');
