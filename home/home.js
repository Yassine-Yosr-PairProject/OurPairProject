
$(document).ready(function () {
    function makeApp(nameProj) {
        return {
            nameProj: nameProj,
            movieList: [],
            addMovie: addMovie,
            displayAll: displayAll
        }
    }

    $("#select-movie").on("click", function () {

    })

    // var search = document.getElementsByClassName("search")
    // $("search").on('click',function(string){
    //     $(input-value.val()===string){
    //         return string
    //     }
    // })

    function addMovie(movieName,Category,releaseDate) {
        this.movieList.push({
            movieName:movieName,
            Category:Category,
            releaseDate:releaseDate
        });
    }
    var Movie1 = makeApp('6 Hours Away',"Crime","2024-04-19",)
    var Movie2 = makeApp("Villians Incorported",'Comedy',"2024-04-19")
    var Movie3 = makeApp("The Grey Man","Action","2022-07-22")
    var Movie4 = makeApp("Harry Potter:Hogwarts Mystery","Sci-Fiction","2024-04-25")
    console.log("hello")
    function displayAll() {
        this.movieList.map(function (ele) {
            $("body").append(`
            ${ele.namee}`)
        })
    }



    a.addMovie('azf')
    a.addMovie('azf')
    a.addMovie('azf')

    a.displayAll()
    //hthdf
});