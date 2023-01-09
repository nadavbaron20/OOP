// class Render {
//     #tagName;
//     #tagAttribute;
//     #tagAttributeContent;
//     #tagTextContent;
//     constructor(tagNameInput, tagAttributeInput, tagAttributeContentInput, tagTextConentInput) {
//         this.#tagName = tagNameInput;
//         this.#tagAttribute = tagAttributeInput;
//         this.#tagAttributeContent = tagAttributeContentInput;
//         this.#tagTextContent = tagTextConentInput;
//     }
//     print() {
//         let newHTML = document.createElement(this.#tagName);
//         let newTextNode = document.createTextNode(this.#tagTextContent);

//         newHTML.setAttribute(this.#tagAttribute, this.#tagAttributeContent);
//         newHTML.appendChild(newTextNode);

//         this.#addEvent(newHTML);
//     }
//     #addEvent(htmlElement) { //newHTML
//         htmlElement.addEventListener('click',()=>{ //newHTML.addEventListener()
//             alert('hii');
//         });
//         document.body.appendChild(htmlElement); //newHTML -> BODY
//     }
// }
// let newElement = new Render('div','class','happy','Click to enter');
// newElement.print();

class PC {
    pcName;
    pcProccesor;
    pcRAM;
    pcGC;
    pcHD;
    pcMB;
    constructor(pcNameInput, pcProccesorInput, pcRAMInput, pcGCInput, pcHDInput, pcMBInput) {
        this.pcName = pcNameInput;
        this.pcProccesor = pcProccesorInput;
        this.pcRAM = pcRAMInput;
        this.pcGC = pcGCInput;
        this.pcHD = pcHDInput;
        this.pcMB = pcMBInput;
    }
}
class Render {
    #pcObject;
    constructor(pcObjectInput) {
        this.#pcObject = pcObjectInput;
    }
    print() {
        let divLocation = document.getElementById('pcInfo');
        divLocation.innerHTML = '';

        let textInfo = `
        PC Name: ${this.#pcObject.pcName}
        PC Proccesor: ${this.#pcObject.pcProccesor}
        PC RAM: ${this.#pcObject.pcRAM}
        PC HD: ${this.#pcObject.pcHD}
        PC Monitor Brand: ${this.#pcObject.pcMB}
        PC Graphic Card: ${this.#pcObject.pcGC}
        `;

        divLocation.innerText = textInfo;
    }
}

let pc1 = new PC("Elis PC", "Intel", "16gb", "GeForce", "300gb", "Lenovo");
let pc2 = new PC("Yoavs PC", "AMD", "16gb", "GeForce", "200gb", "Lenovo");
let pc3 = new PC("Yarons PC", "Intel", "20gb", "GeForce", "300gb", "Acer");
let pcContainer = [pc1, pc2, pc3];
pcContainer.forEach((pc) => {
  let newBtn = document.createElement("button");
  let btnName = document.createTextNode(pc.pcName);
  newBtn.appendChild(btnName);
  newBtn.addEventListener("click", () => {
    let newHTML = new Render(pc);
    newHTML.print();
  });
  document.body.appendChild(newBtn);
});

