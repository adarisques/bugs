var toast = function (target, text) {
    let el = document.querySelector(target);
    el.innerText = text;
    el.classList.remove('invisible');
    setTimeout(() => { el.classList.add('invisible'); }, 3000);
}

window.addEventListener('load', function() {
    new Vue({
        delimiters: ['${', '}'],
        el: '#container',
        data: {
            issues_url: "{{ .Param "issuesApi" }}",
            issues: null,
        },
        mounted() {
            axios
                .get(this.issues_url)
                .then(response => this.issues = response.data);
        },
    });
});
