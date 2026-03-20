import { SignedXml } from "xml-crypto";
import fs from "fs";

export function signXML(xml) {
  const cert = fs.readFileSync("cert.pem");
  const key = fs.readFileSync("key.pem");

  const sig = new SignedXml();

  sig.addReference(
    "//*[local-name(.)='infNFe']",
    ["http://www.w3.org/2000/09/xmldsig#enveloped-signature"],
    "http://www.w3.org/2001/04/xmlenc#sha256"
  );

  sig.signingKey = key;

  sig.keyInfoProvider = {
    getKeyInfo() {
      return `<X509Data></X509Data>`;
    }
  };

  sig.computeSignature(xml);

  return sig.getSignedXml();
}
