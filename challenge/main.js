

const items = [
    [14, 93, 89, 51, 85, 59, 33],
    [69, 27, 40, 76, 25, 21, 55],
    [55, 60, 3, 28, 49, 5, 91],
    [19, 56, 92, 66, 53, 80, 13]
]

const sumFx = (array) => {//配列に数を入れる
    let sum = 0
    array.forEach(val => {//foreachで配列の中身を全ていれる
        sum += val
    })
    return sum
}

const sums = items.map((items/*callback*/) => {
    return sumFx(items)//配列ごとの合計を入れる
})
console.log(sums)




//追加課題
//['a', 'b', 'c']['a']
//array.filter と同じことができるものを作る

//filter

const words = ['渋谷', '横浜', '名古屋', '神戸',];

const result = words.filter(word => word.length < 3);

console.log(result);




const num = []

for (let i = 0; i < 5; i++) {
    const floornum = Math.floor(Math.random() * 10);
    num.push(floornum);
}

const result2 = num.filter(floornum => {
    return floornum < 5;

})
console.log(result2)