import MainLayout from './layouts/main-layout/MainLayout';
import Routes from './Routes';
function App() {
  return (
    <div className="root-app">
      <MainLayout>
        {<Routes />}
      </MainLayout>
    </div>
  );
}

export default App;
