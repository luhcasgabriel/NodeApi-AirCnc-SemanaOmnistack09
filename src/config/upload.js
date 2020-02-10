// arquivo de configurção da lib multer - para upload de arquivo por requisição 


const multer = require('multer');
const path = require('path');

// exporta objeto que vai conter varias infromações
module.exports = {
    // informação storage(armazenamento) - como vai armazenar os arquivos que vão ser recebidos da nossa aplicação 
    storage: multer.diskStorage({ // o multer tem varios tipo de storage(armazenamentos) - uma deles é pelo disco (nos arquivos da aplicação (pastas))
        // dentro do storage é preciso passar duas informações
        // destino - utilizando o recurso path do node
        // __dirname - variável global que informa o diretorio do arquivo atual
        destination: path.resolve(__dirname,'..', '..', 'uploads'), // no windows e no unix as barras são entendidas diferentemente (windows\) (unix/), então o resolve troca as barras por virgulas - facilitando 
        // montar o nome do arquivo, por padrão ele monta um nome aleatório
        // pode montar o nome conforme quiser 
        // (requisição), (arquivo), (callback - função que deve ser chamada assim que o nome do arquivo estiver pronto )
            filename: (req, file, cb) => {
                    
                // pega extensão do arquivo
                const ext = path.extname(file.originalname);
                // pega nome original sem a estenção, passando nome original e extenção 
                const name = path.basename(file.originalname, ext); 

                
                // null(passaria um erro caso tivesse), ('' - formar o nome do arquivo pela junção de varias variáveis)
                cb(null, `${name}-${Date.now()}${ext}`); // fieldname - nome do arquiv que veio na requisição (sem extensão) + data atual  
        },
    
    }),


    /*
     *  storage: multer.diskStorage({ 
            destination: path.resolve(__dirname,'..', '..', 'uploads'), 
                filename: (req, file, cb) => {
                    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
        },
    }),

     */



    //                  cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`); // fieldname - nome do arquiv que veio na requisição (sem extensão) + data atual  


}; 