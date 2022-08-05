import Document, { Head, Html, Main, NextScript } from 'next/document';

import { Sprite } from '~/components/ui/icons/Sprite';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body>
					<Sprite />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
