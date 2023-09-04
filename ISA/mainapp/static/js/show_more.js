const showMoreButton = document.getElementById('show-more-button');
const showLessButton = document.getElementById('show-less-button');
const teamMembersGrid = document.querySelector('.team-members-grid');
const teamMembers = document.querySelectorAll('.team-members-grid .team-member');
const maxVisible = 4; // Number of cards to show initially
const rowHeight = 1; // Number of rows to show initially
let currentlyVisible = maxVisible;

function calculateFirstRowHeight() {
    let firstRowHeight = 0;
    for (let i = 0; i < maxVisible; i++) {
        firstRowHeight += teamMembers[i].offsetHeight;
    }
    return firstRowHeight;
}

function showCards(visibleCount) {
    for (let i = 0; i < teamMembers.length; i++) {
        if (i < visibleCount) {
            teamMembers[i].style.display = 'block';
        } else {
            teamMembers[i].style.display = 'none';
        }
    }
}

function showMore() {
    const newVisibleCount = currentlyVisible + maxVisible;
    if(newVisibleCount >= teamMembers.length){
        showMoreButton.style.display = 'none';
    }
    showCards(newVisibleCount);
    currentlyVisible = newVisibleCount;

    const newTeamMembers = Array.from(teamMembers).slice(currentlyVisible - maxVisible, currentlyVisible);

    newTeamMembers.forEach((member) => {
        member.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });

    showLessButton.style.display  = 'inline-block';
}

function showLess() {
    currentlyVisible = maxVisible * rowHeight;
    showCards(currentlyVisible);

    // Calculate the height of the first row
    const firstRowHeight = calculateFirstRowHeight();

    // Scroll back to the top of the team section smoothly
    window.scrollTo({
        top: firstRowHeight + document.querySelector('.team').getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth',
    });

    showMoreButton.style.display = 'block';
    showLessButton.style.display = 'none';
}

showMoreButton.addEventListener('click', showMore);
showLessButton.addEventListener('click', showLess);

// Initially show the first batch of cards
showLessButton.style.display = 'none';
showCards(currentlyVisible);
if (teamMembers.length > currentlyVisible) {
    showMoreButton.style.display = 'block';
}
