$( document ).ready(function() {
const defaultLangCode = 'ru'
var translations = {
'ru': {
    'menuMain': 'Главная',
    'menuAbout': 'О нас',
    'menuProjects': 'Проекты',
    'menuServices': 'Услуги',
    'menuiTeams': 'Сообщества волонтёров',
    'menuContact': 'Контакты',
    'heroTitle' : '“ИНИЦИАТИВНАЯ МОЛОДЕЖЬ ТАДЖИКИСТАНА”',
    'heroText' : 'Мы стремимся создать динамичное сообщество молодежи, активно участвующей в социальных \
изменениях и волонтерских инициативах. Наша цель — вдохновить молодых людей на осознанные действия, \
развивать их лидерские качества и навыки формировать чувство ответственности за свое окружение.',
    'lernMore' : 'Узнать больше',
    'contactUs' : 'Связаться с нами',
},
'tj': {
    'menuMain': 'Асосӣ',
    'menuAbout': 'Дар бораи мо',
    'menuProjects': 'Лоихахо',
    'menuServices': 'Хизматрасони',
    'menuiTeams': 'Ҷамеаҳои волонтёрӣ',
    'menuContact': 'Тамос',
    'heroTitle' : '“ҶАВОНОНИ ТАШАББУСКОРИ ТОҶИКИСТОН”',
    'heroText' : 'Мо саъю кӯшиш дорем, ки як ҷомеаи фаъоли ҷавононеро эҷод намоем, ки дар дигаргуниҳои \
иҷтимоӣ ва ташаббусҳои волонтёрӣ фаъолона иштирок намоянд. Мақсади мо аз он иборат аст, ки ҷавононро \
ба иқдомоти бошуурона ҳавасманд намуда, малакаву маҳорати роҳбарии онҳоро сайқал диҳем ва эҳсоси \
масъулиятшиносиро вобаста ба муҳити атрофи худ дар онҳо ташаккул диҳем. ',
    'lernMore' : 'Муфассал',
    'contactUs' : 'Тамос',
},
'en': {
    'menuMain': 'Main',
    'menuAbout': 'About',
    'menuProjects': 'Projects',
    'menuServices': 'Services',
    'menuiTeams': 'Volunteer communities',
    'menuContact': 'Contact',
    'heroTitle' : '"INITIATIVE YOUTH OF TAJIKISTAN"',
    'heroText' : 'We strive to create a dynamic community of young people actively involved in social \
change and volunteer initiatives. Our goal is to inspire young people to take conscious action, \
develop their leadership qualities and skills, and form a sense of responsibility for their environment.',
    'lernMore' : 'Learn more',
    'contactUs' : 'Contact us',
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