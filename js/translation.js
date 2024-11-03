$( document ).ready(function() {

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

function makeTranslation(langCode){
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
    makeTranslation(langCode);
});

});