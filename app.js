require('dotenv').config()
const express = require('express')
const app = express()
const {getCityInfo, getJobs} = require('./util.js')
console.log(getCityInfo, getJobs)

app.use(express.static('public'))

app.get('/api/city/:city', async(req, res) => {
    const cityInfo = await getCityInfo(req.params.city)
    const jobs = await getJobs(req.params.city)
    if (!(cityInfo || jobs)){
      return res.status(404).json({error: "Iformation not found"})

    }
    res.json ({cityInfo, jobs})
    console.log('get info')
   
})
// TODO: import the getCityInfo and getJobs functions from util.js
// TODO: Statically serve the public folder
// TODO: declare the GET route /api/city/:city   
// This endpoint should call getCityInfo and getJobs and return
// the result as JSON.
// The returned JSON object should have two keys:
// cityInfo (with value of the getCityInfo function)
// jobs (with value of the getJobs function)
// If no city info or jobs are found,
// the endpoint should return a 404 status

module.exports = app
