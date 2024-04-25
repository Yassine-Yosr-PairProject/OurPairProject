
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
        $("body").append(`
            ${ele.movieName}`)
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
Web.Movie1 = addMovie('6 Hours Away', "Crime", "2024-04-19",)
Web.Movie2 = addMovie("Villians Incorported", 'Comedy', "2024-04-19")
Web.Movie3 = addMovie("The Grey Man", "Action", "2022-07-22")
Web.Movie4 = addMovie("Harry Potter:Hogwarts Mystery", "Sci-Fiction", "2024-04-25")

a.displayAll()


























































function each(coll, f) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            f(coll[i], i);
        }
    } else {
        for (var key in coll) {
            f(coll[key], key);
        }
    }
}

function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
        if (predicate(element, i)) {
            acc.push(element);
        }
    });
    return acc;
}

function map(array, func) {
    var acc = [];
    each(array, function (element, i) {
        acc.push(func(element, i));
    });
    return acc;
}

function reduce(array, f, acc) {
    if (acc === undefined) {
        acc = array[0];
        array = array.slice(1);
    }
    each(array, function (element, i) {
        acc = f(acc, element, i);
    });
    return acc;
}