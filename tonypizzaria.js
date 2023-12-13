var tonyUsuarios = {

    usuario: [
        {
            id: '01',
            nome: 'joao da Silva',
            email: 'joaoSilvinha@gmail.com',
            senha: 'joaoosilvaa123',
            telefone: '647397748',
            endereço: 'rua valdo',
            foto: './img/joaoSilva.jfif',
        },
        {
            id: '02',
            nome: 'Maria Vitoria',
            email: 'vihhtoria@gmail.com',
            senha: 'mariariri444',
            telefone: '9455695403',
            endereço: 'rua emilio rocha',
            foto: './img/mariaVitoria.jfif'
        },
        {
            id: '03',
            nome: 'Ana Luiza',
            email: 'ribrieojulia@gmail.com',
            senha: 'bts123321',
            telefone: '4521145354',
            endereço: 'rua santa maria',
            foto: './img/anaLuiza.jfif'
        },
        {
            id: '04',
            nome: 'Lucas Pereira',
            email: 'lucacaPEreiraaz@gmailcom',
            senha: 'alnzokatop',
            telefone: '4521366258',
            endereço: 'rua lucia da graça',
            foto: './img/lucasPereira.jfif'
        },
        {
            id: '05',
            nome: 'Cecilia Costa',
            email: 'costa23cece@gmailcom',
            senha: 'Senhadacece154',
            telefone: '754998562',
            endereço: 'rua calçadas das lembranças',
            foto: './img/ceciliaCosta.jfif'
        }
    ]
    
}

var tonyCategorias = {

    categorias: [

        {
            id: 01,
            nome: 'pizzas salgadas',
        },

        {
            id: 02,
            nome: 'pizzas doces',
        },
        {
            id: 03,
            nome: 'bebidas',
        },
        {
            id: 04,
            nome: 'sobremessas'
        }
    ]
}

var tonyProdutos = {

    produtos: [
        {
            id: 01,
            nome: 'pizzas salgadas' = [
                {

                    id: 01,
                    nome: 'pizza de calabresa com queijo',
                    descrição: 'calabresa com queijo',
                    preço: '16,00',
                    avaliação : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    foto: '.img/calabrezaQueijo.svg',
                },
                {
                    id: 02,
                    nome: 'pizza de peperoni com queijo',
                    descrição: 'eperoni com queijo',
                    preço: '19,00',
                    avaliação:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    foto: '.img/peperoniQueijo.svg',
    
                }
    
            ],

            id: 02,
            nome: 'pizza doces' = [
                {
                    id: 01,
                    nome: 'morango com chocolate',
                    descrição: 'diversos outros alimentos, como sorvetes, bolos e chocolates.',
                    preço: '20,50',
                    avaliação: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    foto: '.img/morangoChocolate.svg',

                },
                {
                    id: 02,
                    nome: 'romeu e julieta',
                    descrição: 'o tradicional queijo com goiabada.',
                    preço: '25,00',
                    avaliação: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    foto: '.img/romeuJulieta.svg',
                }
            ],

            id: 03,
            nome: 'bebidas' = [
                {
                    id: 01,
                    nome: 'coca-cola ',
                    descrição: 'coca-cola 2L',
                    preço: '14,99',
                    avaliação: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    foto: '.img/cocaCola.svg'
                },
                {
                    id: 02,
                    nome: 'cerveja heineken',
                    descrição: 'cerveja heineken 2L',
                    preço: '17,99',
                    avaliação: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    foto: '.img/cervejaHeineken.svg'
                }
            ],

            id: 04,
            nome: 'sobremessas' = [
                {
                    id: 01,
                    nome: 'sorvete de flocos',
                    descrição: 'baunilha e chocolate',
                    preço: '5,99',
                    avaliação: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    foto: '.img/sorveteFlocos.svg'
                },
                {
                    id: 02,
                    nome: 'pudim',
                    descrição: 'pudim de leite moça',
                    preço: '7,00',
                    avaliação: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    foto: '.img/pudim.svg'
                }
            ]

        }
    ]
}

module.exports = {
    tonyUsuarios,
    tonyCategorias,
    tonyProdutos
}