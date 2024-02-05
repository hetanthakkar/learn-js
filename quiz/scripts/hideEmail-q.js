/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
function isValid(email) {
    return /^[a-zA-Z0-9_]+@[a-z]+.[a-z]/.test(email)
}
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';
    for (const email of emails) {
        if (email.match(/^[a-z0-9_]+@(.+\.)*northeastern.edu$/)) {
            console.log(email);
            const listItem = document.createElement('li');
            listItem.textContent = email.slice(0, email.indexOf('@')) + email.slice(email.indexOf('@') + 1).replace(/./g, '*');
            list.appendChild(listItem);
        }
        if (isValid(email)) {
            //split based on @
            //split[0].replace()
        }
        // complete the loop
    }


}