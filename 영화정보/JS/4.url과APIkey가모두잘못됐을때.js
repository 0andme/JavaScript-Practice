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

