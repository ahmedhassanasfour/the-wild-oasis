/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

// eslint-disable-next-line react/prop-types
function Select({ options, value, onchange, type }) {
  return (
    <StyledSelect value={value} onChange={onchange} type={type}>
      {options.map((e) => (
        <option key={e.value} value={e.value}>
          {e.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
