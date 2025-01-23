// ----2025/01/07

vscode 輸入指令
-- gitbash 本機指令用
github 雲端
sourcetree 介面

git add . //我想要上傳那些檔案
git commit -m 'xxx' //這次我做了甚麼事
git push origin master //推到雲端上


chrome
ctrl shift j > 檢查

// ----2025/01/07-----

// ----2025/01/09-----

if( ){
    console.log(1)
}else{
    console.log(2)
}
ex: 1 --> 1
ex: 100000 --> 1
ex: 0 --> 2 //看成false
ex: -1 --> 1 //一樣是值
ex: 0 --> 2
ex: true --> 1
ex: false --> 2
ex: false == flase --> 1 //會成立，可以想成負負得正
ex: false == "false" --> 2
ex: 1 == "1" --> 1 //如果input is num，則output只考慮引號內的值
ex: 1 === "1" --> 2 //input is num, !=str
ex: true || false --> 1 // || means or, 如果有其一是true則視為true所以是1
ex: 0 || 1 --> 1

// -------

console.log( || )
ex: 0 || 1 --> 1
ex: 1 || 0 --> 1
ex: 100 || 200 --> 100
ex: false || 200 --> 200
ex: null || 200 --> 200
ex: undefined || 200 --> 200
keypoint : 0, false, null = false 

// -------

ex: const arrList = [1,2,3,4,5];
    arrList.find(item => item === 3); --> 3

ex: const arrList = [1,2,3,4,5];
    arrList.find(item => item === 5); --> 5

ex: const arrList = [1,2,3,4,5];
    arrList.find(item => item === 6); --> undefined

ex: const arrList = [{k1:111},{k1:222}];
    arrList.find(item => item.k1 === 222); --> {k1:222}

// -------

ex: const arrList = [1,2,3,4,5];
    arrList.filter(item => item === 3); --> [3]

ex: const arrList = [1,2,3,4,5];
    arrList.filter(item => item === 5); --> [5]

ex: const arrList = [{k1:111},{k1:222}];
    arrList.filter(item => item.k1 === 111); --> [{...}] //讀取{k1: 111}

ex: const arrList = [{k1:111},{k1:222}];
    arrList.filter(item => item.k1 === 2222); --> [] 
    

HW: 
1.修正undefined&price
2.更新menu
// ----2025/01/09-----

// ----2025/01/15-----
for 迴圈
1. i初始值
2. i到哪裡
3. i現在是多少 (i++ / i+=1 / i=i+1)

ex: for (let i = 0; i < 10; i++) {
         console.log(i)
        }
        --> 0 1 2 3 4 5 6 7 8 9

ex: const arr = [1, 2, 3, 4, 1, 1, 1, 1]
        (1) console.log(arr.length) --> 8
        (2) console.log(arr[5]) --> 1
        (3) for (let i = 0; i < arr.length; i++) {
            console.log(arr[i])
        }
        --> 1 2 3 4 1 1 1 1


ex: const obj = {
            "k1": "hello",
            "k2": "world"
        }
        console.log(obj.k1) --> hello

ex: const json = [
            {
                "k1": "hello",
                "k2": "world"
            }, 
            {
                "k1": "hello2",
                "k2": "world3"
            }
        ]

        for (let i = 0; i < 2 ; i++) {
            console.log(json[i].k1, json[i].k2)
        }
        --> hello world
            hello2 world3


HW
1.產品圖片
(const tea = [
    {
        "type":"紅茶",
        "img":"http://xxxx",
        "price":123,
        "constent"
    },    
    {
        "type":"紅茶",
        "img":"http://xxxx",
        "price":123,
        "constent"
    }

]

coffee

card.innerHTML = )
// ----2025/01/15-----
