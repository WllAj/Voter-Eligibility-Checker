/**
 * PROJECT: Event Ticket Booking System
 * Technical Requirements: DOM manipulation, Event handling, 
 * Validation, Functions & Logic.
 */

function processBooking() {
    [span_2](start_span)// 1. DOM Elements: Xulashada walxaha bogga[span_2](end_span)
    const nameInput = document.getElementById('custName');
    const eventSelect = document.getElementById('eventChoice');
    const qtyInput = document.getElementById('ticketQty');
    const resultDiv = document.getElementById('result');

    [span_3](start_span)// 2. Validation & Input Handling[span_3](end_span)
    const name = nameInput.value.trim();
    const price = parseFloat(eventSelect.value);
    const qty = parseInt(qtyInput.value);

    [span_4](start_span)// Hubinta haddii xogta la geliyey ay khaldan tahay[span_4](end_span)
    if (name === "" || name.length < 3) {
        showResult(resultDiv, "Fadlan geli magac sax ah!", "error");
        return;
    }

    if (isNaN(qty) || qty <= 0 || qty > 10) {
        showResult(resultDiv, "Tirada waa inay ahaataa 1-10!", "error");
        return;
    }

    [span_5](start_span)[span_6](start_span)// 3. Logic & Calculation: Xisaabinta qiimaha[span_5](end_span)[span_6](end_span)
    const total = price * qty;
    
    [span_7](start_span)// 4. DOM Manipulation: Muujinta natiijada[span_7](end_span)
    const output = `
        <strong>Booking Successful!</strong><br>
        Macaamiil: ${name}<br>
        Total: $${total.toFixed(2)}
    `;
    
    showResult(resultDiv, output, "success");
    
    [span_8](start_span)// Reset form-ka ka dib booking-ka[span_8](end_span)
    document.getElementById('bookingForm').reset();
}

[span_9](start_span)// Helper function oo maareysa muujinta natiijada[span_9](end_span)
function showResult(element, text, type) {
    element.innerHTML = text;
    element.className = `message ${type}`;
    element.style.display = "block"; [span_10](start_span)// Hubi inuu muuqdo[span_10](end_span)
}