var toast = function (target, text) {
    let el = document.querySelector(target);
    el.innerText = text;
    el.classList.remove('invisible');
    setTimeout(() => { el.classList.add('invisible'); }, 3000);
}

window.addEventListener('load', function() {
    new Vue({
        el: '#container',
        data: {
            issues_url: "https://api.github.com/repos/adarisques/bugs/issues",
            issues: null,
        },
        mounted() {
            axios
                .get(this.issues_url)
                .then(response => this.issues = response.data);
        },
    });
});
