import React, {createContext, useState} from "react";

export const DataContext = createContext();

export const DataProvider = props => {
    const Noisli = [
        {
            name:'ogien',
            src:'ogien.ogg',
            id:'n1',
            icon:'fire.svg'
        },
        {
            name:'deszcz',
            src:'deszcz.ogg',
            id:'n2',
            icon:'rain.svg'
        },
        {
            name:'las',
            src:'las.ogg',
            id:'n3',
            icon:'forest.svg'
        },
        {
            name:'błyskawica',
            src:'grzmot.ogg',
            id:'n4',
            icon:'lightning.svg'
        },
        {
            name:'noc',
            src:'noc.ogg',
            id:'n5',
            icon:'moon.svg'
        },
        {
            name:'strumyk',
            src:'strumyk.ogg',
            id:'n6',
            icon:'mountain.svg'
        },
        {
            name:'szum morza',
            src:'jezioro.ogg',
            id:'n7',
            icon:'wave.svg'
        },
        {
            name:'Dudnienie',
            src:'wentylator.ogg',
            id:'n8',
            icon:'windmill.svg'
        },
        {
            name:'Wiatr',
            src:'wiatr.ogg',
            id:'n9',
            icon:'wind.svg'
        },

    ];
    const Music = [
        {
            name:'ElemTown.mp3',
            src:'ElemTown.mp3',
            id:'m1',
            icon:''
        },
        {
            name:'Win-Scenario.mp3',
            src:'Win-Scenario.mp3',
            id:'m2',
            icon:''
        },
        {
            name:'Defend-Castle.mp3',
            src:'Defend-Castle.mp3',
            id:'m3',
            icon:''
        },
    ];
    const Maps = [
        {
            name:'jaskienia',
            src:'20_05_2014_3.jpg',
            id:'m1',
        },
        {
            name:'Las',
            src:'Noisli/forest.svg',
            id:'m2',
        },
        {
            name:'Phandalin',
            src:'https://gfx.gexe.pl/upl/90/2014/6/29124237.jpg',
            id:'m3',
            icon:''
        },
        {
            name:'Mapa Faerunu',
            src:'https://mepel.pl/userdata/public/gfx/31565/rebel-mapa-dnd-faerun-pl.3120858.800x0.jpg',
            id:'m4',
        },
    ];

    const user = ['Bot', 'Albert', 'Warrior', 'Bart', 'kes'];
    let i=0;

    const Chat = [
        {
            id: i++,
            author: user[0],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'Hello!!! Witam, na stronie'
            }
        },
        {
            id: i++,
            author: user[0],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'Czy jest tu ktoś ?'
            }
        },
        {
            id: i++,
            author: user[4],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'Nikogo niema, ale zostawię tu przykładową rozmowę :) żeby potomni mogli dowiedzieć się czegoś...'
            }
        },
        {
            id: i++,
            author: user[1],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'Do czego służy ta strona?'
            }
        },
        {
            id: i++,
            author: user[2],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'Bym mógł PALIĆ i Podbijać Świat :D'
            }
        },
        {
            id: i++,
            author: user[3],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'To takie narzędzie dla Mistrzów Gry, by mogli szybko, bez przygotowania zagrać sesję. Mając pod ręką to czego potrzebują jak dźwięki, melodie i mapy'
            }
        },
        {
            id: i++,
            author: user[2],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'To wszystko??!!'
            }
        },
        {
            id: i++,
            author: user[3],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'Wszystko? To już jest całkiem sporo na start.'
            }
        },
        {
            id: i++,
            author: user[1],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'Co mogę tu zrobić?'
            }
        },
        {
            id: i++,
            author: user[3],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'Jest to pierwszy projekt strony, taka wersja Demo... jednak kila opcji już działa'
            }
        },
        {
            id: i++,
            author: user[3],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'Na stół można położyć mapę, albo z kilku gotowych, albo z innej strony przez przeciągnij i upuść, albo z dysku.'
            }
        },
        {
            id: i++,
            author: user[1],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'Mogę położyć własną mapę na stole? Co to znaczy?'
            }
        },
        {
            id: i++,
            author: user[3],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'Na środku ekranu masz pole które nazywam stołem/pulpit możesz na niego upuścić plik graficzny i zobaczyć co się stanie'
            }
        },
        {
            id: i++,
            author: user[1],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'No tak, można tam dać nie tylko mapę, ale też potwora, albo inny plik graficzny'
            }
        },
        {
            id: i++,
            author: user[1],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'Co to za linijka czasu na górze?'
            }
        },
        {
            id: i++,
            author: user[3],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'To opóźniacz, pozwala uruchomić dżwięk nie od razu, ale np dopiero za 1 minute, przez co pojawia się kiedy Narrator już prowadzi opis... '
            }
        },
        {
            id: i++,
            author: user[1],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'OK fajnie, ale jak to zrobić? i czy mogę dodać własną muzykę?'
            }
        },
        {
            id: i++,
            author: user[3],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'Tak jest przycisk dodaj dżwięk/ muzykę.'
            }
        },
        {
            id: i++,
            author: user[3],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'Na linijkę czasu kładziesz dźwięk i od tego momentu zaczyna liczyć czas, widać też jak zbliża się do końca...'
            }
        },
        {
            id: i++,
            author: user[1],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'Jak mogę zadać pytanie w przyszłości?'
            }
        },
        {
            id: i++,
            author: user[4],
            type: 'text',
            sender: `ico`,
            data: {
                text: 'Ja zapraszam do kontaktu na Facebooku (Łukasz Mar), albo e-mail L.M.Martyn@gmail.com '
            }
        }

    ]

    const [data, setData] = useState({
        Notes: [],
        Chat: Chat,
        Noisli: Noisli,
        Music: Music,
        Maps: Maps
    });

    return (
        <DataContext.Provider value={[data, setData]} >
            {props.children}
        </DataContext.Provider>
    )
}


