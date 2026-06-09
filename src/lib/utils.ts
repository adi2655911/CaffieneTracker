export function formatDate(date: Date): string {
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export function formatTime(date: Date): string {
	return date.toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit'
	});
}

export function formatDateTime(date: Date): string {
	return `${formatDate(date)} ${formatTime(date)}`;
}

export function calculateCaffeineDecay(mg: number, hours: number): number {
	// Caffeine half-life is ~5 hours
	const halfLife = 5;
	const decayFactor = Math.pow(0.5, hours / halfLife);
	return mg * decayFactor;
}