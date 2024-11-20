function toggleBackground(divNumber) {
    // Shartli xabarni ko'rsatish
    const conditionMessage = document.getElementById('condition-message');
    conditionMessage.classList.remove('hidden'); // Xabarni ko'rsatish

    // Har bir div uchun maxsus shart matni
    let newMessage = "";
    if (divNumber === 1) {
      newMessage = "Div 1 uchun shart!";
    } else if (divNumber === 2) {
      newMessage = "Div 2 uchun shart!";
    } else if (divNumber === 3) {
      newMessage = "Div 3 uchun shart!";
    } else if (divNumber === 4) {
      newMessage = "Div 4 uchun shart!";
    } else if (divNumber === 5) {
      newMessage = "Div 5 uchun shart!";
    } else if (divNumber === 6) {
      newMessage = "Div 6 uchun shart!";
    } else if (divNumber === 7) {
      newMessage = "Div 7 uchun shart!";
    } else if (divNumber === 8) {
      newMessage = "Div 8 uchun shart!";
    }

    // Shart matnini yangilash
    conditionMessage.innerText = newMessage;

    const background = document.getElementById(`bg-${divNumber}`);
    const isVisible = background.style.opacity === "1";
    background.style.opacity = isVisible ? "0" : "1";
}