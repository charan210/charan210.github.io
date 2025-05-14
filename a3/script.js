const populateDays = () => {
    let daySelect = document.getElementById("day");
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }
};

const populateMonths = () => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let monthSelect = document.getElementById("month");
    months.forEach(month => {
        let option = document.createElement("option");
        option.value = month.toLowerCase();
        option.textContent = month;
        monthSelect.appendChild(option);
    });
};

const populateYears = () => {
    let yearSelect = document.getElementById("year");
    for (let i = 1980; i <= 2025; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
};

// Call functions to populate the dropdowns
populateDays();
populateMonths();
populateYears();
