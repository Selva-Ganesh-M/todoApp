


var array = [{item: "get food"}, {item: "wash dishes"}]
var date = new Date().toLocaleDateString("en-us", {
weekday: "long",
year: "numeric",
month: "short",
day: "numeric",
})

module.exports = (app)=>{
  app.get("/", (req, res)=>{
    res.render("list.ejs", {ejs_date: date, todoArray: array})
  })

  app.post('/', (req, res)=>{
    array.push(req.body)
    // console.log(array)
    res.setHeader("Content-Type", "application/json")
    res.json({todoArray: array})
    // res.json({todoArray: array})
    // res.send()
  })

// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

  // app.delete('/', (req, res)=>{
  //   var rm = req.body
  //   array = array.filter((it)=>{
  //     return rm.item.trim() !== it.item.trim()
  //   })
  //   res.send('done')
  // })

  app.delete('/:item', (req, res)=>{
    var rm = req.params.item
    array = array.filter((it)=>{
      return rm.trim() !== it.item.trim()
    })
    res.send('done')
  })

// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

}
