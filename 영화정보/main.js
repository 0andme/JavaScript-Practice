const url = "https://www.omdbapi.com/?i=tt3896198&apikey=7035c60c123"

// 일반 함수로 fetchMovie() 선언
function fetchMovie() {
    return new Promise(async (resolve, reject) => {
        const res = await fetch(url)
        const data = await res.json()
        if (data.Error) {
            // reject(data)
            // 혹은
            reject(data.Error)
        }
        resolve(data)

    })
}

fetchMovie()
    .then(movie => {
        console.log("영화정보 출력-비동기 함수", movie)
    })
    .catch((errorMsg) => {
        console.log(errorMsg)
        const errEl = document.createElement('div')
        errEl.textContent = errorMsg
        document.body.append(errEl)
    })


;(async function () {
    try {
        const movie = await fetchMovie()
        console.log("영화정보 출력-즉시 실행함수", movie)
    } catch (errorMsg){
        console.log(errorMsg)
        const errEl = document.createElement('div')
        errEl.textContent = errorMsg
        document.body.append(errEl)

    }
})()