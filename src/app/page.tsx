'use client';

import { Button } from './components/Button/Button';
import { Htag } from './components/Htag/Htag';

export default function Home() {
	return (
		<>
			<Htag tag="h1">Текст</Htag>
			<Button appearance="primary" arrow="right">
				Кнопка
			</Button>
			<Button appearance="ghost" arrow="down">
				Кнопка
			</Button>
		</>
	);
}
