var Languages = {
	"en": {"download-button-tip": "Download this video","download-button-text": "Download","menu-button-tip": "Choose from additional formats","group-options": "Options","group-high-definition": "High definition","group-standard-definition": "Standard definition","group-mobile": "Mobile","group-unknown": "Unknown formats","group-update": "An update is available","option-check": "Check for updates","option-format": "Title format","button-options": "options","button-options-close": "close","button-update": "Click here to update YouTube Video Download","error-no-downloads": "No downloadable streams found"},
};
Languages.current = Languages.en;
function T(item) { return Languages.current[item] || Languages.en[item]; }
