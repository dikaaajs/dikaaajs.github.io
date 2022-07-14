function angkot(supir,penumpang,trek,kas){
    this.supir = supir;
    this.penumpang = penumpang;
    this.trek = trek;
    this.kas = kas;

    this.penumpangnaik = function(nama){
        this.penumpang.push(nama);
        return this.penumpang;
    }

    this.penumpangturun = function(nama,bayar){
        if(this.penumpang == 0){
            return alert("tidak ada penumpang di angkot");
        }
    }
}

var angkot1, angkot2;
angkot1 = new angkot('supardi ningrat', [], ['cicahem', 'cilenyi'] , 0);
angkot2 = new angkot('jaya kusuma', [], ['cicalengka', 'cici'] , 0);
