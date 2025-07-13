// src/data/tree-vareth.js
export const treeData = {
  people: [
    { id: "selene", name: "Selene Vareth" },
    { id: "edran", name: "Lord Edran Marel" },
    //...
    { id: "ysilda", name: "Ysilda Vareth", title: "Guardiana de la Escuela" },
    // hechiceras actuales
    { id: "varethia", name: "Varethia Vareth", title: "Imperio de Valtheris" },
    // etc.
  ],
  relationships: [
    { parent: "selene", child: "dravanus" },
    { parent: "edran", child: "dravanus" },
    { parent: "dravanus", child: "elira" },
    { parent: "dravanus", child: "syrenia" },
    // repetidos cruzados, etc...
  ]
};
