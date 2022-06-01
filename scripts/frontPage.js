var cross = document.querySelector('.cross');
var ham = document.querySelector('.ham');
var sidebar = document.querySelector('.sidebar');
cross.style.display = 'none';
document.querySelector('.infoContainer h1').innerHTML = localStorage.getItem("username");
ham.addEventListener("click", () => {
    sidebar.classList.remove('sidebarGo');
    setTimeout(() => {
        cross.style.display = 'inline';
    }, 200);
    document.querySelector('.ham').style.display = 'none';
})
cross.addEventListener("click", () => {
    sidebar.classList.add('sidebarGo');
    setTimeout(() => {
        ham.style.display = 'inline';
    }, 200);
    cross.style.display = 'none';
})
var flag = true;
function pop()
{
    if(flag == true)
    {
        document.getElementById('codeforces_profile').style.transform = 'translate(0px, -185px)';
        document.getElementById('leetcode_profile').style.transform = 'translate(0px, 185px)';
        document.getElementById('spoj_profile').style.transform = 'translate(185px, 0px)';
        document.getElementById('atcoder_profile').style.transform = 'translate(-185px, 0px)';
        flag = false;
    }
    else
    {
        document.getElementById('codeforces_profile').style.transform = 'translate(0px, 0px)';
        document.getElementById('leetcode_profile').style.transform = 'translate(0px, 0px)';
        document.getElementById('spoj_profile').style.transform = 'translate(0px, 0px)';
        document.getElementById('atcoder_profile').style.transform = 'translate(0px, 0px)';
        flag = true;
    }
}
anchorTags = document.querySelectorAll('.profile a');
anchorTags[0].href = `https://codeforces.com/profile/${localStorage.getItem('CFusername')}`;
anchorTags[1].href = `https://leetcode.com/${localStorage.getItem('LCusername')}/`;
anchorTags[2].href = `https://www.spoj.com/users/${localStorage.getItem('SPusername')}/`;
anchorTags[3].href = `https://atcoder.jp/users/${localStorage.getItem('ACusername')}`;
console.log(anchorTags);