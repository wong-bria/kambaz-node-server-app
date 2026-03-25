//  embedding the callback function declaration within the route definition can be a challenging syntax for some
// export default function Hello(app) {

//   app.get('/hello', (req, res) => { 
//     res.send('Life is good!') 
//   }); 
//   app.get('/', (req, res) => { 
//     res.send('Welcome to Full Stack Development!') 
//   }); 
// }


export default function Hello(app) { 
  const sayHello = (req, res) => { 
    res.send("Life is good!"); 
  }; 
  const sayWelcome = (req, res) => { 
    res.send("Welcome to Full Stack Development!"); 
  }; 
  app.get("/hello", sayHello); 
  app.get("/", sayWelcome); 
} 
