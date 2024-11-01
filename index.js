function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
        section.style.backgroundColor = ""; 
    });
    const section = document.getElementById(sectionId);
    section.classList.add('active');
    switch (sectionId) {
        case 'reverseSection':
            section.style.backgroundColor = '#ff9aa2'; 
            break;
        case 'palindromeSection':
            section.style.backgroundColor = '#b5e7a0'; 
            break;
        case 'tipCalculatorSection':
            section.style.backgroundColor = '#a2d5f2'; 
            break;
    }
}
function reverseString() {
    const input = document.getElementById("inputString").value;
    const reversed = input.split("").reverse().join("");
    document.getElementById("reverseResult").innerText = "Reversed String: " + reversed;
}
function checkPalindrome() {
    const input = document.getElementById("inputNumber").value;
    const reversed = input.split("").reverse().join("");
    const isPalindrome = input === reversed;
    document.getElementById("palindromeResult").innerText = isPalindrome ? "It's a palindrome!" : "Not a palindrome.";
}
function calculateTotal() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tipPercent = parseFloat(document.getElementById("tipPercent").value);

    if (isNaN(subtotal) || isNaN(tipPercent)) {
        document.getElementById("tipResult").innerText = "Please enter valid numbers.";
        return;
    }

    const tipAmount = subtotal * (tipPercent / 100);
    const total = subtotal + tipAmount;
    document.getElementById("tipResult").innerText = `Total with Tip: $${total.toFixed(2)}`;
}
showSection('reverseSection');
