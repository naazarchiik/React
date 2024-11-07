import { useRef, useEffect } from 'react';

export const useFocusTrap = <T extends HTMLElement>() => {
	const containerRef = useRef<T>(null);

	useEffect(() => {
		const focusableSelectors = [
			'a[href]',
			'button',
			'textarea',
			'input[type="text"]',
			'input[type="radio"]',
			'input[type="checkbox"]',
			'select',
			'[tabindex]:not([tabindex="-1"])',
		];

		const getFocusableElements = (element: HTMLElement) => {
			return Array.from(
				element.querySelectorAll<HTMLElement>(focusableSelectors.join(','))
			).filter(
				(el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
			);
		};

		const handleFocusTrap = (event: KeyboardEvent) => {
			if (event.key !== 'Tab' || !containerRef.current) return;

			const focusableElements = getFocusableElements(containerRef.current);
			const firstElement = focusableElements[0];
			const lastElement = focusableElements[focusableElements.length - 1];

			if (event.shiftKey && document.activeElement === firstElement) {
				lastElement.focus();
				event.preventDefault();
			} else if (!event.shiftKey && document.activeElement === lastElement) {
				firstElement.focus();
				event.preventDefault();
			}
		};

		const focusFirstElement = () => {
			if (containerRef.current) {
				const focusableElements = getFocusableElements(containerRef.current);
				focusableElements[0]?.focus();
			}
		};

		document.addEventListener('keydown', handleFocusTrap);
		focusFirstElement();

		return () => {
			document.removeEventListener('keydown', handleFocusTrap);
		};
	}, []);

	return containerRef;
};
