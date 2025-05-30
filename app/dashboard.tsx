import { Colors } from '@/libs/colors';
import { StyleSheet} from 'react-native';
import {  View } from "react-native";
import Header from '@/components/dashboardHeader';
import Balance from '@/components/balance';
import { useNavProvider } from '@/contexts/navContext';
import EditTransaction from '@/dashboardNavTabs/editTransaction';
import Investments from '@/dashboardNavTabs/investments';
import Invoices from '@/dashboardNavTabs/invoices';
import NewTransaction from '@/dashboardNavTabs/newTransaction';
import OtherServices from '@/dashboardNavTabs/others';
import Transferences from '@/dashboardNavTabs/transferences';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import NewInvestment from '@/dashboardNavTabs/newInvestment';
import AccountScreen from '@/dashboardNavTabs/accountScreen';

export default function Dashboard() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const {option} = useNavProvider();
  const menuContent: {[key: string]: React.JSX.Element} = {
      'home': <NewTransaction/>,
      'transferences': <Transferences/>,
      'investments': <Investments/>,
      'new-investment': <NewInvestment/>,
      'others': <OtherServices/>,
      'invoices' : <Invoices/>,
      'edit': <EditTransaction/>,
      'account': <AccountScreen/>
  }

    return (
        <View style={styles.container}>
            <Header/>
            {option == 'invoices' ||  option =='investments' || option =='account' ? 
            (<>
              {menuContent[option]}
              </>) : 
            (<>
              <Balance/>
              {menuContent[option]}
            </>)}
         </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary.light,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});