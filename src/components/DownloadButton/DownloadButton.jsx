// Utilizando DOM Anchor Object para download do curriculo em pdf
const downloadButton = () =>{
    //Atribui o caminho do arquivo
    const pdfPath = require('../../assets/misc/curriculo.pdf');
    //Cria um novo elemento ancora<a> e vincula na constante link
    const link = document.createElement("a");
    //Atribui ao href do elemento ancora<a> com o path
    link.href = pdfPath;
    //Define o download do <a>(o nome do arquivo que vai ser baixado)
    link.download = "curriculo.pdf";
    //Adiciona o elemento ancora<a> no documento
    document.body.appendChild(link);
    //Simula o clique, acionando o download do elemento no href
    link.click();
    //Remove o elemento ancora<a> do documento
    document.body.removeChild(link);
  }
  export default downloadButton