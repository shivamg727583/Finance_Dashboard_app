const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 z-50">

     
      <div className="absolute w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative text-center">

        <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-indigo-400 text-white shadow-lg animate-scaleIn">
          💰
        </div>

   
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white animate-slideUp">
          Finance Dashboard
        </h1>

       
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 animate-fadeIn delay-200">
          Loading your workspace...
        </p>

        <div className="flex justify-center gap-1 mt-4">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-150"></span>
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-300"></span>
        </div>

      </div>
    </div>
  );
};

export default SplashScreen;