import React, { useContext, useRef, useState } from "react";
import { Box, Button, Input } from "@mui/material";
import { MdAddAPhoto } from "react-icons/md";
import { Block, BlockBox, EditPicture, Form, Media, MediaBlock } from "@components/styled/account.styled";

export const AccountSettings = () => {
  const [show, setShow] = useState(false);
  const [picPath, setPicPath] = useState("egg.jpg");
  const picInput = useRef("pic");

  const [values, setValues] = useState({
    fullname: "Timothy T. Joe",
    email: "user.email",
    org:" user.org",
    picture: "egg.jpg",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setShow(true);
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const changePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPicPath(e.target.value);
  };

  const handleEditPicture = () => {
    picInput.current.click();
  };

  return (
    <BlockBox>
      <MediaBlock>
        <Media>
          <img src={picPath} alt={picPath} />
          <EditPicture onClick={handleEditPicture}>
            <MdAddAPhoto />
          </EditPicture>
          <input
            name="picture"
            type="file"
            hidden
            onChange={changePicture}
            ref={picInput}
          />
        </Media>
        <Block>
          <Form method="post">
            <Input
              name="fullname"
              type="text"
              onChange={handleChange}
              value={values.fullname}
            />
            <Input
              name="email"
              onChange={handleChange}
              type="text"
              value={values.email}
            />
            <Input
              name="org"
              onChange={handleChange}
              type="text"
              placeholder="Add Organization"
              value={values.org}
            />
            {show && (
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Save
                </Button>
              </Box>
            )}
          </Form>
        </Block>
      </MediaBlock>
    </BlockBox>
  );
};

export default AccountSettings;
