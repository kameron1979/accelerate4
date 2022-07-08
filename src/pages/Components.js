import React from "react";
import "./Pages.css";
import { Button, Container, Divider, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { InputRow } from "./InputRow";
import { MyCarousel } from "../components/carousel";

export default function Components() {
  const [name, version, executionLevel, executionPoint, setName] = useState("");
  const [story, setStory] = useState({});
  const [inputFields, setInputFields] = useState([
    {
      componentName: "",
      componentVersion: "",
      containerName: "",
      location: ""
    }
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setStory({ trips: [...inputFields], name });
    console.log("jennie", story);
  };

  const handleChange = (event, index) => {
    const values = [...inputFields];
    console.log("momo", values);
    values[index][event.target.name] = event.target.value;

    setInputFields(values);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  // adds new input
  const handleAdd = () => {
    setInputFields([
      ...inputFields,
      {
        title: "",
        description: "",
        location: ""
      }
    ]);
  };

  // removes input
  const handleRemove = (index) => {
    if (inputFields.length !== 1) {
      const values = [...inputFields];
      values.splice(index, 1);
      setInputFields(values);
    }
  };

  return (
    <>
      <Container align-items-left maxWidth="xs" style={{ marginTop: 10 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              name="name"
              required
              fullWidth
              label="Component Name"
              onChange={(event) => handleName(event)}
              value="SIP Ingress"
            />
            <TextField
              name="version"
              required
              fullWidth
              label="Version"
              onChange={(event) => handleName(event)}
              value="2"
            />

            <Divider style={{ marginBottom: 10, marginTop: 20 }} />
            <h4>Containers</h4>
            {inputFields.map((item, index) => (
              <div key={index}>
                <InputRow
                  inputFields={inputFields}
                  index={index}
                  item={item}
                  handleChange={handleChange}
                  handleRemove={handleRemove}
                  handleAdd={handleAdd}
                />

                <Divider style={{ marginBottom: 10 }} />
              </div>
            ))}
            <Button type="submit" variant="contained" disableElevation>
              Apply
            </Button>
            <Button disableElevation>Cancel</Button>
          </Stack>
        </form>
      </Container>
    </>
  );
}
