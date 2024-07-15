// scripts/employee.js
function showNotification(message, isError = false) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    if (isError) {
        notification.classList.add('error');
    }

    setTimeout(() => {
        notification.classList.remove('show');
        if (isError) {
            notification.classList.remove('error');
        }
    }, 3000);
}

function addEmployee() {
    const name = document.getElementById('employee-name').value;
    const entryDate = document.getElementById('entry-date').value;
    const salary = document.getElementById('salary').value;
    const photo = document.getElementById('photo').files[0];

    if (!name || !entryDate || !salary || !photo) {
        showNotification("Por favor, preencha todos os campos.", true);
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="employee">
                <img src="${e.target.result}" alt="${name}" class="employee-photo">
                <div class="employee-details">
                    <p>Nome: ${name}</p>
                    <p>Data de Entrada: ${entryDate}</p>
                    <p>Salário: R$ ${salary}</p>
                    <button onclick="removeEmployee(this)">Remover</button>
                </div>
            </div>
        `;
        document.getElementById('list').appendChild(listItem);
        document.getElementById('employee-form').reset();
        showNotification("Funcionário adicionado com sucesso!");
    };
    reader.readAsDataURL(photo);
}

function removeEmployee(button) {
    const listItem = button.parentNode.parentNode.parentNode;
    listItem.remove();
    showNotification("Funcionário removido com sucesso!", true);
}