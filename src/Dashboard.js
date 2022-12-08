import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Show, SimpleShowLayout, TextField, Title} from 'react-admin';

export default () => (
    <>
        <Card>
            <Title title="Welcome to the dashboard" />
            <CardContent>Please select a component in the left menu.</CardContent>
        </Card>
    </>
);