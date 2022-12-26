import React from "react";
import Link from "next/link";

import {
    Flex,
    Card,
    Image,
    Center,
    Text,
    Container,
    MantineProvider,
} from "@mantine/core";
import { DiscordButton } from "../components/Buttons";
import { BackgroundImage } from "./BackgroundImage";

interface ServerProps {}

const Server: React.FC<ServerProps> = ({}) => {
    return (
        <>
            <MantineProvider
                theme={{
                    components: {
                        Container: {
                            defaultProps: {
                                sizes: {
                                    xs: 200,
                                },
                            },
                        },
                    },
                }}
            >
                <BackgroundImage />
                <Center style={{ height: "100vh" }}>
                    <Card radius="sm">
                        <Flex direction="column" align="center">
                            <Container size="xs" px="xs">
                                <Image fit="contain" src="/images/logo.webp" />
                            </Container>

                            <Text
                                fz="lg"
                                weight={700}
                                tt="uppercase"
                                style={{ paddingBottom: "1vh" }}
                            >
                                Launching April, 2023!
                            </Text>
                            <Link
                                href="https://discord.gg/5XUp8gBhwM"
                                target="_blank"
                            >
                                <DiscordButton>
                                    Join our Discord Community!
                                </DiscordButton>
                            </Link>
                        </Flex>
                    </Card>
                </Center>
            </MantineProvider>
        </>
    );
};

export default Server;
