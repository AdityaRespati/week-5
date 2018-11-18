

function meleeRangedGrouping(str) {
    var arrSplitHero=str.split(',')
    var arrSplitType=[]
    var arrRanged=[]
    var arrMelee=[]

    for(var i=0; i<arrSplitHero.length; i++){
        arrSplitType.push(arrSplitHero[i].split('-'))
    }

    for(var j=0; j<arrSplitType.length; j++){
        if(arrSplitType[j][1]==='Ranged'){
            arrRanged.push(arrSplitType[j][0])
        }
        else if(arrSplitType[j][1]==='Melee'){
            arrMelee.push(arrSplitType[j][0])
        }
    }
    
    return [ arrRanged, arrMelee ]
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []