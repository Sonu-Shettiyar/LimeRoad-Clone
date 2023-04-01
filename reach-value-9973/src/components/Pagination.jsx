
import { Box, Button } from "@chakra-ui/react";
function Pagination({ current, IncRease, DecRease, total }) {
    const prev = (
        <Button
            disabled={+current == 1}
            onClick={DecRease}
        >
            Prev
        </Button>
    );
    const currentPage = <Button>{current}</Button>;
    const next = (
        <Button
            data-testid="next-page"
            disabled={+current == +total}
            onClick={IncRease}
        >
            Next
        </Button>
    );
    return (
        <Box mt={15}>
            <div>
                {prev}
                {currentPage}
                {next}
            </div>
            <div>
                Total Pages: <b>{total}</b>
            </div>
        </Box>
    );
}

export default Pagination;
