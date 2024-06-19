import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'

//TODO: this is homepage of the app
//TODO: add a notification icon
//TODO: it will have details of the society, details of the resident, details of the flat, details of the family members, details of the parking, details of the utilities, details of the maintenance, details of the bills, details of the orders, details of the payments, details of the receipts, details of the complaints, details of the suggestions, details of the feedbacks, details of the polls, details of the announcements, details of the notices, details of the chats, details of the events, details of the posts, details of the category, details of the community, details of the account, details of the index
//TODO: options of payment dues, gate updates, guest notification, help, etc
//TODO: in notification component it will push notifications of payment dues, gate updates, guest notification, help, etc

const Home = () => {
    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <Link href="/visitor" asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Visitors Update</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="/event" asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Events</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="/news" asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>News</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="/payment" asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Payment Dues</Text>
                    </TouchableOpacity>
                </Link>
                
                <Link href="/news" asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>News</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="/visitor" asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Visitors</Text>
                    </TouchableOpacity>
                </Link>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        backgroundColor: "powderblue",
        borderRadius: 5,
        width: "80%",
        height: "10%",
        shadowColor: "#000", // Shadow color
        shadowOffset: {
            width: 0,
            height: 2, // Shadow offset
        },
        shadowOpacity: 0.25, // Shadow opacity
        shadowRadius: 3.84, // Shadow radius
        elevation: 5,
    },
    image: {
        marginRight: 10,
    },
    buttonText: {
        color: "#000",
        fontSize: 18,
        marginLeft: 10,
        fontWeight: "bold",
    },
});


export default Home