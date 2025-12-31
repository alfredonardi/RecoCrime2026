import React from 'react';

interface ResetButtonProps {
  onReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
  return (
    <button
      onClick={onReset}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      Gerar Nova RECO
    </button>
  );
}

export default ResetButton;