function updateLS(username, platform)
{
    localStorage.setItem(username, platform.value);
}
username = document.querySelectorAll('input')[0];
CFInput = document.querySelectorAll('input')[1];
LCInput = document.querySelectorAll('input')[2];
SPInput = document.querySelectorAll('input')[3];
ACInput = document.querySelectorAll('input')[4];
if(CFInput.value == "")
localStorage.setItem("CFusername", "");
if(LCInput.value == "")
localStorage.setItem("LCusername", "");
if(SPInput.value == "")
localStorage.setItem("SPusername", "");
if(ACInput.value == "")
localStorage.setItem("ACusername", "");
if(username.value == "")
localStorage.setItem("username", "");
username.addEventListener('input', () => {
    localStorage.setItem("username", username.value);
})
CFInput.addEventListener('input', () => {
    updateLS("CFusername", CFInput);
})
LCInput.addEventListener('input', () => {
    updateLS("LCusername", LCInput);
})
SPInput.addEventListener('input', () => {
    updateLS("SPusername", SPInput);
})
ACInput.addEventListener('input', () => {
    updateLS("ACusername", ACInput);
})