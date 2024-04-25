
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