// publish-tool 唤起 authURI

// publish-server 获取 access_token
{
    let state = 'abc123';
    let client_id = 'Iv1.07f900518d95e9c3';
    let client_secret = '17a55911de0106601152c5c40886a17f53da5b87';
    let redirect_uri = encodeURIComponent('http://localhost:8000');

    // TODO: 1 客户端-浏览器 pubulish-tool
    let authURI = `https://github.com/login/oauth/authorize?client_id=Iv1.07f900518d95e9c3&redirect_uri=${encodeURIComponent('http://localhost:8000')}`

    // TODO: 2 服务器 publish-server
    let code = '191982a60dc6dbda7a91';
    let params = `code=${code}&state=${state}&client_secret=${client_secret}&client_id=${client_id}&redirect_uri=${redirect_uri}`;

    let xhr = new XMLHttpRequest;

    xhr.open('POST', `https://github.com/login/oauth/access_token?${params}`, true);
    xhr.send(null);

    xhr.addEventListener('readystatechange', function (event) {
        if (xhr.readyState === 4) {
            // debugger;
            console.log(xhr.responseText);
        }
    })
}

// TODO: 3 客户端/服务器 publish-tool/publish-server
{
    let token = '8285f45f9415bdf4443567d66d5488c8f27a5be2';
    xhr.open('GET', `https://api.github.com/user`, true);
    xhr.setRequestHeader('Authorization', `token ${token}`)
    xhr.send(null);

    xhr.addEventListener('readystatechange', function (event) {
        if (xhr.readyState === 4) {
            // debugger;
            console.log(xhr.responseText);
        }
    })
}