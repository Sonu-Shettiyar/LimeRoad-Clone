import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function Pagination({ current, IncRease, DecRease, total }) {
    const prevButton = (
        <Button isDisabled={current === 1} onClick={DecRease}>
            {"<<"}
        </Button>
    );

    const currentPageButton = <Button>{current}</Button>;

    const nextButton = (
        <Button isDisabled={current === total} onClick={IncRease}>
            {">>"}
        </Button>
    );

    return (
        <Box mt={15} gap={9}>
            {total !== 0 ? (
                <>
                    <div>
                        {prevButton}
                        {currentPageButton}
                        {nextButton}
                    </div>
                    <div>
                        Seeing results: {current} of {total} Pages
                    </div>
                </>
            ) : (
                <Text>Sorry, No more products...</Text>
            )}
        </Box>
    );
}

export default Pagination;
