const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('x-Foo', 'bar');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(
        `<html maaa=a >
    <head>
        <style>
    #container{
        width:500px;
        height:300px;
        display:flex;
        background-color:rgb(255,255,255);
    }
    #container #myid{
      width:200px;
      height:100px;
      background-color:rgb(255,0,0)
    }
    #container .c1{
      flex:1;
      background-color:rgb(0,255,0)
    }
        </style>
    </head>
    <body>
        <div id="container">
          <div id="myid"></div>
          <div class="c1"></div>
        </div>
    </body>
    </html>`);
});

server.listen(8089, () => {
    console.log('服务已启动在8089端口！');
});