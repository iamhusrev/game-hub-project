import useGameQueryStore from "@/store";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={ref}
          bg={"bg.emphasized"}
          defaultValue={gameQuery?.searchText}
          borderRadius={20}
          placeholder="Search Games..."
          variant={"subtle"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
