const calculateRem = (size: number): string => {
	// 16 is the default size
	return `${size / 16}rem`;
};

export { calculateRem };
