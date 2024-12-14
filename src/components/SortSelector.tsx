import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectedSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "released", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by {currentSortOrder?.label || "Relevance"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectedSortOrder(order.value)}
            value={order.value}
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
