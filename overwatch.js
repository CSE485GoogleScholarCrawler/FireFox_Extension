browser.browserAction.onClicked.addListener(alertCiting);


// function alertCiting() {
//     for (let tab of tabs) {
//         browser.tabs.sendMessage(tabs[0].id, {
//             command: "cite"
//         });
//     }
// };

function getActiveTab() {
    return browser.tabs.query({active: true, currentWindow: true});
}

function alertCiting() {
    console.log("alertCiting called");
    const gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, "hello");
      console.log("message sent");
    });
}

// function alertCiting() {
//     var sendAlert = browser.runtime.sendMessage({
//         greeting: "Clear to start citing"
//     });
//     sendAlert.then(handleResponse, handleError);
// }

//window.addEventListener(handleResponse, handleError);
