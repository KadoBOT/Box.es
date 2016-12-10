//creates a fake store to be used inside the tests
export const fakeStore = (state) => {
	return {
		default: () => {},
		subscribe: () => {},
		dispatch: () => {},
		getState: () => {
			return { ...state };
		},
	};
};
