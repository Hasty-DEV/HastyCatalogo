import { Row } from "react-bootstrap";
import { ButtonInput, IconSearch } from "./Search.Styles";

const Search: React.FC = () => {
  return (
    <Row>
      <ButtonInput>
        <IconSearch />
      </ButtonInput>
    </Row>
  );
};

export default Search;
