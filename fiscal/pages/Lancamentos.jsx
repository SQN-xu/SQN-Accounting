import { useEffect, useState } from "react";
import { listarNotas, importarXML } from "../services/nfeService";

export default function Lancamentos() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    const data = await listarNotas();
    setNotas(data);
  }

  async function handleImport() {
    const nova = await importarXML("<xml>fake</xml>");
    setNotas([...notas, nova]);
  }

  return (
    <div>
      <h1>Lançamentos NF-e</h1>

      <button onClick={handleImport}>
        Importar XML
      </button>

      <table>
        <thead>
          <tr>
            <th>Número</th>
            <th>Valor</th>
            <th>ICMS</th>
          </tr>
        </thead>

        <tbody>
          {notas.map(n => (
            <tr key={n.id}>
              <td>{n.numero}</td>
              <td>{n.valor}</td>
              <td>{n.icms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
