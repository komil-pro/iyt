$( document ).ready(function() {
const defaultLangCode = 'ru'
var translations = {
'ru': {
    'menuMain': 'Главная',
    'menuAbout': 'О нас',
    'menuProjects': 'Проекты',
    'menuServices': 'Услуги',
    'menuContact': 'Контакты',
},
'tj': {
    'menuMain': 'Асосӣ',
    'menuAbout': 'Дар бораи мо',
    'menuProjects': 'Лоихахо',
    'menuServices': 'Хизматрасони',
    'menuContact': 'Тамос',
},
'en': {
    'menuMain': 'Main',
    'menuAbout': 'About',
    'menuProjects': 'Projects',
    'menuServices': 'Services',
    'menuContact': 'Contact',
}
}

function loadLang(){
    let langCode = getLang();
    $('#langPicker option[value="'+langCode+'"]').attr('selected', 'selected');
    setLang(langCode);
}

function getLang(key='langCode'){
    let langCode = localStorage.getItem(key);
    if(langCode in translations) {
        return langCode;
    } else {
        return defaultLangCode;
    }
}

function setLang(langCode){
    // save in local storage
    localStorage.setItem('langCode',langCode);
    // text
    $(".translate").each(function() {
        let transKey = $(this).attr('transKey');
        if(transKey in translations[langCode]) {
            $(this).html( translations[langCode][transKey] );
        }
    });
    // img
    // $("img.translateIMG").each(function() {
    //     let imgBaseName = $(this).attr('imgBaseName');
    //     $(this).attr('src',imgBaseName+'_'+langCode);
    // });
}

$("#langPicker").change(function() {
    let langCode = $(this).val();
    setLang(langCode);
});

loadLang();

});