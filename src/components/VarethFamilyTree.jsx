import { useEffect } from 'react';
import FamilyTree from '@balkangraph/familytree.js';

FamilyTree.templates.custom = Object.assign({}, FamilyTree.templates.base);

FamilyTree.templates.custom.size = [240, 80];

FamilyTree.templates.custom.node = 
  '<rect x="0" y="0" height="80" width="240" fill="#4a4a4a" rx="10" ry="10"></rect>';

FamilyTree.templates.custom.name = 
  '<text style="font-size: 16px; font-weight: bold;" fill="#ffffff" x="120" y="45" text-anchor="middle">{val}</text>';

FamilyTree.templates.custom.title = 
  '<text style="font-size: 12px;" fill="#f0f0f0" x="120" y="60" text-anchor="middle">{val}</text>';

  export default function VarethFamilyTree() {
  useEffect(() => {
    const chart = new FamilyTree(document.getElementById("tree"), {
      template: 'custom',
      showCollapseBtn: true,
      enableSearch: false,
      nodeMouseClick: FamilyTree.action.none,
      nodeBinding: {
          name: "name",
          title: "title"
      },
      nodes: [
        // Generación fundadora
        { id: 1, pids: [2], name: "Selene Vareth"},
        { id: 2, pids: [1], name: "Lord Edran Marel" },
        { id: 3, pids: [4], mid: 1, fid: 2, name: "Dravanus Vareth", title: "Hijo de Selene", collapsed: true},
        { id: 4, pids: [3], name: "Marcel Sors" },
        { id: 5, pids: [6], mid: 1, fid: 2, name: " Alyndra Vareth", title: "Hija de Selene" },
        { id: 6, pids: [5], name: "Dorian Faelor" },
        { id: 7, pids: [8], fid: 3, mid:4, name: "Elira Vareth", title: "Hija de Dravanus" },
        { id: 8, pids: [7], name: "Cedric Marbrand", title: "Esposo de Elira" },
        { id: 9, pids: [10], fid: 3,  mid: 4, name: "Syrenia Vareth", title: "Hija de Dravanus" },
        { id: 10, pids: [9], name: "Darian Karnus", title: "Esposo de Syrenia" },
        { id: 11, pids: [12], mid: 7, fid: 8, name: "Thalindra Vareth", title: "Hija de Elira" },
        { id: 12, pids: [11], name: "Lucan Valtheris", title: "Esposo de Thalindra" },
        { id: 13, mid: 7, name: "Zyphora Vareth", title: "Hija de Elira" },
        { id: 14, pids: [15], mid: 9, fid:10, name: "Miriel Vareth", title: "Hija de Syrenia" },
        { id: 15, pids: [14], name: "Cassian Voren", title: "Esposo de Miriel" },
        { id: 16, mid: 14, fid: 15,  name: "Selendra Vareth", title: "Hija de Miriel" },
        { id: 17, pids: [18], mid: 11, fid:12, name: "Varethia Vareth", title: "Hija de Thalindra" },
        { id: 18, pids: [17], name: "Edwin Castrel", title: "Esposo de Varethia" },
        { id: 19, mid: 5, fid: 6, name: "Seraphina Vareth", title: "Hija de Alyndra" },
        { id: 20, pids: [21], mid: 5, fid: 6, name: "Lyara Vareth", title: "Hija de Alyndra"},
        { id: 21, pids: [20], name: "Sirius Ravencroft", title: "Esposo de Lyara" },
        { id: 22, pids: [37], mid: 20, fid: 21, name: "Sylwen Vareth", title: "Hija de Lyara" },
        { id: 23, mid: 20, fid: 21, name: "Ysandra Vareth", title: "Hija de Lyara" },
        { id: 24, pids: [25], mid: 23,  name: "Vaelith Vareth", title: "Hija de Ysandra" },
        { id: 25, pids: [24], name: "Aldren Moren", title: "Esposo de Vaelith" },
        { id: 26, pids: [27], mid: 5, fid: 6, name: "Ysilda Vareth", title: "Hija Alyndra" },
        { id: 27, pids: [26], name: "Faelan Draevos", title: "Esposo de Ysilda" },
        { id: 28, mid: 26, fid: 27, name: "Althira Vareth", title: "Hija de Ysilda" },
        { id: 29, pids: [30], mid: 26, fid: 27, name: "Vaelora Vareth", title: "Hija Ysilda" },
        { id: 30, pids: [29], name: "Orion Velkyr", title: "Esposo de Vaelora" },
        { id: 31, pids: [32], mid: 29, fid: 30, name: "Nysara Vareth", title: "Hija de Vaelora" },
        { id: 32, pids: [31], name: "Thalion Eldros", title: "Esposo de Nysara" },
        { id: 33, pids: [34], mid: 26, fid: 27,  name: "Syrelle Vareth", title: "Hija" },
        { id: 34, pids: [33], name: "Damarion Kael", title: "Esposo de Syrelle" },
        { id: 35, pids: [36], mid: 5, fid: 6, name: "Elaria Vareth", title: "Hija de Alyndra" },
        { id: 36, pids: [35], name: "Marko Marbrand", title: "Esposo de Elaria" },
        { id: 37, pids: [22], name: "Gideon Stormbane", title: "Esposo de Sylwen" },
        { id: 38, pids: [39], mid: 35, fid: 36, name: "Kaelith Vareth", title: "Hija de Elaria" },
        { id: 39, pids: [38], name: "Malrik Dorn", title: "Esposo de Kaelith" },
        { id: 40, mid: 38, fid: 39, name: "Elyndra Vareth", title: "Hija de Kaelith" },
      ],
    });
  }, []);

  return <div id="tree" className="w-full h-[1000px]" />;
}
