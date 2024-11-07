import React, { ReactNode } from 'react';
import { useFocusTrap } from '../hooks/useFocusTrap';

interface ModalProps {
	children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
	const focusTrapRef = useFocusTrap<HTMLDivElement>();

	return (
		<div className='modal-backdrop'>
			<div className='modal-content' ref={focusTrapRef} tabIndex={-1}>
				{children}
			</div>
		</div>
	);
};

export default Modal;
