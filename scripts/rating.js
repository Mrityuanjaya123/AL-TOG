var cross = document.querySelector('.cross');
var ham = document.querySelector('.ham');
var sidebar = document.querySelector('.sidebar');
cross.style.display = 'none';
ham.addEventListener("click", () => {
    sidebar.classList.remove('sidebarGo');
    setTimeout(() => {
        cross.style.display = 'inline';
    }, 200);
    document.querySelector('.ham').style.display = 'none';
});
cross.addEventListener("click", () => {
    sidebar.classList.add('sidebarGo');
    setTimeout(() => {
        ham.style.display = 'inline';
    }, 200);
    cross.style.display = 'none';
});
fetch(`https://codeforces.com/api/user.info?handles=${localStorage.getItem('CFusername')}`)
.then(rating => rating.json())
.then(ratingdata => {
    const ratingnum = ratingdata.result;
    document.querySelector('#CFrating').innerHTML = `Rating: ${ratingnum[0].rating}`;
    document.querySelector('#CFmaxrating').innerHTML = `Max Rating: ${ratingnum[0].maxRating}`;
    document.querySelector('#CFrank').innerHTML = `Rank: ${ratingnum[0].rank}`;
    document.querySelector('#CFmaxrank').innerHTML = `Max Rank: ${ratingnum[0].maxRank}`;
    document.querySelector('#CFcontribution').innerHTML = `Contribution: ${ratingnum[0].contribution}`;
    document.querySelector('#CFfriends').innerHTML = `Friends: ${ratingnum[0].friendOfCount}`;
});

fetch(`https://leetcode-stats-api.herokuapp.com/${localStorage.getItem('LCusername')}/`)
.then(rating => rating.json())
.then(ratingdata => {
    document.querySelector('#LCtotalsolved').innerHTML = `Total Solved: ${ratingdata.totalSolved}`;
    document.querySelector('#LCeasy').innerHTML = `Easy: ${ratingdata.easySolved}`;
    document.querySelector('#LCmedium').innerHTML = `Medium: ${ratingdata.mediumSolved}`;
    document.querySelector('#LChard').innerHTML = `Hard: ${ratingdata.hardSolved}`;
    document.querySelector('#LCacceptancerate').innerHTML = `Acceptance Rate: ${ratingdata.acceptanceRate}`;
    document.querySelector('#LCranking').innerHTML = `Ranking: ${ratingdata.ranking}`;
    // document.getElementById('rating').innerHTML = (ratingnum[0].rating);
});

fetch(`https://all-cp-platforms-api.herokuapp.com/api/spoj/${localStorage.getItem('SPusername')}`)
.then(rating => rating.json())
.then(ratingdata => {
    document.querySelector('#SPrank').innerHTML = `World Rank: ${ratingdata.world_rank}`;
    document.querySelector('#SPtotalsolved').innerHTML = `Problems Solved: ${ratingdata["Problems solved"]}`;
    document.querySelector('#SPsolutionssubmitted').innerHTML = `Solutions Submitted: ${ratingdata["Solutions submitted"]}`;
    document.querySelector('#SPjoined').innerHTML = `Joined: ${ratingdata.joined}`;
});

fetch(`https://all-cp-platforms-api.herokuapp.com/api/atcoder/${localStorage.getItem('ACusername')}`)
.then(rating => rating.json())
.then(ratingdata => {
    // console.log(ratingdata.Rank);
    if(ratingdata.Rank != undefined)
    document.querySelector('#ACrank').innerHTML = `Rank: ${ratingdata.Rank}`;
    if(ratingdata.Rating)
    document.querySelector('#ACrating').innerHTML = `Rating: ${ratingdata.Rating}`;
    if(ratingdata["Highest Rating"])
    document.querySelector('#AChighestrating').innerHTML = `Highest Rating: ${ratingdata["Highest Rating"]}`;
    if(ratingdata["Rated Matches"])
    document.querySelector('#ACratedmatches').innerHTML = `Rated Matches: ${ratingdata["Rated Matches"]}`;
    if(ratingdata["Last Competed"])
    document.querySelector('#AClastcompeted').innerHTML = `Last Competed: ${ratingdata["Last Competed"]}`;
});
