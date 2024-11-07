import React, { useState, useRef } from 'react';
import Modal from './components/Modal';

const App: React.FC = () => {
	const [isModalOpen, setModalOpen] = useState(false);
	const openButtonRef = useRef<HTMLButtonElement>(null);

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
		openButtonRef.current?.focus();
	};

	return (
		<div>
			<h1>Focus Trap Demonstration</h1>
			<p>
				Click the button below to open a modal. When the modal is open, try to
				navigate through the focusable elements using the Tab key or Shift + Tab. The focus
				should be trapped within the modal.
			</p>
			<button ref={openButtonRef} onClick={openModal}>
				Open Modal
			</button>

			{isModalOpen && (
				<Modal>
					
						<h2>Modal Content</h2>
						<p>This is a modal with focus trap.</p>
						<button>First Button</button>
						<button>Second Button</button>
						<button onClick={closeModal}>Close Modal</button>
					
				</Modal>
			)}
		</div>
	);
};

export default App;
