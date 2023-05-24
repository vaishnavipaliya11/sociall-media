import "./App.css";
import "./custom-theme.less";

import { ConfigProvider } from "antd";
import NavigationRoutes from "./routes/NavigationRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
     <Toaster/>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#9254de",
          },
        }}
      >
        {/* <Login /> */}
        <NavigationRoutes />
      </ConfigProvider>
    </div>
  );
}

export default App;
