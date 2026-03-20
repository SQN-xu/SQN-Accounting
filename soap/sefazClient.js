import https from "https";
import fs from "fs";
import axios from "axios";

export async function enviarLote(xml) {
  const cert = fs.readFileSync("certificado.pfx");

  const agent = new https.Agent({
    pfx: cert,
    passphrase: "SENHA",
  });

  const soapEnvelope = `
  <soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
      <nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeAutorizacao4">
        ${xml}
      </nfeDadosMsg>
    </soap12:Body>
  </soap12:Envelope>
  `;

  const response = await axios.post(
    "https://homologacao.nfe.fazenda.gov.br/ws/NFeAutorizacao4/NFeAutorizacao4.asmx",
    soapEnvelope,
    {
      httpsAgent: agent,
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
    }
  );

  return response.data;
    }
