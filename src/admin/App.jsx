import * as React from "react";
import {Admin, Resource, ListGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@mui/icons-material/Book';

import NotFound from "../NotFound";
import Dashboard from "../Dashboard";
import {EntityList} from "../EntityList";
import {MyLayout} from "../Layout";

//API site
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin
        //Layout
        layout={MyLayout}

        //Not found page.
        catchAll={NotFound}

        //Default page
        dashboard={Dashboard}

        //API server
        dataProvider={dataProvider}
    >
        <Resource name="Entity" list={EntityList} icon={PostIcon}/>
        <Resource name="Documents" icon={PostIcon}/>
        <Resource name="Tasks" list={ListGuesser} icon={PostIcon}/>
        <Resource name="Boards" list={ListGuesser} icon={PostIcon}/>
        <Resource name="Contracts" list={ListGuesser} icon={PostIcon}/>
        <Resource name="Disputes" list={ListGuesser} icon={PostIcon}/>
    </Admin>
);

export default App;