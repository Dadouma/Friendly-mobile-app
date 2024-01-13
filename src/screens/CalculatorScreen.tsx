import {
    ActivityIndicator,
    Keyboard,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {CTAButton} from "../components/CTAButton";
import React, {useEffect, useState} from "react";

const CalculatorScreen = () => {
    const [nbBiere, setNbBiere] = useState<number>(0);
    const [price, setPrice] = useState<string>('');
    const [totalPrice, setTotalPrice] = useState<number>(0);
    useEffect(() => {
        const number = Number(price);

        setTotalPrice(number * nbBiere);
    }, [nbBiere]);
    const clearPrice = () => {
        setPrice('');
        setNbBiere(0);
    };
    return (
        <Pressable style={styles.contentView} onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.contentView}>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>calculator</Text>
                    </View>
                    <View style={styles.mainContent}>
                        <View>
                            <TextInput
                                style={styles.loginTextField}
                                placeholder="Price"
                                value={price}
                                onChangeText={(inputPrice) => setPrice(inputPrice)}
                            />
                            <CTAButton title="Clear" variant="primary" onPress={clearPrice}/>
                        </View>

                        <Text style={styles.numberDesign}>{nbBiere}</Text>
                        <View style={styles.buttonFlex}>
                            <TouchableOpacity onPress={() => setNbBiere(nbBiere - 1)}>
                                <Text style={[styles.textDesign, {fontSize: 60}]}>-</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setNbBiere(nbBiere + 1)}>
                                <Text style={[styles.textDesign, {fontSize: 50}]}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 30}}>Total Price: </Text>
                            <Text style={{fontSize: 30}}>{totalPrice} DT</Text>
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        backgroundColor: "white",
    },
    container: {
        flex: 1,
        marginHorizontal: 50,
        backgroundColor: "white",
        paddingTop: 50,
    },
    titleContainer: {
        flex: 1.2,
        justifyContent: "center",
    },
    titleText: {
        fontSize: 45,
        textAlign: "center",
        fontWeight: "200",
    },
    mainContent: {
        flex: 6,
        alignItems: 'center',
    },
    buttonFlex: {
        flexDirection: "row",
        justifyContent: "center",

    },
    resultFlex: {
        flexDirection: "row",
        justifyContent: "center",
    },

    numberDesign: {
        fontSize: 80,
        paddingTop: 80,
    },
    textDesign: {
        paddingBottom: 50,
        paddingHorizontal: 50,
        margin: 10,


    },
    loginTextField: {
        borderBottomWidth: 1,
        height: 60,
        fontSize: 30,
        marginVertical: 10,
        fontWeight: "300",
    },
});
export default CalculatorScreen;
