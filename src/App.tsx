// in src/App.tsx
import { Admin } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider('https://cf-api.archvictor2022.workers.dev/api/documents');

const App = () => <Admin dataProvider={dataProvider} />;

export default App;