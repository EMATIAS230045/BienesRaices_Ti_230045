const checkbox1 = document.getElementById('check-renta');
const checkbox2 = document.getElementById('check-venta');
function handleCheckboxChange(changedCheckbox, otherCheckbox) {
    if (changedCheckbox.checked) {
        otherCheckbox.checked = false;
    }
    changedCheckbox.value = changedCheckbox.checked ? "true" : "false";
    otherCheckbox.value = "false";
}
checkbox1.addEventListener('change', () => handleCheckboxChange(checkbox1, checkbox2));
checkbox2.addEventListener('change', () => handleCheckboxChange(checkbox2, checkbox1));