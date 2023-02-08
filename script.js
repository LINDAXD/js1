// let bts = {
//     name : "방탄소년단",
//     num:7
// }

// let name = bts.name
// let num = bts.num

//let {name , num}=bts

//둘 다 같은 문법임
// console.log(name,num)

//------------------------------------------------------------------------------------------

// let bts = {
//     name : "방탄소년단",
//     num:7
// }

// let nameValue = bts.name
// let numValue = bts.num

// console.log(nameValue,numValue)

//이처럼 value 값을 위랑 아래랑 다르게 주고 싶을 경우는 위의 경우만 사용 가능함

//------------------------------------------------------------------------------------------
// let name ="noona"
// let age = 18

//console.log("제 이름은 "+name,"입니다 제 나이는"+age+"입니다")

// console.log(`제 이름은 ${name} 입니다 제 나이는 ${age}입니다`)
//귀찮으니까 `(~) 백핑을 한번만 이용해서 쓰고 싶은 문장을 쓸 수 있음

//------------------------------------------------------------------------------------------

// let array = [1,2,3]
// let a = array[0]
// let b = array[1]
// let c = array[2]

// console.log(a,b,c)
//------------------------------------------------------------------------------------------
// let array =[1,2,3]
// let [a,b,c]=array
// console.log(a,b,c)

//두 값은 일치함

//------------------------------------------------------------------------------------------
// let array =[1,2,3]
// let [a,...rest]=array
//spread연산자
// console.log(rest)

//------------------------------------------------------------------------------------------

// let person = {
//     name:"noona",
//     age:19,
//     cute:true
// }

// let {name,...restInfo} = person
// console.log(name, restInfo)

//값은 noona { age: 19, cute: true }
//noona는 빠져나오게 됨
//------------------------------------------------------------------------------------------

// let a = [1,2]
// let b = [3,4]
// let c = [5,6]

//  let result = a.concat(b,c)
//  console.log(result)

//  let result = [...a,...b,...c]
//  //...연산자
//  console.log(result)


// function foo(){
//     console.log(hello)
// }

// let foo = ()=>{
//     console.log("hello")
// }
// //=>가 function을 대체함
//------------------------------------------------------------------------------------------
// function foo(){
//     return "haha"
// }

// let foo = ()=>"haha"
// //함수가 한줄이고 리턴만 있으면 {} 생략가능.
// let foof = ()=>{
//     console.log("haha")
//     return "kkk"
// }
// //함수가 두 줄 이상일 경우 아래처럼 리턴 포함
// console.log(foo())
// //위와 아래는 같은 함수
//------------------------------------------------------------------------------------------

// let age = 17
// let person = {
//     name : "hege",
//     age : 20,
//     getInfo:function(){
//         console.log(age)
//     }
// }
// person.getInfo()
//값은 17이 나옴
//20으로 가져오려면 console.log(this.age)를 사용해야 함 this : 나 - 함수를 부르는 객체
//function과 => (화살표) 같이 사용할 수 있지만 차이점 this 사용 유/무
//function this 사용 가능하시만 => this는 사용 불가


//배열함수
// let names = ["a","b","c","d","e","f"]

// for(let i = 0; i<names.length; i++){
//     console.log(names[i])
// }

// // function printName(item){
// //     console.log(item)
// // }
// // //item은 바꿔도 됨

// // names.forEach(printName)
// // //forEach : 반환값이 없다, 단순 for문과 같이 작동한다.
// // //모든 배열함수가 함수를 매개변수로 받음 이 함수에 item을 매번 넣어줌

// names.forEach((item)=>{console.log(item)})
// //위와 같음
// names.forEach((item,index)=>{console.log(item,index)})
// //인덱스 번호까지 표시 가능


// let data = names.map((item)=>{
//     return item
// })
// console.log(data)
// // map : 반환값을 배열에 담아 반환한다.
// //반드시 배열을 반환함.
//------------------------------------------------------------------------------------------
//맵 쓰는 예시

let ceoList = [
    {name : "Larry Page",age:23,ceo:true},
    {name : "Tom Cook",age:40,ceo:true},
    {name : "Elon Mush",age:55,ceo:false},
    {name : "LEE lee",age:33,ceo:false}
]

let data = ceoList.map((item)=>{
    return item.age
})
console.log(data)
//위처럼 전체 값에서 원하는 데이터 값만 받아오고 싶을 때 map 사용


//------------------------------------------------------------------------------------------

let data2 = ceoList.filter((item)=>{
    return item.age==23
})
console.log(data2)

// let data3 = names.filter((item)=>{
//     return item.startsWith("L")
// })
// console.log(data3)
// //왜 값이 안나오지
// //filter: 조건에 충족하는(true) 아이템만 배열에 담아 반환한다.

let data4 = names.some((item)=>{
    return item.startsWith("A")
})
console.log(data4)
//값이 있으면 true 없으면 false로 나옴
//some: 조건에 충족하는 아이템이 하나라도 있으면 true 반환, 아니면 flase.

let data5 = names.every((item)=>{
    return item.length>0
})
console.log(data5)
//모두가 이름의 길이가 0보다 크냐고 묻는 식
//every: 모든 배열에 아이템이 조건을 충족하면 true 반환, 아니면 false.

let data6 = names.find((item)=>{
    return item.startsWith("L")
})
console.log(data6)
//filter는 결과를 배열에 담아서 주고
//find는 해당 값만 하나 준다.
//filter는 조건에 속하는 애들 다 반환
//find는 첫번째로 찾은 하나만 반환 . 정확한 값 딱 하나만 찾기에 좋음
//find : 조건에 충족하는 아이템 하나만 반환(여러개라면 첫번째것만 반환)

let data7 = names.findIndex((item)=>{
    return item=="Larry Page"
})
console.log("findIndex:",data6)
//인덱스 번호를 찾아줌.
//findIndex : 조건에 충족하는 아이템의 인덱스값 반환 (여러개라면 첫번째아이템의 인덱스번호만 반환)