
import { Box, Button } from "@chakra-ui/react";
function Pagination({ current, IncRease, DecRease, total }) {
    const prev = (
        <button
            disabled={+current == 1}
            onClick={DecRease}
        >
            Prev
        </button>
    );
    const currentPage = <Button>{current}</Button>;
    const next = (
        <button
            disabled={+current >= + total}
            onClick={IncRease}
        >
            Next
        </button >
    );
    return (
        <Box mt={15} gap={9}>
            <div>
                {prev}
                {currentPage}
                {next}
            </div>
            <div>
                Seeing results: {current} of {total} Pages
            </div>
        </Box>
    );
}

export default Pagination;
