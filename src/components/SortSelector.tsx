import useGameQueryStore from "@/store";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuPositioner,
  MenuRoot,
  MenuTrigger,
  Portal,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <MenuRoot positioning={{ strategy: "fixed" }}>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by: {currentSortOrder?.label || "Relevance"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <Portal>
        <MenuPositioner>
          <MenuContent bg={"bg.emphasized"}>
            {sortOrders.map((order) => (
              <MenuItem
                onClick={() => setSortOrder(order.value)}
                key={order.value}
                value={order.value}
                _hover={{ bg: "bg.panel" }}
              >
                {order.label}
              </MenuItem>
            ))}
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </MenuRoot>
  );
};

export default SortSelector;
