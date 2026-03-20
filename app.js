import express from "express";
import cors from "cors";
import fiscalRoutes from "./modules/fiscal/routes/fiscalRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/fiscal", fiscalRoutes);

export default app;
