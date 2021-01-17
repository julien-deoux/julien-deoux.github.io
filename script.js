(function() {
    const i18n = JSON.parse(`{
        "summary": {
            "fr": "25 ans, compositeur",
            "en": "25 year-old French composer"
        },
        "listen-prompt": {
            "fr": "Écouter",
            "en": "Listen"
        },
        "download-prompt": {
            "fr": "Télécharger",
            "en": "Download"
        },
        "follow-prompt": {
            "fr": "Suivre",
            "en": "Follow"
        },
        "bandcamp-description": {
            "fr": "Gratuit",
            "en": "Free"
        }
    }`);

    const frSelect = document.getElementById('fr-select');
    const enSelect = document.getElementById('en-select');
    const selects = [frSelect, enSelect];

    function loadLang(lang) {
        selects.forEach(select => select.classList.remove('language-option--selected'));
        document.getElementById(lang + '-select').classList.add('language-option--selected');
        for (const id in i18n) {
            document.getElementById(id).innerText = i18n[id][lang];
        }
        window.localStorage.setItem('lang', lang);
    }

    frSelect.addEventListener('click', () => loadLang('fr'));
    enSelect.addEventListener('click', () => loadLang('en'));

    document.addEventListener('DOMContentLoaded', () => loadLang(window.localStorage.getItem('lang')));
})();
