import { IRootCSSVarLightModeChange } from '../../../helpers/HandleRootVariableLightModeChange';

export const googleSignInLightModeCSSVariables: IRootCSSVarLightModeChange[] = [
	{
		cssVariable: 'google-sign-in-button-bg-color',
		lightPropertyValue: 'hsl(0, 0%, 80%)',
		darkPropertyValue: 'hsl(0, 0%, 17%)',
	},
	{
		cssVariable: 'google-sign-in-button-hover-bg-color',
		lightPropertyValue: 'hsl(0, 0%, 70%)',
		darkPropertyValue: 'hsl(0, 0%, 9%)',
	},
	{
		cssVariable: 'google-sign-in-button-text-color',
		lightPropertyValue: 'hsl(0, 0%, 12%)',
		darkPropertyValue: '#ffffff',
	},
	{
		cssVariable: 'email-sign-in-button-bg-color',
		lightPropertyValue: 'hsl(5, 69%, 54%)',
		darkPropertyValue: 'hsl(5, 69%, 34%)',
	},
	{
		cssVariable: 'email-sign-in-button-hover-bg-color',
		lightPropertyValue: 'hsl(5, 69%, 43%)',
		darkPropertyValue: 'hsl(5, 69%, 19%)',
	},
	{
		cssVariable: 'email-sign-in-button-text-color',
		lightPropertyValue: '#ffffff',
		darkPropertyValue: '#ffffff',
	},
];
