/******************/
/* YOUR CODE HERE */

var stylePanel = document.querySelector("form");
var stylePanelButton = stylePanel.querySelector("h2");


/* Click on Style Pane Button */






/* Keyboard-select and hit enter key on Style Pane Button */
if (window.innerWidth < 1172 ) {
    enableStylePanelButton();
}

window.onresize = function(event) {
    if (window.innerWidth < 1172 ) {
        enableStylePanelButton();
    } else {
        disableStylePanelButton();
    }
};

function enableStylePanelButton() {
    stylePanelButton.addEventListener("click", toggleStylePanel);
    
    stylePanelButton.setAttribute("tabindex", "0");
    stylePanelButton.setAttribute("role", "button");

    stylePanelButton.addEventListener("keydown", hitEnterOnStylePanelButton);
}

function disableStylePanelButton() {
    stylePanelButton.removeEventListener("click", toggleStylePanel);
    
    stylePanelButton.removeAttribute("tabindex");
    stylePanelButton.removeAttribute("role");

    stylePanelButton.removeEventListener("keydown", hitEnterOnStylePanelButton);
}

function hitEnterOnStylePanelButton(e){
    if(e.key == "Enter") {
        toggleStylePanel();
    }
}

function toggleStylePanel(){
    document.body.classList.toggle("stylePanelVisible");
}



/* Submit the Style Panel */
stylePanel.addEventListener("submit", submitStylePanel);
// kan ook met: stylePanel.onsubmit = submitStylePanel;

function submitStylePanel(e){
    e.preventDefault();
    toggleStylePanel();
}

/* END OF YOUR CODE */
/********************/



/*****************************************************/
/*****************************************************/
/**                                                 **/
/**               styling for humpty                **/
/**  no need to check it out - it's allowed though  **/
/**                                                 **/
/*****************************************************/
/*****************************************************/

/* Change an option */
document.querySelectorAll("input").forEach(function(theOption){
   theOption.addEventListener("change", function(e){
        let attributeToChange = e.target.name;
        let newValue = e.target.value;
        document.body.setAttribute(attributeToChange, newValue);
    }); 
});