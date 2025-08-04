export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm z-50">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-indigo-400 border-t-transparent animate-spin-reverse"></div>
        <div className="absolute inset-4 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}


// export default function LoadingSpinner() {
//   return (
//     <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm z-50">
//       <div className="flex space-x-2 mb-4">
//         <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
//         <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
//         <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>
//       </div>
//       <p className="text-blue-700 font-semibold text-sm animate-pulse">Loading, please wait...</p>
//     </div>
//   );
// }
