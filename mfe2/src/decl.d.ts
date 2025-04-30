declare module 'mfe1/App' {

	const App: React.ComponentType;
	export default App;
}
declare module 'mfe1/useCounter' {
	export const useCounter: (initialCount?: number) => { count: number; increment: () => void; decrement: () => void; };
}