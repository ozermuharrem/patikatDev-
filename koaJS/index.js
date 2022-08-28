/*
Ödev 6


Koa.js ile web sunucumuzu yazalım.
Öncelikle şunu belirteyim. Koa.js hakkında konuşmadığımızı biliyorum 
bu ödev ilk aşamada bizi zorlayacak. Buradaki amacım yeni bir teknolojiye başlama 
cesareti oluşturmak ve hata yapma özgürlüğümüz olduğunu göstermek.

*koa paketini indirelim.
*index, hakkimda ve iletisim sayfaları oluşturalım.
*Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
*port numarası olarak 3000'i kullanalım.

*/

 

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const pointer = new Router();

pointer.get('/' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>Index sayfasına hoşgeldiniz</h1>'
})

pointer.get('/hakkimda' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>Hakkımda sayfasına hoşgeldiniz</h1>'
})

pointer.get('/iletisim' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>İletişim sayfasına hoşgeldiniz</h1>'
})


app.use(pointer.routes())

app.listen(3000,() =>{
    console.log(`Sunucu Baslatıldı.`)
})