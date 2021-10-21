// 앞서 문제 상황은 API키가 잘못되었는데도 try문이 실행되었음
// 에러가 나오도록 해야함
// 이를 해결하기 위한 코드 

// 1. 기존의 fetchMovie()삭제하고 아래 코드 추가
function fetchMovie() {
    return new Promise(async (resolve) => {
        const res = await fetch(url)
        const data = await res.json()
        resolve()

    })
}
// promise생성자의 첫번째 인수는 콜백
// 콜백의 매개변수 resolve
// fetch 함수를 실행하고 받은 결과 res
// fetch는 비동기이므로 await을 붙임
// await이 붙은 fetch함수를 감싸는 화살표 함수에 async 키워드를 붙인다
// res를 파싱하고 이 함수 또한 await

// 2. 정확한 url 과 api key로 변경
const url = "https://www.omdbapi.com/?i=tt3896198&apikey=7035c60c"
// 위의 코드를 실행하면 아래 두 함수의 결과 값이 
//console.log("영화정보 출력-비동기 함수", movie)
// console.log("영화정보 출력-즉시 실행함수", movie)
// undefined로 나옴

// 3. fetchMovie() 코드 수정
resolve(data)
// fetchMovie()의 실행결과.then(movie=>{콘솔 출력}) 형태
// fetchMovie()의 리턴 값은 객체이고 객체안에 data가 있어야 하니까
// resolve(data)처럼 data를 매개변수로 넣어주어야 함
// new Promise객체에 대한 기본 예제 참고 - 1.Promise객체출력.js

// 4. 잘못된 API key로 변경
const url = "https://www.omdbapi.com/?i=tt3896198&apikey=7035c60c123"
// 콘솔에 객체가 보임 - 정상적인 응답이 있음을 의미.
// 컴퓨터는 받은 대로 출력한거고 그것이 에러인지는 우리가 잡아줘야함
// 아래 코드로 변경
function fetchMovie() {
    return new Promise(async (resolve,reject) => {
        const res = await fetch(url)
        const data = await res.json()
        if(data.Error)
        {
            //reject(data)
            // 혹은
            reject(data.Error)
        }
        resolve(data)

    })
}
// 받은 data에 Error이 있으면 reject를 실행하라는 의미이다.

// 5. 실행문은 아래와 같이 고친다
fetchMovie().then(movie => {
    console.log("영화정보 출력-비동기 함수", movie)
}).catch((errorMsg) => {
    console.log(errorMsg)
})
// catch()가 에러를 잡아간다.
// catch()안의 콜백은 reject가 실행되는 자리에서 실행된다
// = catch()안의 실행되는 함수가 reject니까 콜백의 매개변수가 data.Error이 된다

// 6. 추가-화면에 에러 메시지 보이기
// 아래와 같이 코드를 고친다
fetchMovie().then(movie => {
    console.log("영화정보 출력-비동기 함수", movie)
}).catch((errorMsg) => {
    console.log(errorMsg)
    const errEl=document.createElement('div')
    errEl.textContent=errorMsg
    document.body.append(errEl)
})
// 화면에 에러 메시지인 Invalid API key!가 출력된다.




