import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  setor: g.string(),
  reunioes: g
    .relation(() => Reuniao)
    .list()
    .optional(),
});

const Reuniao = g.model("Reuniao", {
  lar: g.string().length({ min: 3 }),
  status: g.string(),
  category: g.string().search(),
  assistenteResponsavel: g.relation(() => User),
  partecipantes: g
    .relation(() => Partecipante)
    .list()
    .optional(),
});

const Partecipante = g.model("Partecipante", {
  name: g.string().length({ min: 2, max: 25 }),
  telefone: g.string().optional(),
  reuniao: g.relation(() => Reuniao),
});

export default config({
  schema: g,
});
