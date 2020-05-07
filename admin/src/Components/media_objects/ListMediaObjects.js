import React from "react";
import { List, Datagrid, TextField, ShowButton } from "react-admin";

const ListMediaObjects = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="contentUrl" />
      <ShowButton />
    </Datagrid>
  </List>
);

export default ListMediaObjects;
