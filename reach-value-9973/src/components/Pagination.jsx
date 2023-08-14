
import { Box, Button, Text } from "@chakra-ui/react";
function Pagination({ current, IncRease, DecRease, total }) {
    const prev = (<Button isDisabled={+current===1} onClick={DecRease}>{"<<"}</Button>);
    const currentPage = <Button>{current}</Button>;
    const next = (<Button isDisabled={+current===+total} onClick={IncRease}>{">>"}</Button>);

    return (
        <Box mt={15} gap={9}>
            {total!=0 ? (<> <div>{prev}{currentPage}{next}</div>
            <div>Seeing results: {current} of {total} Pages</div></>):<Text>Your search ends here!..</Text>}
        </Box>
    );
}

export default Pagination;
