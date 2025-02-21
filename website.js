

document.addEventListener("DOMContentLoaded", () => {
    const selectionScreen = document.querySelector("#Selection-Screen");
    const projectSection = document.querySelector("#project");

    const modeButtons = document.querySelectorAll(".modeButton");
    const cardList = document.querySelector("#card-list");
    const gameList = document.querySelector("#game-list");

    const goBackButtons = document.querySelectorAll(".go-back");

    const cards = [
        { id: 1, name: "Nada", link: "https://nadameriem.github.io/Profile-Card/" },
        { id: 2, name: "Cerine", link: "https://cerine-it.github.io/profile-card/" },
        { id: 3, name: "Rawane", link: "https://rawane-dev.github.io/profile-card/" },
        { id: 4, name: "Ines", link: "https://ines-aouali.github.io/profile-card/" },
        { id: 5, name: "Houda", link: "https://hou-da-nour.github.io/Profile_Card/" },
        { id: 6, name: "Yousra", link: "https://yousrabch.github.io/First-challange/" },
        { id: 7, name: "Hadjer", link: "https://hadjertalbi.github.io/Hadjer/" },
        { id: 8, name: "Meriem", link: "https://benfekhadoumeriem.github.io/profile-card/" },
        { id: 9, name: "Zineb", link: "https://hemaizizineb.github.io/Profile-card/" },
        { id: 10, name: "Nawel", link: "https://chellah-nawel.github.io/First-HTML-challenge/" },
        { id: 11, name: "May", link: "https://may01-cpu.github.io/Profile-card/Profile-Card/" },
        { id: 12, name: "Cru", link: "https://cru-sudo.github.io/profile_card_/" },
        { id: 13, name: "Achraf", link: "https://achrafamalou77.github.io/OMC-Card-profile/" },
        { id: 14, name: "Douaa", link: "https://douaachahrazed21.github.io/Profile-Card/" },
        { id: 15, name: "Rachedi Meriem", link: " https://meriem-rachedi.github.io/challengen1/" },
        { id: 16, name: "Youshs", link: "https://youshs.github.io/Profile_Card/" },
        { id: 17, name: "Oumlkheir", link: "https://oumelkheirbkh.github.io/omc_first_challenge/" },
        { id: 18, name: "Lina", link: "https://lina-manel.github.io/first-challenge-OMC/" },
        { id: 19, name: "Fettomi", link: "https://fettoumi.github.io/profil__card-2/" },
        { id: 20, name: "Halla", link: "https://halla38.github.io/Victor/" },
        { id: 21, name: "Sara", link: "https://sarasdn25.github.io/victor-card/" },
        { id: 22, name: "Meriem", link: "https://derbassimeriem.github.io/profile-card-/" },
        { id: 23, name: "Rekaia", link: "https://rekaia-benhatite.github.io/Profil_Card/" },
        { id: 24, name: "Hafri Cerine", link: "https://cerinehafri.github.io/profile-card-challenge-1/" },
        { id: 25, name: "Amira", link: "https://amirailli.github.io/challenge1/" },
        { id: 26, name: "Imad", link: "https://imadzakxy.github.io/profile-insta/" },
        { id: 26, name: "Mehdi", link: " https://mehdi-prg.github.io/Profil-Card/" },
        
    ];
    const games = [
        { id: 1, name: "Cerine", link: "https://cerine-it.github.io/Word-Puzzle/" },
        { id: 2, name: "Ines", link: "https://ines-aouali.github.io/guess_the_number/" },
        { id: 3, name: "Houda", link: "https://hou-da-nour.github.io/Quiz-Game/" },
        { id: 4, name: "Hadjer", link: "https://hadjertalbi.github.io/PROJET_GAME/ " },
        { id: 5, name: "Meriem", link: "https://benfekhadoumeriem.github.io/squid-game/" },
        { id: 6, name: "Zineb", link: "https://hemaizizineb.github.io/Flappy_bird_JS/" },
        { id: 7, name: "Nawel", link: "https://chellah-nawel.github.io/Islamic-Game/" },
        { id: 8, name: "Fettomi", link: "https://fettoumi.github.io/word-puzzle/" },
        { id: 9, name: "Rekaia", link: "https://rekaia-benhatite.github.io/guess_number/ " },
        { id: 10, name: "Amira", link: "https://amirailli.github.io/Challenge2/" },
        { id: 11, name: "Sami", link: "https://rizu-sm.github.io/suggest-the-word/" },
        { id: 12, name: "Manar 'guess-the-word'", link: "https://manarrezik.github.io/guess-the-word/" },
        { id: 13, name: "Manar 'BrainBoost'", link: "https://manarrezik.github.io/BrainBoost/" },
        { id: 14, name: "Nada", link: "https://nadameriem.github.io/Word_Weaver/" },
        { id: 15, name: "Maria", link: "https://its-mg.github.io/Memory-Game/" },
        { id: 16, name: "Cerine & Fattomi", link: "https://cerine-it.github.io/2048-Game/" },
        { id: 17, name: "Achraf", link: "https://omcgames.netlify.app/" },
        { id: 18, name: "Lydia", link: "https://lydiachal.github.io/minigame/" },
        { id: 19, name: "Khawla", link: "https://threerachaa.github.io/game/tictactoe.html" },
        
    ];

    // Ensure the selection screen is visible on page load
    selectionScreen.style.display = "block";
    projectSection.style.display = "none";

    modeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedMode = this.dataset.mode;
            localStorage.setItem("selectedMode", selectedMode);
            loadMode(selectedMode);
        });
    });

    function loadMode(mode) {
        selectionScreen.style.display = "none";
        projectSection.style.display = "block";

        cardList.style.display = mode === "daily" ? "block" : "none";
        gameList.style.display = mode === "weekly" ? "block" : "none";

        if (mode === "daily") loadCards();
        if (mode === "weekly") loadGames();
    }

    function loadCards() {
        const cardContainer = document.querySelector(".card-links"); // Select the container for search and projects
    
        // Clear previous content before adding new ones
        cardContainer.innerHTML = ""; 
    
        // Create the search bar
        const searchInput = document.createElement("input");
        searchInput.setAttribute("type", "text");
        searchInput.setAttribute("placeholder", "Search by member name...");
        searchInput.setAttribute("id", "search-bar");
        cardContainer.appendChild(searchInput);
    
        // Create a div to hold project buttons
        const projectListDiv = document.createElement("div");
        projectListDiv.setAttribute("id", "projects-card-list");
        cardContainer.appendChild(projectListDiv);
    
        // Function to display projects based on search
        function displayProjects(filteredProjects) {
            projectListDiv.innerHTML = ""; // Clear previous list
            filteredProjects.forEach(project => {
                const cardDiv = document.createElement("div");
                cardDiv.classList.add("crd");
    
                const projectButton = document.createElement("button");
                projectButton.classList.add("card-btn");
                projectButton.textContent = project.name;
                projectButton.onclick = function() {
                    window.location.href = project.link;
                };
                // Open the project in a NEW TAB
                projectButton.onclick = function() {
                window.open(project.link, "_blank"); // Opens in a new tab
                };
    
                cardDiv.appendChild(projectButton);
                projectListDiv.appendChild(cardDiv);
            });
        }
    
        // Display all projects initially
        displayProjects(cards);
    
        // Add event listener for search functionality
        searchInput.addEventListener("input", () => {
            const searchValue = searchInput.value.toLowerCase();
            const filteredProjects = cards.filter(project =>
                project.name.toLowerCase().includes(searchValue)
            );
            displayProjects(filteredProjects);
        });
    }
    function loadGames() {
        const gameContainer = document.querySelector(".game-links"); // Select the container for search and projects
    
        // Clear previous content before adding new ones
        gameContainer.innerHTML = ""; 
    
        // Create the search bar
        const searchInput = document.createElement("input");
        searchInput.setAttribute("type", "text");
        searchInput.setAttribute("placeholder", "Search by member name...");
        searchInput.setAttribute("id", "search-bar");
        gameContainer.appendChild(searchInput);
    
        // Create a div to hold project buttons
        const gameListDiv = document.createElement("div");
        gameListDiv.setAttribute("id", "projects-game-list");
        gameContainer.appendChild(gameListDiv);
    
        // Function to display projects based on search
        function displayProjects(filteredProjects) {
            gameListDiv.innerHTML = ""; // Clear previous list
            filteredProjects.forEach(project => {
                const gameDiv = document.createElement("div");
                gameDiv.classList.add("gam");
    
                const gameButton = document.createElement("button");
                gameButton.classList.add("game-btn");
                gameButton.textContent = project.name;
                gameButton.onclick = function() {
                    window.location.href = project.link;
                };
                // Open the project in a NEW TAB
                gameButton.onclick = function() {
                window.open(project.link, "_blank"); // Opens in a new tab
                };
    
                gameDiv.appendChild(gameButton);
                gameListDiv.appendChild(gameDiv);
            });
        }
    
        // Display all projects initially
        displayProjects(games);
    
        // Add event listener for search functionality
        searchInput.addEventListener("input", () => {
            const searchValue = searchInput.value.toLowerCase();
            const filteredgames = games.filter(project =>
                project.name.toLowerCase().includes(searchValue)
            );
            displayProjects(filteredgames);
        });
    }
    // Go Back Functionality
    goBackButtons.forEach(button => {
        button.addEventListener("click", () => {
            selectionScreen.style.display = "block";
            projectSection.style.display = "none";
            cardList.style.display = "none";
            gameList.style.display = "none";
        });
    });
    // for nav bar 
    const hamburger = document.getElementsByClassName(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Toggle menu on click
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    
});

window.onload = function () {
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Small delay to ensure smooth effect
};

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}


