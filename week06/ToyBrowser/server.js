const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('x-Foo', 'bar');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`<html maaa=a >
    <head>
        <style>
    body div #myid{
        width:100px;
        background-color: #ff5000;
    }
    body div img{
        width:30px;
        background-color: #ff1111;
    }
        </style>
    </head>
    <body>
        <div>
            <img id="myid"/>
            <img />
        </div>
    </body>
    </html>`);
});

server.listen(8089, () => {
    console.log('服务已启动在8089端口！');
});