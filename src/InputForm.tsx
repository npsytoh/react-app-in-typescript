import React, { useEffect, useRef, useState } from 'react';

const InputForm: React.FunctionComponent = () => {
	const [text, setText] = useState<string>();

	const ref = useRef<HTMLInputElement>(null!);
	const handleClick = () => {
		setText(ref.current.value);
		ref.current.value = '';
	};

	return (
		<>
			<input ref={ref} type="text" />
			<button onClick={handleClick}>Send</button>
			<p>{text}</p>
		</>
	);
};

export default InputForm;
