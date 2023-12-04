import { useContext, createContext, useState, useMemo } from "react";
import LoadingSpinner from "assets/loadingSpinner.gif";

const LoadingContext = createContext();

export const LoadingContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const hideLoader = () => setIsLoading(false);
  const showLoader = () => setIsLoading(true);

  const value = useMemo(() => {
    return { isLoading, hideLoader, showLoader };
  }, [isLoading, hideLoader, showLoader]);

  return (
    <LoadingContext.Provider value={value}>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <img src={LoadingSpinner} alt="loading spinner" className="spinner" />
        </div>
      ) : (
        <>{children}</>
      )}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => {
  return useContext(LoadingContext);
};
