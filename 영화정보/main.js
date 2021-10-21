const url = "https://www.omdbapi.com/?i=tt3896198&apikey=7035c60c123"

async function fetchMovie() {
    try {
        const res = await fetch(url)
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

console.log("Promise 객체 출력", fetchMovie())

// 영화 정보 출력 - 비동기 함수로 출력
fetchMovie().then(movie => {
    console.log("영화정보 출력-비동기 함수", movie)
})

// 영화 정보 출력 - 즉시 실행함수로 출력
;(async function () {
    const movie = await fetchMovie()
    console.log("영화정보 출력-즉시 실행함수", movie)
})()