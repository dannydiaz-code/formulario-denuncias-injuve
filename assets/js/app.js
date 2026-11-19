
const form = document.getElementById("complaintForm");
const dateField = document.getElementById("fecha");

const modalityField = document.getElementById("modalidad");
const personalDataSection = document.getElementById("datosIdentificacion");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const status = document.getElementById("formStatus");
const submitButton = document.getElementById("submitButton");

// Fecha máxima: hoy.
const today = new Date();
const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
].join("-");

dateField.max = localToday;

// Campos de las siete preguntas originales.
const questionFields = [
    "fecha",
    "dependencia",
    "hechos",
    "involucrados",
    "lugar",
    "evidencia",
    "adicional"
].map(id => document.getElementById(id));

// Campos personales voluntarios.
const personalFields = [
    "nombre",
    "correo",
    "telefono"
].map(id => document.getElementById(id));

// Mostrar u ocultar identificación voluntaria.
modalityField.addEventListener("change", () => {
    const identified = modalityField.value === "IDENTIFICADA";

    personalDataSection.hidden = !identified;

    if (!identified) {
        personalFields.forEach(field => {
            field.value = "";
            field.setCustomValidity("");
        });
    }

    updateProgress();
});

// Actualizar barra de progreso: siempre sobre 7 preguntas.
function updateProgress() {
    const answered = questionFields.filter(field =>
        field.value.trim() !== ""
    ).length;

    const total = questionFields.length;
    const percentage = Math.round((answered / total) * 100);

    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${answered} de ${total} respondidas`;
}

// Validar campos y actualizar progreso.
[...questionFields, ...personalFields].forEach(field => {
    field.addEventListener("input", () => {
        field.setCustomValidity("");

        if (field.required && field.value.trim() === "") {
            field.setCustomValidity("Este campo es obligatorio.");
        }

        updateProgress();
    });

    field.addEventListener("change", updateProgress);
});

// Validar fecha de los hechos.
dateField.addEventListener("change", () => {
    if (dateField.value > localToday) {
        dateField.setCustomValidity(
            "La fecha de los hechos no puede ser futura."
        );
    } else {
        dateField.setCustomValidity("");
    }
});


form.addEventListener("submit", (event) => {

    questionFields.forEach(field => {
        field.setCustomValidity("");

        if (field.required && field.value.trim() === "") {
            field.setCustomValidity("Este campo es obligatorio.");
        }
    });

    if (dateField.value > localToday) {
        dateField.setCustomValidity(
            "La fecha de los hechos no puede ser futura."
        );
    }

    if (!form.reportValidity()) {
        event.preventDefault();
        return;
    }

    // Evitar envíos repetidos.
    submitButton.disabled = true;
    submitButton.textContent = "Enviando información...";

    status.className = "form-status info";
    status.textContent = "Procesando el envío...";
});


updateProgress();
