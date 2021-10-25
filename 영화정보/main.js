// Loader class 가져오기
import { Loader } from "./utils/index.js"

const url = "https://www.omdbapi.com/?i=tt3896198&apikey=7035c60c"

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
// loader 인스턴스 생성
new Loader({
    el: ".loading",
    color:"red"
})

fetchMovie()
    .then(movie => {
        // movie 객체 출력
        console.log("영화정보 출력-비동기 함수", movie)
        // html 요소 찾기
        const movieEl = document.querySelector(".movie")
        const titleEl = movieEl.querySelector(".movie__title")
        const posterEl = movieEl.querySelector(".movie__poster")
        const posterImgEl = posterEl.querySelector("img")
        // 요소에 내용 넣기
        titleEl.textContent = movie.Title
        posterImgEl.src = movie.Poster
    })
    .catch((errorMsg) => {
        console.log(errorMsg)
        const errEl = document.createElement('div')
        errEl.textContent = errorMsg
        document.body.append(errEl)
    })
    .finally(() => {
        console.log("finally-then-catch 결과")

    })


// ;(async function () {
//     try {
//         const movie = await fetchMovie()
//         console.log("영화정보 출력-즉시 실행함수", movie)
//     } catch (errorMsg){
//         console.log(errorMsg)
//         const errEl = document.createElement('div')
//         errEl.textContent = errorMsg
//         document.body.append(errEl)

//     }finally{
//         console.log("finally-async-await 결과")
//     }
// })()