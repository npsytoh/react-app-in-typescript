import React from 'react';
import Counter from './Counter';
import CounterWithReducer from './CounterWithReducer';
import InputForm from './InputForm';

interface AppProps {
	message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
	return (
		<div>
			<InputForm />
			<CounterWithReducer />
		</div>
	);
};

App.defaultProps = {
	message: 'Hello defaultProps!',
};

export default App;
