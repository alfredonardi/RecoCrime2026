export const generateDPOptions = () => {
  return [
    { value: 'DHPP', label: 'DHPP' },
    ...Array.from({ length: 103 }, (_, i) => ({
      value: `${i + 1}DP`,
      label: `${i + 1}º DP`
    }))
  ];
};