import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList109986Navigator from '../features/NotificationList109986/navigator';
import Settings109985Navigator from '../features/Settings109985/navigator';
import Settings109977Navigator from '../features/Settings109977/navigator';
import UserProfile109975Navigator from '../features/UserProfile109975/navigator';
import BlankScreen0109935Navigator from '../features/BlankScreen0109935/navigator';
import ArticleList109934Navigator from '../features/ArticleList109934/navigator';
import Maps109921Navigator from '../features/Maps109921/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList109986: { screen: NotificationList109986Navigator },
Settings109985: { screen: Settings109985Navigator },
Settings109977: { screen: Settings109977Navigator },
UserProfile109975: { screen: UserProfile109975Navigator },
BlankScreen0109935: { screen: BlankScreen0109935Navigator },
ArticleList109934: { screen: ArticleList109934Navigator },
Maps109921: { screen: Maps109921Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
