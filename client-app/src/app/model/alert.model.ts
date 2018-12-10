export class Alert {
	severity: Severity;
	message: string;

	constructor(severity: Severity, message: string) {
		this.severity = severity;
		this.message = message;
	}
}

export enum Severity { 
	INFO = 'info', SUCCESS = 'success', WARNING = 'warning', DANGER = 'danger', PRIMARY ='primary', SECONDARY ='secondary', LIGHT ='light', DARK ='dark'
}