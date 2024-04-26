function makeApp(nameProj) {
    return {
        nameProj: nameProj,
        movieList: [],
        addMovie: addMovie,
        displayAll: displayAll,
        displayFav: displayFav
    }
}
var Web = makeApp('Te3ba la3bed')
Web.addMovie('6 Hours Away', "Crime", "2024-04-19", "../images/6hoursaway.jpg", 4, "It follows ex-Marine Chris Montano after his wife goes missing during a business trip. He then finds himself in a race against time to save her.")
Web.addMovie("Damaged", "Crime", "2024-04-12", "../images/dam.jpg", 3, "A Chicago detective travels to Scotland after an emerging serial killer’s crimes match those that he investigated five years earlier, one of which was the crime scene of his murdered girlfriend")
Web.addMovie("Villains Incorporated", 'Comedy', "2024-04-19", "../images/villans.jpg", 3, "After the death of their boss, Beatrix, Cain and Harold are left destitute living in an abandoned grocery store. Beatrix is determined that they will fight on their own and take over the world by any means necessary.")
Web.addMovie("Love,Divided", "Comedy", "2024-04-12", "../images/love.jpg", 2, "Valentina is a young pianist starting over. Her neighbor David is an inventor who hates noise. And a paper-thin wall is about to become their matchmaker.")
Web.addMovie("The Grey Man", "Action", "2022-07-22", "../images/theGreyMan.webp", 4, "When the CIA's most skilled operative, whose true identity is known to none, accidentally uncovers dark agency secrets, a psychopathic former colleague puts a bounty on his head, setting off a global manhunt by international assassins.")
Web.addMovie("Civil War", "Action", "2024-04-10", "../images/civil.jpg", 3, "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.")
Web.addMovie("The Shawshank Redemption", "Drama", "1994-09-23", "../images/redemption.jpg", 5, "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.")
Web.addMovie("Scoop", "Drama", "2024-04-05", "../images/sccop.jpg", 3, "Inspired by real events, this fictional dramatization gives an insider account of how the women of Newsnight secured Prince Andrew's infamous interview.")
Web.addMovie("Harry Potter:Hogwarts", "Sci-Fiction", "2024-04-25", "../images/harry potter.jpg", 5, "Wizarding World fans put their Harry Potter knowledge to the test for the ultimate honor to be named House Cup champion.")
Web.addMovie("Divergent", "Sci-Fiction", "2014-03-14", "../images/div.jpg", 5, "In a world divided into factions based on personality types, Tris learns that she's been classified as Divergent and won't fit in. When she discovers a plot to destroy Divergents, Tris and the mysterious Four must find out what makes Divergents dangerous before it's too late.")

$("#select-movie").on("click", function (e) {
    search($("#input-value").val(), $("#select-cat").val())
});

function search(keyword, cat) {
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
            <div class = "movie-section">
            <img src="${arr[i].image}" width="100px" height="100px">
            <h4>${arr[i].movieName}</h4>
            <span class="material-symbols-outlined fav-icon"  onClick="handleFavIcon(this,'${i}')">
             favorite
            </span>
            <button class="detail-btn" id="${i}">
                More
            </button>
            </div>`
        )
    }
    handleDetail()
}

function handleFavIcon(e, id) {
    var fav = localStorage.getItem("fav")
    if (fav === null) {
        fav = []
    } else {
        fav = JSON.parse(fav)
    }
    if (e.style.backgroundColor !== "red") {
        e.style.backgroundColor = "red";
        fav.push(Web.movieList[id])
        window.localStorage.setItem("fav", JSON.stringify(fav))
    }
}


function handleDetail() {
    var arr = Web.movieList
    var detailBtns = $(".detail-btn")
    for (let i = 0; i < detailBtns.length; i++) {
        detailBtns[i].addEventListener("click", function (e) {
            var x = e.target.getAttribute("id")
            $(".movies").hide()
            $("body").append(`<div class="detail-app">
            <div>
            <img src="${arr[x].image}" width="100px" height="100px">
            <h4 class= "name">${arr[x].movieName}</h4>
            </div>
            <div>
            <p class = "date">${arr[x].releaseDate}</p>
            <p class ="desc">${arr[x].Desc}</p>
            </div>
            </div>`)
            rate()
        })

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
function displayFav() {
    var fav = localStorage.getItem("fav")
    fav = JSON.parse(fav)
    $(".fav-movie").append(`
    <button id ="home"><a href="/OurPairProject/home/home.html"><span class="material-symbols-outlined">
            home
            </span></a></button>`)
    for (let i = 0; i < fav.length; i++) {
        $(".fav-movie").append(`
            <div class="favorite">
                <img src="${fav[i].image}" width="100px" height="100px">
                <h4>${fav[i].movieName}</h4>
                <p>${fav[i].releaseDate}</p>
                <p>${fav[i].Desc}</p>
                <p>${fav[i].rating}</p>
            </div>
        `)
    }
}
Web.displayAll(Web.movieList)
Web.displayFav()

























































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