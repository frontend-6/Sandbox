let pagination = '';

for (let i = 1; i <= 5; i++) {
    
    if ( i == 3 ) {
        pagination += `<span>${i}</span> `;
        continue;
    }
    pagination += `<a href="#">${i}</a> `;
    
}

document.write(pagination);