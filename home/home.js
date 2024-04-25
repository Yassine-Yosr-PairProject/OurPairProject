
function makeApp(nameProj) {
    return {
        nameProj: nameProj,
        movieList: [],
        addMovie: addMovie,
        displayAll: displayAll,
        changeRating: rate,
    }
}
var Web = makeApp('Te3ba la3bed')
Web.addMovie('6 Hours Away', "Crime", "2024-04-19", "https://cdn.europosters.eu/image/750/wall-murals/harry-potter-hogwarts-i105088.jpg", 4)
Web.addMovie("Damaged", "Crime", "2024-04-12", "https://cdn.europosters.eu/image/750/wall-murals/harry-potter-hogwarts-i105088.jpg", 3)
Web.addMovie("Villians Incorported", 'Comedy', "2024-04-19", "https://cdn.europosters.eu/image/750/wall-murals/harry-potter-hogwarts-i105088.jpg", 3)
Web.addMovie("Love,Divided", "Comedy", "2024-04-12", "https://cdn.europosters.eu/image/750/wall-murals/harry-potter-hogwarts-i105088.jpg", 2)
Web.addMovie("The Grey Man", "Action", "2022-07-22", "https://cdn.europosters.eu/image/750/wall-murals/harry-potter-hogwarts-i105088.jpg", 4)
Web.addMovie("Civil War", "Action", "2024-04-10", "https://cdn.europosters.eu/image/750/wall-murals/harry-potter-hogwarts-i105088.jpg", 3)
Web.addMovie("The Shawshank Redemption", "Drama", "1994-09-23", "https://cdn.europosters.eu/image/750/wall-murals/harry-potter-hogwarts-i105088.jpg", 5)
Web.addMovie("Scoop", "Drama", "2024-04-05", "https://cdn.europosters.eu/image/750/wall-murals/harry-potter-hogwarts-i105088.jpg", 3)
Web.addMovie("Harry Potter:Hogwarts Mystery", "Sci-Fiction", "2024-04-25", "https://cdn.europosters.eu/image/750/wall-murals/harry-potter-hogwarts-i105088.jpg", 5)
Web.addMovie("Divergent", "Sci-Fiction", "2014-03-14", "https://cdn.europosters.eu/image/750/wall-murals/harry-potter-hogwarts-i105088.jpg", 5)

$("#select-movie").on("click", function (e) {
    search($("#input-value").val(),$("#select-cat").val())
});

function search(keyword,cat) {
    var arr = Web.movieList
    var filteredMakeList = filter(arr, function (ele) {
        return ele.movieName.toLowerCase().includes(keyword.toLowerCase()) 
        && (ele.Category === cat || cat === "all")
    })
    Web.displayAll(filteredMakeList)
}



function displayAll(arr) {
    $(".movies").html("")
    $(".detail-app").hide()

    for (let i = 0; i < arr.length; i++) {
        $(".movies").append(`
            <div>
            <img src="${arr[i].image}" width="100px" height="100px">
            <h4>${arr[i].movieName}</h4>
            <span class="material-symbols-outlined fav-icon">
             favorite
            </span>
            <button class="detail-btn" id="${i}">
                detail
            </button>
            </div>`
        )
    }
    handlFavIcon()
    handleDetail()
}
function handlFavIcon() {
    var favBtns = $(".fav-icon")
    for (var i = 0; i < favBtns.length; i++) {
        favBtns[i].addEventListener("click", function (e) {
            e.target.style = "background:red;"
        })
    }
}

function rate() {
    $(".rate-input").on("keyup", function () {
        var newRate = $(".rate-input").val()
        var idx = $(".rate-input").attr("id")
        Web.movieList[idx].rating = newRate
        Web.displayAll(Web.movieList)
    })
}
function handleDetail() {
    var arr = Web.movieList
    var detailBtns = $(".detail-btn")
    for (let i = 0; i < detailBtns.length; i++) {
        detailBtns[i].addEventListener("click", function (e) {
            var x = e.target.getAttribute("id")
            $(".movies").hide()
            $("body").append(`<div class="detail-app">
            <img src="${arr[x].image}" width="100px" height="100px">
            <h4>${arr[x].movieName}</h4>
            <p>${arr[x].releaseDate}</p>
            <p>${arr[x].rating}</p>
            <a href="home.html">Home</a>
            </div>`)
            rate()
        })
        // <p>${arr[x].movieDesc}</p>
    }
}

function addMovie(movieName, Category, releaseDate, image, rating, Desc) {
    this.movieList.push({
        movieName: movieName,
        Category: Category,
        releaseDate: releaseDate,
        image: image,
        rating: rating,
        Desc: Desc
    });
}

Web.displayAll(Web.movieList)
























































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
