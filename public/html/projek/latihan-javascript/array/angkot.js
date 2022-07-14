var penumpang, tes,ting;
penumpang = ["tes","ting"];

var masukangkot = function masukangkot(nama,penumpang){
    if(penumpang.length === 0){
        penumpang.push(nama);
        return penumpang;
    } else {
        for(i = 0; i < penumpang.length; i++){
            if(penumpang[i] === undefined){
                penumpang[i] = nama;
                return penumpang;
            } else if(penumpang[i] === nama){
                console.log("terjadi kesalah! : penumpang sudah ada didalam angkot")
                return penumpang;
            } else if(i == penumpang.length - 1) {
                penumpang.push(nama);
                return penumpang;
            }
        }
    }
}

var kurangangkot = function kurangangkot(nama,penumpang){

    if(penumpang.length == undefined){
        console.log("terjadi kesalahan : angkot masih kosong !");
        
    } else {
        for(i = 0; i < penumpang.length; i++){
            if(penumpang[i] == nama){
                penumpang[i] = undefined;
                return penumpang;    
            } else if(i == penumpang.length - 1) {
                console.log("terjadi kesalahan : " + nama + " tidak ada didalam angkot");
                return penumpang;    
            }
            
            
        }
    }

    return penumpang;
}
