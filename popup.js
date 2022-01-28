const checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change', (event) => {
const { checked } = event.target;

toggleContent(checked);
});

const toggleContent = (checked) => {
    chrome.runtime.sendMessage({"checkbox": checked}, (response) => {
    
    console.log(`Checkbox is turned ${checked ? 'on' : 'off'}`)
    });
    };