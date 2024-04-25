
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
                <img src="${ele.image}" width="100px" height="100px">
                <h4>${ele.movieName}</h4>
                <p>${ele.releaseDate}</p>
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
Web.addMovie('6 Hours Away', "Crime", "2024-04-19","https://static.wixstatic.com/media/af1176_cd1cc93602cf465fa5e78b3146f4c505~mv2.jpg/v1/fill/w_560,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_6044_JPG.jpg")
Web.addMovie("Villians Incorported", 'Comedy', "2024-04-19","https://static.wixstatic.com/media/af1176_cd1cc93602cf465fa5e78b3146f4c505~mv2.jpg/v1/fill/w_560,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_6044_JPG.jpg")
Web.addMovie("The Grey Man", "Action", "2022-07-22","https://static.wixstatic.com/media/af1176_cd1cc93602cf465fa5e78b3146f4c505~mv2.jpg/v1/fill/w_560,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_6044_JPG.jpg")
Web.addMovie("Harry Potter:Hogwarts Mystery", "Sci-Fiction", "2024-04-25","https://static.wixstatic.com/media/af1176_cd1cc93602cf465fa5e78b3146f4c505~mv2.jpg/v1/fill/w_560,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_6044_JPG.jpg")
console.log(Web)
Web.displayAll()
























































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