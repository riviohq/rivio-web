/**
 * Script to extract Google Form Entry IDs
 * 
 * Instructions:
 * 1. Open your Google Form: https://docs.google.com/forms/d/e/1FAIpQLSeRYNKypv9jMJaT3Ws-0OesfYEaBnM_5oP5a3z27LlRw1ps2Q/viewform
 * 2. Open browser DevTools (F12 or Right-click > Inspect)
 * 3. Go to Console tab
 * 4. Paste and run this script
 * 5. Copy the output entry IDs
 * 6. Update ContactUs.tsx with the correct entry IDs
 */

(function() {
  console.log('=== Google Form Entry ID Extractor ===\n');
  
  // Find all input fields in the form
  const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
  const entryIds = {};
  
  inputs.forEach((input, index) => {
    const name = input.getAttribute('name');
    const placeholder = input.getAttribute('placeholder') || input.getAttribute('aria-label') || `Field ${index + 1}`;
    
    if (name && name.startsWith('entry.')) {
      entryIds[placeholder] = name;
      console.log(`Field: "${placeholder}"`);
      console.log(`Entry ID: ${name}\n`);
    }
  });
  
  // Also check for hidden inputs
  const hiddenInputs = document.querySelectorAll('input[type="hidden"][name^="entry."]');
  hiddenInputs.forEach((input) => {
    const name = input.getAttribute('name');
    if (name && !Object.values(entryIds).includes(name)) {
      console.log(`Hidden Field Entry ID: ${name}\n`);
    }
  });
  
  console.log('=== Summary ===');
  console.log('Copy these entry IDs and update ContactUs.tsx:');
  console.log(JSON.stringify(entryIds, null, 2));
  
  return entryIds;
})();

