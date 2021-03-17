// get reference to sliders

const x_slider = document.getElementById( 'x' )
const y_slider = document.getElementById( 'y' )

// listen to slider events

function makeRows() {

  // remove existing table
  let table = document.getElementById( 'table' )

  if ( table ) {
    table.remove()
  }

  // create new table
  table = document.createElement( 'table' )
  table.id = 'table'
  document.body.appendChild( table )

  // get slider values
  const columns = x_slider.valueAsNumber
  const rows = y_slider.valueAsNumber

  // update labels
  document.getElementById( 'x_label' ).innerHTML = 'X: ' + columns
  document.getElementById( 'y_label' ).innerHTML = 'Y: ' + rows

  // make table items
  for ( i = 0; i < rows; i ++ ) {

    // create a table row
    const row = document.createElement( 'tr' )
    table.appendChild( row )

    for ( j = 0; j < columns; j ++ ) {

      // create a table cell
      const cell = document.createElement( 'td' )

      if (i < 50 && j < 50) {
        cell.innerHTML = `<img src="${getRandomImageUrl()}">`
      } else {
        cell.innerText = i + ',' + j
      }

      // uncomment to generate a random background color for cell on mouseover
      // const color = Math.floor( Math.random() * 16777215 ).toString( 16 )

      // cell.addEventListener( 'mouseover', function () {
      //   cell.style.background = '#' + color
      // }, false )

      // cell.addEventListener( 'mouseout', function () {
      //   cell.style.background = 'white'
      // }, false )

  

      row.appendChild( cell )

    }
  }
}


 

function getRandomImageUrl() {
  const urls = [

    "https://www.pngfind.com/pngs/m/619-6193865_triangle-rouge-png-half-square-png-transparent-png.png",
    "https://d2culxnxbccemt.cloudfront.net/quilt/content/uploads/2020/02/28141256/HST-Image-scaled.jpg" ,
   "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Orienteering_symbol_framed.png/220px-Orienteering_symbol_framed.png",
  ]
  return urls[Math.floor(Math.random() * urls.length)];
}

// run once to initialise table
makeRows();