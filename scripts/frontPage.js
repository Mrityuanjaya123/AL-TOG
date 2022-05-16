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
        document.getElementById('codechef_profile').style.transform = 'translate(170px, 30px)';
        document.getElementById('codeforces_profile').style.transform = 'translate(90px, -130px)';
        document.getElementById('hackerearth_profile').style.transform = 'translate(-120px, -110px)';
        document.getElementById('hackerrank_profile').style.transform = 'translate(-150px, 70px)';
        document.getElementById('leetcode_profile').style.transform = 'translate(27px, 145px)';
        flag = false;
    }
    else
    {
        document.getElementById('codechef_profile').style.transform = 'translate(0px, 0px)';
        document.getElementById('codeforces_profile').style.transform = 'translate(0px, 0px)';
        document.getElementById('hackerearth_profile').style.transform = 'translate(0px, 0px)';
        document.getElementById('hackerrank_profile').style.transform = 'translate(0px, 0px)';
        document.getElementById('leetcode_profile').style.transform = 'translate(0px, 0px)';
        flag = true;
    }
}