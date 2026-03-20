export function buildLote(xmlAssinado) {
  return `
  <enviNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00">
    <idLote>1</idLote>
    <indSinc>0</indSinc>
    ${xmlAssinado}
  </enviNFe>
  `;
}
