import { writable } from 'svelte/store';

export interface User {
	id: string;
	username: string;
	email: string;
	displayName: string;
	profileImage?: string;
}

export interface AuthState {
	isAuthenticated: boolean;
	user: User | null;
	isLoading: boolean;
}

function createAuthStore() {
	const initialState: AuthState = {
		isAuthenticated: false,
		user: null,
		isLoading: false
	};

	const { subscribe, set, update } = writable<AuthState>(initialState);

	return {
		subscribe,
		setUser: (user: User) => {
			update((state) => ({
				...state,
				isAuthenticated: true,
				user
			}));
		},
		logout: () => {
			set(initialState);
		},
		setLoading: (isLoading: boolean) => {
			update((state) => ({
				...state,
				isLoading
			}));
		}
	};
}

export const authStore = createAuthStore();