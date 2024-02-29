window.onload = ()=>{
    add_texto = document.getElementById('addText').focus();
};

function agregarTarea() {
    add_texto = document.getElementById('addText').value;
    const li_template = `
        <div id="div_list" class="div_list">
            <input type="checkbox" id="checkbox" class="checkbox">
            <li id="tarea" class="tarea">${add_texto}</li>
        </div>
       `;
   
   const lista = document.getElementById('list');
   lista.innerHTML += li_template;
   add_texto = document.getElementById('addText').value = '';
   add_texto = document.getElementById('addText').focus();
};
function eliminarTarea(){
    const lista = document.getElementById('div_list');
    const checkbox = document.querySelectorAll('.checkbox');

    checkbox.forEach((checkboxs) => {
        if (checkboxs.checked) {
            // Elimina el elemento padre del checkbox marcado
            checkboxs.parentElement.remove();
        }
    });
    
};