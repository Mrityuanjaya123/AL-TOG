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
var i=0;
function pop(){
    if(i==0){
        document.getElementById("item1").style.
        transform = 'translateX(-50px)';
        document.getElementById("item2").style.
        transform = 'translate(-45px,-45px)';
        document.getElementById("item3").style.
        transform = 'translatey(-50px)';
        i=1;
    }
    else{
        document.getElementById("item1").style.
        transform = 'translateX(0)';
        document.getElementById("item2").style.
        transform = 'translateX(0)';
        document.getElementById("item3").style.
        transform = 'translateX(0)';
        i=0;
    }
}
var j=0;
function pop1(){
    if(j==0){
        document.getElementById("item11").style.
        transform = 'translateX(-50px)';
        document.getElementById("item21").style.
        transform = 'translate(-45px,-45px)';
        document.getElementById("item31").style.
        transform = 'translatey(-50px)';
        j=1;
    }
    else{
        document.getElementById("item11").style.
        transform = 'translateX(0)';
        document.getElementById("item21").style.
        transform = 'translateX(0)';
        document.getElementById("item31").style.
        transform = 'translateX(0)';
        j=0;
    }
}
var k=0;
function pop2(){
    if(k==0){
        document.getElementById("item12").style.
        transform = 'translateX(-50px)';
        document.getElementById("item22").style.
        transform = 'translate(-45px,-45px)';
        document.getElementById("item32").style.
        transform = 'translatey(-50px)';
        k=1;
    }
    else{
        document.getElementById("item12").style.
        transform = 'translateX(0)';
        document.getElementById("item22").style.
        transform = 'translateX(0)';
        document.getElementById("item32").style.
        transform = 'translateX(0)';
        k=0;
    }
}





















