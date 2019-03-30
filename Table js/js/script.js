let table = '';
let counter = 1;

table += `<table>`;

for (let i = 1; i <= 9; i++) {
    
    table += `<tr>`;

    for (let j = 1; j <= 9; j++) {
        
        table += `<td>`;

        table += `<pre>${j} * ${i} = ${i*j} &nbsp;&nbsp;&nbsp;</pre>`;
        table += "<pre>" + j + " * " + i + " = " + i*j + " &nbsp;&nbsp;&nbsp;";

        table += `</td>`;
        
    }

    table += `</tr>`;
    
}

table += `</table>`;

document.write( table );