
function makeApp(nameProj) {
    return {
        nameProj: nameProj,
        movieList: [],
        addMovie: addMovie,
        displayAll: displayAll
    }
}

$("#select-movie").on("click", function () {

});

var filteredMakeList =[]
 
function search(arr){
     filteredMakeList = filter(arr,function(ele){
         return ele===movieList(ele)
     })
 }


function displayAll() {
    this.movieList.map(function (ele) {
        $(".movies").append(`
            <div>
                <img src="${ele.image}" >
                <h4>${ele.movieName}</h4>
                <p>${ele.releaseDate}</p>
                <p>${ele.rating}</p>
            </div>`
        )
    })
}

function addMovie(movieName, Category, releaseDate, image, rating) {
    this.movieList.push({
        movieName: movieName,
        Category: Category,
        releaseDate: releaseDate,
        image: image,
        rating: rating
    });
}
var Web = makeApp('Te3ba la3bed')
Web.addMovie('6 Hours Away', "Crime", "2024-04-19","../images/6hoursaway.jpg",4)
Web.addMovie("Villians Incorported", 'Comedy', "2024-04-19","../images/villans.jpg",3)
Web.addMovie("The Grey Man", "Action", "2022-07-22","../images/theGreyMan.webp",4)
Web.addMovie("Harry Potter:Hogwarts Mystery", "Sci-Fiction", "2024-04-25","../images/harry potter.jpg",5)
console.log(Web)
Web.displayAll()