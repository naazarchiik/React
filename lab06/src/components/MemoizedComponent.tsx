import React, { memo } from 'react';

interface Props {
	value: string;
}

const MemoizedComponent: React.FC<Props> = ({ value }) => {
	return <div>{value}</div>;
};

export default memo(MemoizedComponent);
