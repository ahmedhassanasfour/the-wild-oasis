import TableOperations from "./../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "all" },
          { value: "no-discount", label: "no discount" },
          { value: "with-discount", label: "withdiscount" },
        ]}
      ></Filter>
      <SortBy
        options={[
          { value: "name-asc", label: "sort by name from (A-Z)" },
          { value: "name-desc", label: "sort by name from (Z-A)" },
          {
            value: "regularPrice-asc",
            label: "sort by price from (low first)",
          },
          {
            value: "regularPrice-desc",
            label: "sort by price from (hight first)",
          },
          {
            value: "maxCapacity-asc",
            label: "sort by capacity (low first)",
          },
          {
            value: "maxCapacity-desc",
            label: "sort by capacity (hight first)",
          },
        ]}
      ></SortBy>
    </TableOperations>
  );
}

export default CabinTableOperations;
