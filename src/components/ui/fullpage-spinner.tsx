export function FullPageSpinner() {
  return (
    <div
      role="status"
      className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black/90 z-50"
    >
      <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200 flex space-x-1">
        {'react-ts-boilerplate'.split('').map((char, i) => (
          <span
            key={char}
            className="inline-block animate-wave"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </h1>

      <style>{`
        @keyframes wave {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }
        .animate-wave {
          animation-name: wave;
          animation-duration: 1.5s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
