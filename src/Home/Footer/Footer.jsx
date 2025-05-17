import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <Box as="footer" bg="gray.100" py={4} mt={10}>
                <Flex justify="space-between" align="center" maxW="1200px" mx="auto" px={4}>
                    <Text fontSize="sm" color="gray.600">
                        Copyright © 2022 Academy LMS
                    </Text>
                    <Link href="https://www.youtube.com" isExternal>
                        <Text fontSize="sm" color="gray.600">
                            YouTube Channel
                        </Text>
                    </Link>
                </Flex>
            </Box>
        </div>
    );
};

export default Footer;