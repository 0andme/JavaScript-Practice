const url = "https://www.omdbapi.com/?i=tt3896198&apikey=7035c60c123"

// 일반 함수로 fetchMovie() 선언
function fetchMovie() {
    return new Promise(async (resolve) => {
        const res = await fetch(url)
        const data = await res.json()
        
        resolve(data)

    })
}


fetchMovie().then(movie => {
    console.log("영화정보 출력-비동기 함수", movie)
})

;
(async function () {
    const movie = await fetchMovie()
    console.log("영화정보 출력-즉시 실행함수", movie)
})()