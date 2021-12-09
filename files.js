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
];
