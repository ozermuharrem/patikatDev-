/*
Ödev 5


Kendi Web Sunucumuzu yazalım.
Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

*createServer metodunu kullanacağız.
*index, hakkimda ve iletisim sayfaları oluşturalım.
*Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
*port numarası olarak 5000'i kullanalım.
Kolay gelsin.

*/

const http = require('http');

const server = http.createServer((req,res) => {
    console.log("Bir istek Gönderildi");
    const url = req.url;

    if(url === '/')
    {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2> Index Sayfasina Hosgeldiniz");
    }
    else if( url === '/hakkimda')
    {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>Hakkimda Sayfasina Hosgeldiniz");
    }
    else if(url === '/iletisim')
    {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>Iletisim Sayfasina Hosgeldiniz");
    }
    else{
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h2> 404 Sayfa Bulunamadi");
    }
    res.end();
});

const port = 5000;

server.listen(port, () => {
    console.log(`Server port ${port} da baslatildi`);
})