'use client';
import { useState } from 'react';

const ResumeDownload = () => {
  type ResumeKey = 'psychology' | 'combined' | 'appdev';

  const [, setSelectedResume] = useState<ResumeKey>('psychology');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const resumes: Record<ResumeKey, { label: string; file: string }> = {
    psychology: { label: 'Psychology Resume', file: '/psychology_resume.pdf' },
    combined: { label: 'Combined Resume', file: '/combined_resume.pdf' },
    appdev: { label: 'App Developer Portfolio', file: '/appdev_portfolio.pdf' },
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleResumeSelect = (key: ResumeKey) => {
    setSelectedResume(key);
    closeDialog();
    // Trigger download immediately after selection
    const link = document.createElement('a');
    link.href = resumes[key].file;
    link.download = resumes[key].label;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-center mt-8">
      <button
        onClick={openDialog}
        className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 inline-block mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-5l-4 4-4-4m8-3v9"
          />
        </svg>
        Download Resume
      </button>

      {isDialogOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-gray-800 rounded-xl shadow-xl p-8 max-w-md w-full">
            <h2 className="text-3xl font-semibold text-gray-300 mb-6">Choose Your Resume</h2>
            <div className="grid grid-cols-1 gap-4">
              {Object.entries(resumes).map(([key, { label }]) => (
                <button
                  key={key}
                  onClick={() => handleResumeSelect(key as ResumeKey)}
                  className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              onClick={closeDialog}
              className="mt-8 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeDownload;
