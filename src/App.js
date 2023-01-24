import React from "react";
import Routering from "./Routes/routes";

import AuthProvider from "./Contexts/auth/AuthProvider";
import PageProvider from "./Contexts/Pages/PageProvider";

function App() {
  return (
    <AuthProvider>
      <PageProvider>
        <Routering />
      </PageProvider>
    </AuthProvider>
  );
}

export default App;
