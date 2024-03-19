<html>
  <head>
    {id:2,title:"java",authour:"harperlee",price:8.99}, {id:3,title:"computer
    networks",authour:"harpe",price:8.55}, {id:4,title:"operating systems",authour:"herlee",price:8.34},];
     app.get('/books',req,res) => 
     {
    res.send(books);
 }; 
 app.listen(3001,() => { 
    console.log("server listenting on port 3001");
 });
  </head>
</html>
