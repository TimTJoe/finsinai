import { useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";
import { InputAdornment, IconButton } from "@mui/material";
import {
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
          <SearchResult>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </SearchResult>
        </SearchContent>
      </CustomDialog>
    </>
  );
};

const Search = SearchEngine;
export default Search;
