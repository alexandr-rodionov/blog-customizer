import { useEffect } from 'react';

export const useScrollBarHidden = (isOpen: boolean) => {
	useEffect(() => {
		const scrollBarSize =
			window.innerWidth - document.documentElement.clientWidth;

		document.body.style.overflow = isOpen ? 'hidden' : '';
		document.body.style['paddingRight'] = isOpen ? `${scrollBarSize}px` : '';

		return () => {
			document.body.style.overflow = '';
			document.body.style['paddingRight'] = '';
		};
	}, [isOpen]);
};
