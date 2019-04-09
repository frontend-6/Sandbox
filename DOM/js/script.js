// js goes here
// var a = document.querySelectorAll('img')[1];

// a.style = "width:50px; height:200px"
// a.classList.add(['kotik'], ['kotik--krasiviy'])
// var b = document.createElement('img');

// var attr = document.createAttribute('src');

// attr.nodeValue = "https://cs8.pikabu.ru/post_img/big/2016/12/28/1/1482881197192578721.jpg";

// b.setAttributeNode(attr);

// document.body.prepend(b);

let parentNode = document.getElementById('body');

let text = '';


/**
 * @description function to build nodes tree
 * @param {nodesList} nodeList 
 */
function makeText(nodeList, kolichestvoPogrujeniy) {

    const count = nodeList.childNodes.length;

    /**
     * перебираем массив нод нашей ноды
     */
    for (let i = 0; i < count; i++) {

        /**
         * в зависимости от типа ноды 
         */
        switch (nodeList.childNodes[i].nodeType) {
            case 1:
                text += nodeList.childNodes[i].nodeName;
                text += nodeList.childNodes[i].classList != '' ? "(class:" + nodeList.childNodes[i].classList + ")" : '';
                if (nodeList.childNodes[i].hasChildNodes) {
                    text += "\n";

                    for (let i = 0; i < kolichestvoPogrujeniy; i++) {

                        text += '\t';
                        
                    }

                    makeText(nodeList.childNodes[i], kolichestvoPogrujeniy + 1)
                }

                break;
        
            default:
                break;
        }

    }
}

makeText(parentNode, 1);

document.getElementById('tree').innerHTML = `<pre>${text}</pre>`;