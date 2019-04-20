const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

// express() is the constructor of an 'express' object i think
express()
  .use(express.static(path.join(__dirname, 'public'))) // __dirname is full path of project home directory
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/times', (req, res) => res.send(showTimes()))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/test', (req, res) => res.send('This is a test page'))
  .get('/test-log', (req, res) => {console.log('test test123'); res.send('Test line logged')})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


showTimes = () =>
{
  let result = ''
  const times = process.env.TIMES || 5
  for ( i = 0; i < times ; i++)
  {
      result += i + ' '
  }
  
  return result
}
