import { Center, Container, HStack } from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import WomenContainer from "./WomenContainer";
import MenContainer from "./MenContainer";
export default function MainContainer() {


    return (
        <div style={{ backgroundColor: "rgba(169, 154, 154, 0.08)" }}>
            <div style={{ border: '1px solid red', width: "70%", margin: "auto", marginBottom: "0px" }}>


                <Tabs
                    position="relative"
                    variant="unstyled">
                    <TabList>
                        <Tab>Men</Tab>
                        <Tab>Women</Tab>

                    </TabList>
                    <TabIndicator
                        mt="-1.5px"
                        height="2px"
                        bg="green.500"
                        borderRadius="1px"
                    />
                    <TabPanels>
                        <TabPanel>
                            <MenContainer />
                        </TabPanel>
                        <TabPanel>
                            <WomenContainer />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>

        </div>
    )
}
