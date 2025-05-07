import { Colors } from '@/constants/colors';
import { StyleSheet} from 'react-native';
import {  View } from "react-native";
import Header from '@/app/(tabs)/dashboard/components/header';
import Balance from '@/app/(tabs)/dashboard/components/balance';
import NewTransaction from './navTabs/newTransaction';
import { useNavProvider } from '@/contexts/navContext';
import OtherServices from './navTabs/others';

export default function Dashboard() {
  const {option} = useNavProvider();
  const menuContent: {[key: string]: React.JSX.Element} = {
      'home': <NewTransaction/>,
      'transferences': <NewTransaction/>,
      'investments': <NewTransaction/>,
      'others': <OtherServices/>,
      'invoices' : <NewTransaction/>
  }

    return (
        <View style={styles.container}>
            <Header/>
            {option == 'invoices' ? 
            (<>
              {menuContent['invoices']}
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