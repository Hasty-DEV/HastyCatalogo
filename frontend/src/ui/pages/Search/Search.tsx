import { Container, Row } from "react-bootstrap";
import { SearchInput } from "./Search.Styles";

const Search: React.FC = () => {
    return(

        <Container>
            <Row>
            <SearchInput/>
            </Row>
        </Container>
     
    )
}

export default Search;