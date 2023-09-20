import { useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";
import { InputAdornment, IconButton } from "@mui/material";
import {
  SearchDialog,
  SearchHeader,
  IconWrap,
  SearchInput,
  SearchContent,
  SearchResult,
} from "@components/styled/search.styled";
import CustomDialog from "@components/common/custom.dialog";

export const SearchEngine = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const [values, setValues] = useState({
    query: "",
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <>
      <IconButton onClick={handleOpen}>
        <MdSearch />
      </IconButton>
      <CustomDialog open={open} onClose={handleClose}>
        <SearchHeader>
          <IconWrap>
            <MdSearch />
          </IconWrap>
          <SearchInput
            placeholder="Search..."
            fullWidth
            type="search"
            inputProps={{
              startAdornment: <InputAdornment position="end">$</InputAdornment>,
            }}
          />
          <IconButton color="warning" onClick={handleClose}>
            <MdClose />
          </IconButton>
        </SearchHeader>
        <SearchContent>
          <SearchResult component="a" href="/akalakd" color={"primary"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </SearchResult>
        </SearchContent>
      </CustomDialog>
    </>
  );
};

const Search = SearchEngine;
export default Search;
