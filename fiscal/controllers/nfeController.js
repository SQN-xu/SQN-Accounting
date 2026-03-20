import * as nfeService from "../services/nfeService.js";

export async function importarXML(req, res) {
  const { xml } = req.body;

  const nota = nfeService.processarXML(xml);

  res.json(nota);
}

export async function listarNotas(req, res) {
  const notas = nfeService.listar();

  res.json(notas);
}
