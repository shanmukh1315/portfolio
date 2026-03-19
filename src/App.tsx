import { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  const [shouldRenderCharacter, setShouldRenderCharacter] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const timeoutId = window.setTimeout(() => {
      setShouldRenderCharacter(true);
    }, 1200);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <LoadingProvider>
      <Suspense fallback={null}>
        <MainContainer>
          <Suspense fallback={null}>
            {shouldRenderCharacter && <CharacterModel />}
          </Suspense>
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
};

export default App;
