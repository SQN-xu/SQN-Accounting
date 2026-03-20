export async function importarXML(xml) {
  const res = await fetch("http://localhost:3000/api/fiscal/nfe/importar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ xml }),
  });

  return res.json();
}

export async function listarNotas() {
  const res = await fetch("http://localhost:3000/api/fiscal/nfe");
  return res.json();
}
