import styled from "@emotion/styled";
import {
  Box,
  IconButton,
  List,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { BoxProps } from "@mui/material/Box";
import { FLEXROW } from "@components/styled/common.styled";
import { CustomListItem } from "@components/common/custom.list";
import { formatDistanceToNow } from "date-fns";
import { RxTrash } from "react-icons/rx";
import { useEffect, useState } from "react";
import lodash from "lodash";
import demodata from "@components/data/demoexpense.json";

interface ITransaction {
  data: any[];
  handleDelete: (id: string | number) => void;
  heading?: string;
}

interface IInnerSpan extends BoxProps {
  bgcolor: string;
}

const InnerSpan = styled(Box)<IInnerSpan>`
  font-weight: 600;
  border-radius: 17px;
  background-color: ${(props) => props.bgcolor};
  color: ${blue[800]};
  padding: 6px 12px;
`;

const ListItem = styled(CustomListItem)`
  background-color: ${blue[50]};
`;

export const Transaction: React.FC<ITransaction> = ({
  data,
  heading,
  handleDelete,
}) => {
  const [tData, setTData] = useState<any[]>([]);

  useEffect(() => {
    if (lodash.isEmpty(data)) {
      setTData(demodata);
    }
    setTData(data);
  }, [, data]);

  return (
    <Box>
      <Typography variant="h6">{heading}</Typography>
      <List sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {tData.map((item, key) => (
          <ListItem
            key={key}
            sx={{ fontSize: "small" }}
            secondaryAction={
              <FLEXROW>
                <InnerSpan bgcolor={blue[100]}>
                  {` L$ ${Number(item.lrd).toLocaleString("en-US")}`}
                </InnerSpan>
                <Tooltip title="Delete">
                  <IconButton
                    size="small"
                    onClick={() => handleDelete(item.id)}
                  >
                    <RxTrash />
                  </IconButton>
                </Tooltip>
              </FLEXROW>
            }
          >
            <ListItemText
              primary={item.title}
              secondary={`${formatDistanceToNow(item.created, {
                addSuffix: true,
              })}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Transaction;
