const Africa = ["África do Sul","Egito","Mali","Serra Leoa","Angola","Eritreia","Marrocos","Seicheles","Argélia","Etiópia","Maurício","Tunísia","Benin","Gabão","Mauritânia","Somália","Botsuana","Gâmbia","Moçambique","Suazilândia","Burkina Fasso","Gana","Namíbia","Sudão","Burundi","Guiné","Níger","Sudão do Sul","Cabo Verde","Guiné-Bissau","Nigéria","Uganda","Camarões","Guiné-Equatorial","Quênia","Tanzânia","Chade","Lesoto","República Centro-Africana","Togo","Comores","Libéria","República Democrática do Congo","Zâmbia","Congo","Líbia","Ruanda","Zimbábue","Costa do Marfim","Madagáscar","São Tomé e Príncipe","Djibuti","Malauí","Senegal"]

const America = ["Antígua e Barbuda","Colômbia","Guiana","República Dominicana","Argentina","Costa Rica","Haiti","Santa Lúcia","Bahamas","Cuba","Honduras","São Cristóvão e Névis","Barbados","Dominica","Jamaica","São Vicente e Granadinas","Belize","El Salvador","México","Suriname","Bolívia","Equador","Nicarágua","Trinidad e Tobago","Brasil","Estados Unidos","Panamá","Uruguai","Canadá","Granada","Paraguai","Venezuela","Chile","Guatemala","Peru"]

const Asia = ["Afeganistão","Coreia do Norte","Jordânia","Quirguistão","Arábia Saudita","Coreia do Sul","Kuwait","Síria","Bangladesh","Emirados Árabes Unidos","Laos","Sri Lanka","Barein","Filipinas","Líbano",
"Tadjiquistão","Brunei","Iêmen","Malásia","Tailândia","Butão","Índia","Maldivas","Timor-Leste","Camboja","Indonésia","Myanmar","Turquia","Catar","Irã","Mongólia","Turcomenistão","Cazaquistão","Iraque","Nepal","Uzbequistão","China","Israel","Omã","Vietnã","Cingapura","Japão","Paquistão","Quirguistão"]

const Europa = ["Albânia","Dinamarca","Itália","Polônia","Alemanha","Eslováquia","Letônia","Portugal","Andorra","Eslovênia","Liechtenstein","Reino Unido","Armênia","Espanha","Lituânia","República Tcheca","Áustria","Estônia","Luxemburgo","Romênia","Azerbaijão","Finlândia","Macedônia","Rússia","Belarus","França","Malta","San Marino","Bélgica","Geórgia","Moldávia","Sérvia","Bósnia-Herzegóvina","Grécia","Mônaco","Suécia","Bulgária","Hungria","Montenegro","Suíça","Chipre","Irlanda","Noruega","Ucrânia","Croácia","Islândia","Países Baixos"]

const Oceania = ["Austrália","Kiribati","Palau","Tuvalu","Fiji","Micronésia","Papua Nova Guiné","Vanuatu","Ilhas Marshall","Nauru","Samoa","Ilhas Salomão","Nova Zelândia","Tonga"]

function searchContinent(){
    const pais = document.getElementById('pais').value
    const tagPais = document.getElementById('paisResult')
    const addImage = document.getElementById('addImage')
    const imageAfrica = '<img style="width:50%;" src = "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/02/africa-regioes.png"/>'
    const imageAmerica = '<img style="width:60%;" src = "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/os-paises-america-latina-apresentam-caracteristicas-historicas-sociais-culturais-semelhantes-57b5da6d039bf.jpg"/>'
    const imageEuropa = '<img style="width:60%; margin-bottom:5%" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Mapa_europa.svg/1200px-Mapa_europa.svg.png"/>'
    const imageAsia = '<img style="width:70%; margin-bottom:5%" src = "http://2.bp.blogspot.com/-y10UuuEbNMg/UAszNKGJqDI/AAAAAAAAAQU/fi_XO0ph9jI/s1600/url.gif"/>'
    const imageOceania = '<img style="width:70%; margin-bottom:5%" src = "https://www.educabras.com/media/emtudo_img/upload/_img/20110413_140511.gif"/>'

    if (Africa.includes(pais,0)){
        console.log("África");
        tagPais.innerHTML = "Está localizado no continente Africano"
        addImage.innerHTML = imageAfrica
    }
    else if (America.includes(pais,0)){
        console.log("America");
        tagPais.innerHTML = "Está localizado no continente Americano"
        addImage.innerHTML = imageAmerica
    }
    else if (Europa.includes(pais,0)){
        console.log("Europa");
        tagPais.innerHTML = "Esta localizado no continente Europeu"
        addImage.innerHTML = imageEuropa
    }
    else if (Asia.includes(pais,0)){
        console.log("Ásia");
        tagPais.innerHTML = "Está localizado no continente Asiático"
        addImage.innerHTML = imageAsia
    }
    else if (Oceania.includes(pais,0)){
        console.log("Oceania");
        tagPais.innerHTML = "Está localizado no continente Oceânico"
        addImage.innerHTML = imageOceania
    }
}