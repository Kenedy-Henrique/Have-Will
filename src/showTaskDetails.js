function showTaskDetails(taskDetails){
    let detailsDiv = document.createElement('div');
    detailsDiv.style.width = '40%';
    detailsDiv.style.height = '50%';
    detailsDiv.style.backgroundColor = 'rgb(211, 211, 211)';
    detailsDiv.style.position = 'absolute';
    detailsDiv.style.left = '50%';
    detailsDiv.style.transform = 'translateX(-50%)';
    detailsDiv.style.top = '50px';
    detailsDiv.style.boxShadow = '12px 12px 2px 1px rgba(45, 46, 46, .2)';
    detailsDiv.style.border = '1px solid rgb(37, 39, 46)';
    detailsDiv.style.borderRadius = '10px';

    let detailsParagraph = document.createElement('p');
    detailsParagraph.style.color = 'rgb(45, 46, 56)';
    detailsParagraph.style.textAlign = 'center';
    detailsParagraph.innerHTML = taskDetails;
    detailsParagraph.style.fontFamily = 'Playfair Display';
    detailsParagraph.style.fontSize = '20px';
    detailsParagraph.style.width = '100%';
    detailsParagraph.style.height = '80%';
    detailsParagraph.style.overflowY = 'scroll';
    detailsDiv.appendChild(detailsParagraph);

    let closeBtn = document.createElement('button');
    closeBtn.style.border = 'none';
    closeBtn.innerHTML = 'Close';
    closeBtn.style.height = 'auto';
    closeBtn.style.width = 'auto';
    closeBtn.style.backgroundColor = 'rgb(37, 39, 46)';
    closeBtn.style.color = 'rgb(211, 211, 211)';
    closeBtn.style.borderRadius = '20px';
    closeBtn.style.position = 'absolute';
    closeBtn.style.left = '50%';
    closeBtn.style.transform = 'translateX(-50%)';
    closeBtn.style.bottom = '20px';
    closeBtn.style.fontFamily = 'Playfair Display';
    closeBtn.style.fontSize = '25px';

    closeBtn.addEventListener('click', () => {
        document.body.removeChild(detailsDiv);
    });
    detailsDiv.appendChild(closeBtn);

    document.body.appendChild(detailsDiv);
}

export default showTaskDetails;