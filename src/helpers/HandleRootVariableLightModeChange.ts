// Helper function to handle light mode changes and update the UI's custom variables.
export const handleLightModeChange = (
	isLightMode: boolean,
	cssVariable: string,
	lightPropertyValue: string,
	darkPropertyValue: string
) => {
	if (!isLightMode) {
		document.documentElement.style.setProperty(
			`--${cssVariable}`,
			darkPropertyValue
		);
	} else {
		document.documentElement.style.setProperty(
			`--${cssVariable}`,
			lightPropertyValue
		);
	}
};
