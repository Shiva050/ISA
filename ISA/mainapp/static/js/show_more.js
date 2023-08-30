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
    currentlyVisible += maxVisible;
    if (currentlyVisible >= teamMembers.length) {
        showMoreButton.style.display = 'none';
    }
    showCards(currentlyVisible);
    const firstRowHeight = calculateFirstRowHeight(); // Calculate the height of the first row
    teamMembersGrid.style.maxHeight = firstRowHeight + 'px'; // Set max-height to first row height
    showLessButton.style.display = 'block';
}

function showLess() {
    currentlyVisible = maxVisible * rowHeight;
    showCards(currentlyVisible);
    teamMembersGrid.style.maxHeight = 'initial'; // Reset max-height to default
    showMoreButton.style.display = 'block';
    showLessButton.style.display = 'none';
}

showMoreButton.addEventListener('click', showMore);
showLessButton.addEventListener('click', showLess);

// Initially show the first batch of cards
showCards(currentlyVisible);
if (teamMembers.length > currentlyVisible) {
    showMoreButton.style.display = 'block';
}
