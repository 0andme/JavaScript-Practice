// 1. index.html 요소 추가
//html 아래 코드 body 태그 안에 추가
<div class="movie">
    <div class="loading">Loading...</div>
    <div class="movie__title"></div>
    <div class="movie__poster">
        <img src="" alt=""/>
    </div>
</div>

//2. main.js의 .then 함수 실행부 아래 코드로 변경
// 나머지 코드는 변경 없음
fetchMovie().then(movie => {
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
// movie 객체를 열어보면(콘솔로 찍어서 열기)
// Title: "Guardians of the Galaxy Vol. 2"
// Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
// 정보가 들어있음을 확인할 수 있다

// 화면에 뮤비 이름과 포스터가 잘 출력되는지 확인 하면 됨