chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const { checkbox } = message;
    if (checkbox) {
    document.getElementById('body').style.display = checkbox ? 'none': 'block';
    }
    });