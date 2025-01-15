'use client';

import { useEffect, useState } from 'react';
import { Button } from './components/Button/Button';
import { Htag } from './components/Htag/Htag';
import { P } from './components/P/P';
import { Tag } from './components/Tag/Tag';

export default function Home() {
	const [counter, setCounter] = useState<number>(0);

	useEffect(() => {
		console.log('Counter' + counter);
		return function cleanup() {
			console.log('Unmount');
		};
	}, []);

	return (
		<>
			<Htag tag="h1">{counter}</Htag>
			<Button appearance="primary" arrow="right" onClick={() => setCounter((x) => x + 1)}>
				Кнопка
			</Button>
			<Button appearance="ghost" arrow="down">
				Кнопка
			</Button>
			<P size="l">Большой</P>
			<P>Средний</P>
			<P size="s">Маленький</P>
			<Tag size="s">Ghost</Tag>
			<Tag size="s" color="green">
				Green
			</Tag>
			<Tag size="m" color="red">
				Red
			</Tag>
			<Tag size="s" color="primary">
				Primary
			</Tag>
		</>
	);
}
