// alert costum end

function nilai (a){
    if(a == '3 kali'){
        return 1;
    }else if (a == '100 kali 😜'){
        return 3;
    }else if (a == '0'){
        return 0;
    }
}


function nilai2 (b){
    if(b == 'belum'){
        return 0;
    }else if (b == 'sudah'){
        return 3;
    }else if (b == 'sedang proses pdkt'){
        return 1
    }
}

function nilai3 (c){
    if(c == 'kaori 💀'){
        return 0;
    }else if (c == 'komi 🐸'){
        return 3;
    }
}

function nilai4 (d){
    if(d == 'pargoy'){
        return 1;
    }else if (d == 'membelikan dia nasi padang'){
        return 2;
    }else if (d == 'ajak dia jalan jalan'){
        return 3;
    }
}

function nilai5 (e){
    if(e == 'hitam'){
        return 1;
    }else if (e == 'ganteng'){
        return 2;
    }else if (e == 'kedinginan'){
        return 3;
    }
}


const form = document.querySelector('#submit')
submit.addEventListener('click', function(){
    nama = document.forms['qna']['nama'].value;
    waifu = document.forms['qna']['waifu'].value;
    poin1 = document.forms['qna']['poin1'].value;
    poin2 = document.forms['qna']['poin2'].value;
    poin3 = document.forms['qna']['poin3'].value;
    poin4 = document.forms['qna']['poin4'].value;
    poin5 = document.forms['qna']['poin5'].value;

    
    if(waifu == ''){
        return alert('isi dulu nama waifunya coeg :V')
    } else if (nama == ''){
        return alert('isi dulu namanya coeg :v')
    }else if (poin1 == 'pilih jawabanmu'){
        return alert('ada yang belum diisi tuh')
    }else if (poin2 == 'pilih jawabanmu'){
        return alert('ada yang belum diisi tuh')
    }else if (poin3 == 'pilih jawabanmu'){
        return alert('ada yang belum diisi tuh')
    }else if (poin4 == 'pilih jawabanmu'){
        return alert('ada yang belum diisi tuh')
    }else if (poin5 == 'pilih jawabanmu'){
        return alert('ada yang belum diisi tuh')
    }

    let hasil1 = nilai(poin1);
    let hasil2 = nilai2(poin2);
    let hasil3 = nilai3(poin3);
    let hasil4 = nilai4(poin4);
    let hasil5 = nilai5(poin5);
    let hasil = hasil1 + hasil2 + hasil3 + hasil4 + hasil5
    let final = hasil / 15 * 100
    let keterangan ;
    if(final <= 75){ keterangan = 'omg 😱😱😱, ternyata kamu adalah orang yang tidak sayang dengan istri kartun anda' }
    if(final > 75){ keterangan = `selamat 🎉🎉🎉! anda adalah orang yg sangat baik, dan menyayangi istri kartun anda.semoga hubunganmu dengan ${waifu} berjalan dengan lancar 😘`}

    
    const ket = document.querySelector('#list1')
    const adachi = document.querySelector('#adachi')
    const edit = document.querySelector('#hasil')
    const ini = document.querySelector('#footer')
    edit.innerHTML = `hasil tes antum adalah ${final}. ${keterangan}`
    adachi.classList.toggle('display-none')
    ini.classList.toggle('display-none')
    
})
