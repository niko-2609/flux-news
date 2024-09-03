import { Monda_400Regular } from "@expo-google-fonts/monda";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";
import Accordion from 'react-native-collapsible/Accordion';
import { moderateScale } from "react-native-size-matters";
import { ChevronDown, ChevronRight } from 'lucide-react-native';


const CustomAccordion = (props: any) => {
    const [activeSections, setActiveSession] = useState<any>([])


    return (
        <View style={styles.rootContainer}>
            <Accordion
                sections={props?.data}
                activeSections={activeSections}
                renderSectionTitle={undefined}
                renderHeader={(content: any, _, isActive: boolean) => (
                    <View style={styles.accordionHeader}>
                        <View style={styles.accHeaderTextContainer}>
                            <Text style={styles.accHeaderText}>{content?.infoTitle}</Text>
                        </View>
                        <View style={styles.accHeaderIconContainer}>
                            {isActive && <ChevronDown size={moderateScale(24)} color={'#211C34'} />}
                            {!isActive && <ChevronRight size={moderateScale(24)} color={'#211C34'} />}
                        </View>
                    </View>
                )}
                renderContent={(content: any) => (
                    <View style={styles.accContentContainer}>
                        <Text style={styles.accContentText}>{content?.infoDescription}</Text>
                    </View>
                )}
                onChange={(activeSess: any) => setActiveSession(activeSess)}
            />
        </View>

    );
};



const styles = StyleSheet.create({
    rootContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    accordionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: moderateScale(56),
        borderRadius: moderateScale(8),
        backgroundColor: '#D9D9D9',
        marginVertical: moderateScale(10)
    },
    accHeaderTextContainer: {
        flex: 0.8,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    accHeaderText: {
        fontSize: moderateScale(24),
        fontWeight: '400',
        fontFamily: "Monda_400Regular"
    },
    accHeaderIconContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    accContentContainer: {
        marginTop: 0,
        flex:1,
        backgroundColor: '#76B688',
        marginBottom: moderateScale(3),
        borderRadius: moderateScale(4),
        paddingHorizontal: moderateScale(20)
    },
    accContentText:{ 
        fontSize: moderateScale(24),
        fontFamily: 'Monda_400Regular',
        fontWeight: '400',
    }
});

export default CustomAccordion;