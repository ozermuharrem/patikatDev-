const fs = require("fs");

const dosyaEkleme = (dosyaUzantisi, data) => {
  fs.writeFile(dosyaUzantisi, data, (err) => {
    if (err) 
        console.log(err);
  });

  return new Promise((resolve, reject) => {
    resolve("Dosya Eklendi");
    reject("Dosya Eklenemedi");
  });
};

const dosyaOkuma = (dosyaUzantisi, dilDestegi) => {
  fs.readFile(dosyaUzantisi, dilDestegi, (err, data) => {
    if (err) 
        console.log(err);
    else 
        console.log(data);
  });

  return new Promise((resolve, reject) => {
    resolve("Dosya Okundu");
    reject("Dosya Okunamadı");
  });
};

const veriGuncelleme = (dosyaUzantisi, addData) => {
  dosyaEkleme(dosyaUzantisi, addData);
  return new Promise((resolve, reject) => {
    resolve("Dosya Güncellendi");
    reject("Dosya Güncellenemedi");
  });
};

const dosyaSilme = (dosyaUzantisi => {
    fs.unlink(dosyaUzantisi, (err) => {
        if (err) 
            console.log(err);
      });
      return new Promise((resolve, reject) => {
        resolve("Dosya Silindi");
        reject("Dosya Silinemedi");
      });
    
});

async function fileSystem() {
    try{
        const addFile = await dosyaEkleme(
          'employees.json',
          '{"name": "Employee 1 Name", "salary": 2000}'
        );
        console.log(addFile);
        
        const readData = await dosyaOkuma('employees.json', 'utf8');
        console.log(readData);

        const upDate = await veriGuncelleme('employees.json','{"name": "Employee 2 Name", "salary": 2010}');
        console.log(upDate);
        

        const removeFile = await dosyaSilme('employees.json');
        console.log(removeFile)

    }
    catch(error){
        console.log(error)
    }
}

fileSystem();


// fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', (err) => {
//     if(err)
//         console.log(err);
//     else
//         console.log("Dosya Oluşturuldu")
// });

// fs.readFile('employees.json','utf8',(err,data) => {
//     if(err)
//         console.log(err);
//     else
//         console.log(data);
// });

// fs.writeFile('employees.json','\n// yeni veri \n{"name": "Employee 2 Name", "salary": 2010}', (err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log("Dosyaya Yeni Veri Eklendi");
//         fs.readFile('employees.json','utf8',(err,data) => {
//             if(err)
//                 console.log(err);
//             else
//                 console.log(data);
//         })

//     }
// })

// fs.unlink('employees.json',(err) => {
//     if(err)
//         console.log(err)
//     else
//         console.log("Dosya Silindi")

// })
