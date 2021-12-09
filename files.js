// transforma links de compartilhamento do drive em links para embed de arquivos
function parseUrlFromGoogleDrive(link) {
  let originalUrl = link;
  originalUrl = originalUrl.replace("/view?usp=sharing", "");
  const [, id] = originalUrl.split("file/d/");

  const baseUrl = "https://drive.google.com/uc?export=download&id=";

  return `${baseUrl}${id}`;
}

function parseUrlFromDropbox(link) {
  return link.replace("dl=0", "raw=1");
}

var files = [
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/uowkn30iwm7u7yt/1%20-%20Ama%C3%A7a%20de%20morte%20por%20vingan%C3%A7a%2C%20tentativa%20de%20controle%20e%20ofensa.jpg?dl=0"
    ),
    name: "1 - Amaça de morte por vingança, tentativa de controle e ofensa",
    id: "1",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/5jdjwqymbdrqazs/2%20-%20Amea%C3%A7a%20de%20morte%2018%20anos.jpg?dl=0"
    ),
    name: "2 - Ameaça de morte 18 anos",
    id: "2",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/9siizr2df8391oa/3%20-%20Amea%C3%A7a%20e%20determina%C3%A7%C3%A3o%20para%20entregar%20filhas.jpg?dl=0"
    ),
    name: "3 - Ameaça e determinação para entregar filhas",
    id: "3",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/avmkvjm52v6h3xg/4%20-%20Amea%C3%A7a%20velada.jpg?dl=0"
    ),
    name: "4 - Ameaça velada",
    id: "4",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/dlb5go9upp6loae/5%20-%20Amea%C3%A7a.jpg?dl=0"
    ),
    name: "5 - Ameaça",
    id: "5",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/yq578qm7bava84k/6%20-%20Amea%C3%A7as%20veladas.jpg?dl=0"
    ),
    name: "6 - Ameaças veladas",
    id: "6",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/i8pw6eiavzr3za0/7%20-%20Amea%C3%A7as.jpg?dl=0"
    ),
    name: "7 - Ameaças",
    id: "7",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/f9crqp0aoy8xilz/8%20-%20Demonstra%C3%A7%C3%A3o%20de%20%C3%B3dio.jpg?dl=0"
    ),
    name: "8 - Demonstração de ódio",
    id: "8",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/nblyn8qmu9my3b9/9%20-%20Desamor%20pela%20filha%2C%20rebaixamento%20e%20agress%C3%B5es.jpg?dl=0"
    ),
    name: "9 - Desamor pela filha, rebaixamento e agressões",
    id: "9",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/rojs17kp97cj959/10%20-%20Discrimina%C3%A7%C3%A3o%20e%20intoler%C3%A2ncia%20religiosa%2C%20rebaixamento%2C%20ofensa%2C%20humilha%C3%A7%C3%A3o.jpg?dl=0"
    ),
    name: "10 - Discriminação e intolerância religiosa, rebaixamento, ofensa, humilhação",
    id: "10",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/0qv4teaqrfiq1dh/11%20-%20Exposi%C3%A7%C3%A3o%20p%C3%BAblica%2C%20ofensa%20moral.jpg?dl=0"
    ),
    name: "11 - Exposição pública, ofensa moral",
    id: "11",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/ahgm4z0y09iy7d0/12%20-%20Inten%C3%A7%C3%A3o%20de%20fazer%20aliena%C3%A7%C3%A3o%20parental.jpg?dl=0"
    ),
    name: "12 - Intenção de fazer alienação parental",
    id: "12",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/a8ooyxwd0za53y7/13%20-%20Intoler%C3%A2ncia%20religiosa%20ofensas%20pessoais%20e%20familiar%20e%20aliena%C3%A7%C3%A3o%20parental%20familiar.jpg?dl=0"
    ),
    name: "13 - Intolerância religiosa ofensas pessoais e familiar e alienação parental familiar",
    id: "13",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/tam0cbok3vwapkq/14%20-%20%C3%93dio%20e%20demonstra%C3%A7%C3%A3o%20de%20desamor%20pela%20filha%20%28esfor%C3%A7o%20para%20anivers%C3%A1rio%29.jpg?dl=0"
    ),
    name: "14 - Ódio e demonstração de desamor pela filha (esforço para aniversário)",
    id: "14",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/wyk501ew42wwhpq/15%20-%20Ofensa%20e%20rebaixamento.jpg?dl=0"
    ),
    name: "15 - Ofensa e rebaixamento",
    id: "15",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/fn07bkh6jh39u32/16%20-%20Ofensa%20e%20tentativa%20de%20controle.jpg?dl=0"
    ),
    name: "16 - Ofensa e tentativa de controle",
    id: "16",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/f2pg7ny0aj2bbeb/17%20-%20Ofensa%2C%20diminui%C3%A7%C3%A3o%20e%20amea%C3%A7a.jpg?dl=0"
    ),
    name: "17 - Ofensa, diminuição e ameaça",
    id: "17",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/t9osraxkok6b9kh/18%20-%20Ofensa%2C%20rebaixamento%20e%20amea%C3%A7a.jpg?dl=0"
    ),
    name: "18 - Ofensa, rebaixamento e ameaça",
    id: "18",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/6w34n7wfjynd5xo/19%20-%20Ofensa.jpg?dl=0"
    ),
    name: "19 - Ofensa",
    id: "19",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/75cjrj5lt2sfjv5/20%20-%20Ofensas%20e%20agress%C3%B5es.jpg?dl=0"
    ),
    name: "20 - Ofensas e agressões",
    id: "20",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/7ratoawclve4gyn/21%20-%20Ofensas%20e%20agress%C3%B5es.jpg?dl=0"
    ),
    name: "21 - Ofensas e agressões",
    id: "21",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/i8ngt6nwil1thac/22%20-%20Ofensas%20e%20rebaixamento.jpg?dl=0"
    ),
    name: "22 - Ofensas e rebaixamento",
    id: "22",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/n1yxk0jqvjlhv6g/23%20-%20Ofensas%20e%20rebaixamentos.jpg?dl=0"
    ),
    name: "23 - Ofensas e rebaixamentos",
    id: "23",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/ks4cqoeo8ky99nk/24%20-%20Ofensas%2C%20rebaixamento%20e%20tentativas%20de%20controle.jpg?dl=0"
    ),
    name: "24 - Ofensas, rebaixamento e tentativas de controle",
    id: "24",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/p5czaao3lz32c7h/25%20-%20Ofensas%2C%20rebaixamento.jpg?dl=0"
    ),
    name: "25 - Ofensas, rebaixamento",
    id: "25",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/45i6sydx2vg3no1/26%20-%20Rebaixamento%20e%20ofensa.jpg?dl=0"
    ),
    name: "26 - Rebaixamento e ofensa",
    id: "26",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/9r8iudzyzug0ckj/27%20-%20Rebaixamento.jpg?dl=0"
    ),
    name: "27 - Rebaixamento",
    id: "27",
  },
  {
    type: "img",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/b87xq1avebdmrwr/Marcas%20das%20agress%C3%B5es.jpg?dl=0"
    ),
    name: "Marcas das agressões",
    id: "28",
  },
  {
    type: "vid",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/5jetz4pn9bv95xp/1%20-%20Prepara%C3%A7%C3%A3o%20para%20tentar%20criar%20falsa%20situa%C3%A7%C3%A3o%20de%20aliena%C3%A7%C3%A3o%20parental?dl=0"
    ),
    name: "1 - Preparação para tentar criar falsa situação de alienação parental",
    id: "1",
  },
  {
    type: "vid",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/8yjatp7aao022jv/2%20-%20Utiliza%C3%A7%C3%A3o%20da%20PMMG%20para%20tentar%20coagir%20a%20irm%C3%A3%20do%20representante%20e%20os%20demais%20familiares.mp4?dl=0"
    ),
    name: "2 - Utilização da PMMG para tentar coagir a vítima e os demais familiares dela",
    id: "2",
  },
  {
    type: "audio",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/95azw1jyzeyn2vq/3%20-%20%C3%81udio%20de%202016%20com%20agress%C3%B5es%2C%20viol%C3%AAncias%2C%20desest%C3%ADmulos%2C%20tentativa%20de%20aliena%C3%A7%C3%A3o%20parental%20da%20irm%C3%A3%20do%20Autor%20com%20agress%C3%A3o%20do%20Autor%20e%20da%20fam%C3%ADlia%20dele.mp4?dl=0"
    ),
    name: "3 - Áudio de 2016 com agressões, violências, desestímulos, tentativa de alienação parental da vítima, agressão da família dela",
    id: "3",
  },
  {
    type: "audio",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/3pdutcttlvz3ucw/4%20-%20%C3%81udio%202016%20-%20Agress%C3%B5es%20f%C3%ADsicas%2C%20psicol%C3%B3gicas%2C%20xingamentos%20e%20humilha%C3%A7%C3%B5es%20%28escutar%20principalmente%20a%20partir%20de%201%3A05%3A58%29.mp3?dl=0"
    ),
    name: "4 - Áudio 2016 - Agressões físicas, psicológicas, xingamentos e humilhações (escutar principalmente a partir de 1:05:58)",
    id: "4",
  },
  {
    type: "audio",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/y8amfh389i5jc2m/5%20-%20Confiss%C3%B5es%3A%20N%C3%A3o%20gosta%20da%20irm%C3%A3%20do%20Autor%20e%20vai%20se%20vingar%20dela%20em%20at%C3%A9%2018%20anos%2C%20pois%20vai%20agir%20com%20temperan%C3%A7a%20e%20jamais%20esquecer%C3%A1%20de%20se%20vingar%3B%20N%C3%A3o%20quer%20as%20filhas%20vinculadas%20ou%20parecidas%20com%20a%20m%C3%A3e.mpeg?dl=0"
    ),
    name: "5 - Confissões: Não gosta da vítima e vai se vingar dela em até 18 anos, pois vai agir com temperança e jamais esquecerá de se vingar; Não quer as filhas vinculadas ou parecidas com a mãe",
    id: "5",
  },
  {
    type: "audio",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/sp5631jeyflmw8g/6%20-%20Amea%C3%A7as%20para%20que%20a%20irm%C3%A3%20do%20Autor%20n%C3%A3o%20entre%20com%20determinados%20fatos%20no%20processo%20de%20div%C3%B3rcio%20e%20tentativa%20de%20aliena%C3%A7%C3%A3o%20parental%20da%20m%C3%A3e%20com%20total%20imposi%C3%A7%C3%A3o%20da%20vontade%20do%20Representado.mpeg?dl=0"
    ),
    name: "6 - Ameaças para que a vítima não entre com determinados fatos no processo de divórcio e tentativa de alienação parental da mãe com total imposição da vontade do agressor",
    id: "6",
  },
  {
    type: "audio",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/r6h6o2f7jgm29j3/7%20-%20Auto-vangloria%C3%A7%C3%A3o%20do%20Representado%20e%20minora%C3%A7%C3%A3o%20da%20irm%C3%A3%20do%20Autor.ogg?dl=0"
    ),
    name: "7 - Auto-vangloriação do agressor e minoração da vítima",
    id: "7",
  },
  {
    type: "audio",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/jkwgosz0ng6lhk2/8%20-%20Proibi%C3%A7%C3%A3o%20pelo%20Representado%20de%20que%20a%20irm%C3%A3%20do%20Autor%20contasse%20a%20hist%C3%B3ria%20real%20para%20as%20pessoas.mpeg?dl=0"
    ),
    name: "8 - Proibição pelo agressor de que a vítima contasse a história real para as pessoas",
    id: "8",
  },
  {
    type: "audio",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/n1o5t1nv47k0qhs/9%20-%20Viol%C3%AAncia%20psicol%C3%B3gica%2C%20desvincula%C3%A7%C3%A3o%20com%20a%20filha%20Sophia%2C%20minimiza%C3%A7%C3%A3o%20da%20irm%C3%A3%20do%20Autor%20e%20prepara%C3%A7%C3%A3o%20da%20vingan%C3%A7a.mpeg?dl=0"
    ),
    name: "9 - Violência psicológica, desvinculação com a filha Sophia, minimização da vítima e preparação da vingança",
    id: "9",
  },
];
