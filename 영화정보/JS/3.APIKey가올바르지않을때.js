// 1. main.js 의 url선언부분 아래로 바꾸기
const url= "https://www.omdbapi.com/?i=tt3896198&apikey=7035c60c123"
// 개발자도구에서 콘솔에 뜬 오류 클릭하고(Network 탭에서 )Fetch/XHR 누르고 헤더를 본다.
// header 의 상태 코드 401
// 검색창에 401 error 검색 
// 인증 자격이 증명되지 않을때 나타나는 오류
// 발급받은 API가 아니라서 나타나는 오류
// Header 옆의 preview를 누르면
// Error: "Invalid API key!"
// Response: "False"
// 라는 것을 볼수 있음

// 2. fetchMovie()를 아래와 같이 변경
// try-catch 문
async function fetchMovie() {
    try {
        const res = await fetch(url)
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}
// 일반적으로 에러가 나면 실행이 멈추지만
// try-catch 문을 사용하면 try에서 어떤 에러가 나도 다음단계로 넘어갈 수 있음
// 에러가 발생한 자리 다음 try문은 실행되지 않는다 -> catch문으로 넘어간다
// catch(error){}의 error 매개변수를 통해 에러를 확인해볼 수 있다 

// API key가 잘못된 url일때 아래와  같은 에러를 만날 수 있다

// {Response: 'False', Error: 'Invalid API key!'}
// Error: "Invalid API key!"
// Response: "False"
// [[Prototype]]: Object

// 3. fetchMovie()를 아래와 같이 변경
// try-catch 문
async function fetchMovie() {
    try {
        const res = await fetch(url)
        console.log("정상")
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

// 원래라면 "정상"이라는 메시지가 나오면 안되는데 나옴
// 이는 단순히 API key가 잘못된 것은 error가 아님을 의미함

// 4. URl 변경
// 아예 주소 자체가 달라져야함-아래와 같이 변경
const url = "https://www.omdbpi.com/?i=tt3896198&apikey=7035c60c"
// try문에서 오류가 나서 catch문의 error출력 함수가 실행되는 것을 확인
// 아래와 같은 오류 코드 출력
// TypeError: Failed to fetch
//     at fetchMovie (main.js:5)
//     at main.js:16
// 위의 출력보다 짧게 출력하기 위해선 
// console.log(error.message)을 작성한다.
// 출력 결과
// Failed to fetch



