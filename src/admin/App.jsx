import * as React from "react";
import {Admin, Resource, ListGuesser} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import Dashboard from '../Dashboard';

const App = () => (
    <Admin dashboard={Dashboard} dataProvider={simpleRestProvider('https://jsonplaceholder.typicode.com/')}>
        <Resource name="users" list={ListGuesser} />
    </Admin>
);

export default App;