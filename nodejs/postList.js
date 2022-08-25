
let post = [
    {konu : "yazılım" , yazi : "Yazılıma çok geç başladım keşke daha erken başlasaydım" , yazar : "mozer", time : new Date().getFullYear()},
    {konu : "hobi" , yazi : "Saz çalmanın bana olan pozitif etkileri çok fazla" , yazar : "aozer", time : new Date().getFullYear()},
    {konu : "yazılım" , yazi : "Neden Back End ?" ,  yazar : "bozer", time : new Date().getFullYear()},
    {konu : "ekonomi" , yazi : "Bu da gecer ya hu" , yazar : "mozer", time : new Date().getFullYear()},
]

const postList = () => {
    post.map((posts) => {
    console.log(`${posts.konu} konu başlıklı ${posts.yazar}'in ${posts.time} yılında yazdığı yazı : ${posts.yazi} ` );
    return new Promise((resolve, reject) => {
            resolve("Post Listesi");
            reject("Liste Yüklenemedi");
        })
    })
}

let addPost = (newPost) => {
    post.push(newPost);
    console.log("Post Verisi Alınıyor")
    return new Promise((resolve, reject) => {

        if(newPost)
            resolve("Yeni Post Eklendi");
        else
            reject("Yeni Post Yüklenirken Hata Oluştu");
    })
}


async function postEvent() {
    try {
        postList();
        const addpost = await addPost({konu : "Deneme" , yazi : "Elini Koda Bula" , yazar : "Kodluyoruz", time : new Date().getFullYear()});
        console.log(addpost);
        postList();
    } catch (error) {
        console.log(error);
    }
} 


postEvent();