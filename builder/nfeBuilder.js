import { create } from "xmlbuilder2";

export function buildNFe(dados) {
  const xml = create({ version: "1.0", encoding: "UTF-8" })
    .ele("NFe", { xmlns: "http://www.portalfiscal.inf.br/nfe" })
      .ele("infNFe", { Id: `NFe${dados.chave}`, versao: "4.00" })

        .ele("ide")
          .ele("cUF").txt("35").up()
          .ele("natOp").txt("VENDA").up()
          .ele("mod").txt("55").up()
          .ele("serie").txt("1").up()
          .ele("nNF").txt(dados.numero).up()
        .up()

        .ele("emit")
          .ele("CNPJ").txt(dados.emitente.cnpj).up()
          .ele("xNome").txt(dados.emitente.nome).up()
        .up()

        .ele("dest")
          .ele("CPF").txt(dados.destinatario.cpf).up()
          .ele("xNome").txt(dados.destinatario.nome).up()
        .up()

        .ele("total")
          .ele("ICMSTot")
            .ele("vNF").txt(dados.valor).up()
          .up()
        .up()

      .up()
    .end({ prettyPrint: true });

  return xml;
    }
