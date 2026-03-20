import { buildNFe } from "./builder/nfeBuilder.js";
import { signXML } from "./signer/signXml.js";
import { buildLote } from "./builder/enviNFe.js";
import { enviarLote } from "./soap/sefazClient.js";

export async function emitirNFe(dados) {
  const xml = buildNFe(dados);

  const xmlAssinado = signXML(xml);

  const lote = buildLote(xmlAssinado);

  const resposta = await enviarLote(lote);

  return resposta;
}
