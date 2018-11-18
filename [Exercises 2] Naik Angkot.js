
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var arrOutput=[]
    var asal=0
    var tujuan=0

    for (let i = 0; i < arrPenumpang.length; i++) {

        var objPenumpang = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 0
        }

        for(let j=0; j< rute.length; j++){
            if(arrPenumpang[i][1]==rute[j]){
                asal=j
            }
            if(arrPenumpang[i][2]==rute[j]){
                tujuan=j
            }
        }

        objPenumpang.bayar=(tujuan-asal)*2000
        
        arrOutput.push(objPenumpang)
    }   

    return arrOutput
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]