const url = "https://www.omdbapi.com/?i=tt3896198&apikey=7035c60c"

// 1. async await패턴사용
// async는 await을 감싸는 함수에 붙인다
async function fetchMovie() {
    //정보를 fetch 가져오고 기다렸다가 처리가 끝나면 res에 저장
    const res = await fetch(url)
    // res를 분석(파싱)
    return await res.json()
}


// 2. 비동기 함수
function fetchMovie() {
    return new Promise(resolve => {
        fetch(url)
            .then(res => res.json())
            .then(res => resolve(res))
    })
}

console.log("promise 객체 출력-비동기 함수", fetchMovie()) // promise 객체 출력