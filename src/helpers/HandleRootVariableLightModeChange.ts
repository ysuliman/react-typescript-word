export interface IRootCSSVarLightModeChange {
	cssVariable: string;
	lightPropertyValue: string;
	darkPropertyValue: string;
}

/**
 * Handle root variable light mode change
 * @param {isLightMode} isLightMode - is light mode boolean
 * @param {IRootCSSVarLightModeChange[]} cssVariableLightModeProps - list of object with css variable names, light and dark property values
 */
export const handleLightModeChange = (
	isLightMode: boolean,
	cssVariableLightModeProps: IRootCSSVarLightModeChange[]
) => {
	// Iterate through the array of light mode properties and update the UI's custom variables.
	cssVariableLightModeProps.forEach(cssVariableLightModeProp => {
		const { cssVariable, lightPropertyValue, darkPropertyValue } =
			cssVariableLightModeProp;
		document.documentElement.style.setProperty(
			`--${cssVariable}`,
			isLightMode ? lightPropertyValue : darkPropertyValue
		);
	});
};
