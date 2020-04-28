import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
	Avatar,
	Title,
	Caption,
	Paragraph,
	Drawer,
	Text,
	TouchableRipple,
	Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
	const [isDarkTheme, setIsDarkTheme] = React.useState(false);

	const toggleTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	}

	return(
		   <View style = {{flex:1}}>
		   	<DrawerContentScrollView {...props}>
		   		<View style = {styles.drawerContent}>
		   			<View style = {styles.userInfoSection}>
		   				<View style={{flexDirection: 'row', marginTop: 14}}>
		   					<Avatar.Image 
		   						source = {{uri: 'https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg'}}
		   						size= {50}
		   					/>
		   					<View style={{marginLeft: 15, marginTop: -7, flexDirection: 'column'}}>
		   						<Title style={styles.title}>Nitish Ghimire</Title>
		   						<Caption style={styles.caption}>Class:10</Caption>
		   					</View>
		   				</View>
		   				<View style = {styles.row}>
		   					<View style={styles.section}>
		   						<Paragraph style={[styles.paragraph,styles.caption]}>10</Paragraph>
		   						<Caption style={styles.caption}>HomeWorks</Caption>
		   					</View>
		   					<View style = {styles.section}>
		   						<Paragraph style={[styles.paragraph, styles.caption]}>5th</Paragraph>
		   						<Caption style= {styles.caption}>May</Caption>
		   					</View>
		   				</View>
		   			 </View>
		   			 <Drawer.Section style = {styles.drawerSection}>
		   			 	<DrawerItem
		   				icon = {({color, size}) => (
		   						<Icon
		   							name="home-outline"
		   							color={color}
		   							size={size}
		   						/>
		   					)}
		   					label="Home"
		   					onPress = {() => {props.navigation.navigate('Dashboard')}}
		   			/>

		   			<DrawerItem
		   				icon = {({color, size}) => (
		   						<Icon
		   							name="account-circle-outline"
		   							color={color}
		   							size={size}
		   						/>
		   					)}
		   					label="Profile"
		   					onPress = {() => {props.navigation.navigate('Details')}}
		   			/>

		   			<DrawerItem
		   				icon = {({color, size}) => (
		   						<Icon
		   							name="cash-multiple"
		   							color={color}
		   							size={size}
		   						/>
		   					)}
		   					label="Fees"
		   					onPress = {() => {}}
		   			/>

		   			<DrawerItem
		   				icon = {({color, size}) => (
		   						<Icon
		   							name="account-box-outline"
		   							color={color}
		   							size={size}
		   						/>
		   					)}
		   					label="Attendance"
		   					onPress = {() => {}}
		   			/>

		   			<DrawerItem
		   				icon = {({color, size}) => (
		   						<Icon
		   							name="clipboard-check-outline"
		   							color={color}
		   							size={size}
		   						/>
		   					)}
		   					label="Timetable"
		   					onPress = {() => {}}
		   			/>

		   			 </Drawer.Section>
		   			 <Drawer.Section title = "Preferences">
		   			 	<TouchableRipple onPress = {() => {toggleTheme()}}>
		   			 		<View style = {styles.preference}>
		   			 			<Text>Dark Theme</Text>
		   			 			<View pointerEvents="none">
		   			 				<Switch value={isDarkTheme}/>
		   			 			</View>
		   			 		</View>
		   			 	</TouchableRipple>
		   			 </Drawer.Section>
		   		</View>
		   		<Drawer.Section style={styles.bottomDrawerSection}>
		   			<DrawerItem
		   				icon = {({color, size}) => (
		   						<Icon
		   							name="exit-to-app"
		   							color={color}
		   							size={size}
		   						/>
		   					)}
		   					label="Sign Out"
		   					onPress = {() => {}}
		   			/>
		   		</Drawer.Section> 
		   	</DrawerContentScrollView>
		   </View>

		);
}				

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	userInfoSection: {
		paddingLeft: 20,
	},
	title: {
		fontSize: 16,
		marginTop: 3,
		fontWeight: 'bold',
	},
	caption: {
		fontSize: 16,
		lineHeight: 16,
	},
	row: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center' ,
	},
	section: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 15,
	},
	paragraph: {
		fontWeight: 'bold',
		marginRight: 3,
	},
	drawerSection: {
		marginTop: 5,
	},
	bottomDrawerSection: {
		marginBottom: 15,
		borderTopColor: '#f4f4f4',
		borderTopWidth: 1,
	},
	preference: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 12,
		paddingHorizontal: 16, 
	},
});