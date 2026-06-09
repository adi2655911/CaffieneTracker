import { writable } from 'svelte/store';

export interface Toast {
	id: string;
	message: string;
	type: 'success' | 'error' | 'info' | 'warning';
	duration?: number;
}

function createToastStore() {
	const { subscribe, set, update } = writable<Toast[]>([]);

	return {
		subscribe,
		success: (message: string, duration = 3000) => {
			const id = Math.random().toString(36).substr(2, 9);
			update((toasts) => [...toasts, { id, message, type: 'success', duration }]);
			setTimeout(() => {
				update((toasts) => toasts.filter((t) => t.id !== id));
			}, duration);
		},
		error: (message: string, duration = 4000) => {
			const id = Math.random().toString(36).substr(2, 9);
			update((toasts) => [...toasts, { id, message, type: 'error', duration }]);
			setTimeout(() => {
				update((toasts) => toasts.filter((t) => t.id !== id));
			}, duration);
		},
		info: (message: string, duration = 3000) => {
			const id = Math.random().toString(36).substr(2, 9);
			update((toasts) => [...toasts, { id, message, type: 'info', duration }]);
			setTimeout(() => {
				update((toasts) => toasts.filter((t) => t.id !== id));
			}, duration);
		},
		warning: (message: string, duration = 3000) => {
			const id = Math.random().toString(36).substr(2, 9);
			update((toasts) => [...toasts, { id, message, type: 'warning', duration }]);
			setTimeout(() => {
				update((toasts) => toasts.filter((t) => t.id !== id));
			}, duration);
		},
		remove: (id: string) => {
			update((toasts) => toasts.filter((t) => t.id !== id));
		}
	};
}

export const toastStore = createToastStore();