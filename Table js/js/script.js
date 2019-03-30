let table = '';
let counter = 1;

table += `<table>`;

for (let i = 0; i < 2; i++) {
    
    table += `<tr>`;

    for (let j = 0; j < 3; j++) {
        
        table += `<td>`;

        table += counter++;

        table += `</td>`;
        
    }

    table += `</tr>`;
    
}

table += `</table>`;

document.write( table );