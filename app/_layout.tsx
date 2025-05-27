import { AccountProvider } from '@/contexts/accountContext';
import { AuthProvider } from '@/contexts/authContext';
import { InvestmentProvider } from '@/contexts/investmentContext';
import { InvoiceProvider } from '@/contexts/invoiceContext';
import { NavProvider } from '@/contexts/navContext';
import { TransferenceProvider } from '@/contexts/transferencesContext';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
          <AccountProvider>
            <NavProvider>
              <InvoiceProvider>                
                <TransferenceProvider>
                  <InvestmentProvider>
                  <Stack>
                    <Stack.Screen name="/home" options={{ headerShown: false }} />
                  </Stack>
                  </InvestmentProvider>
                </TransferenceProvider> 
              </InvoiceProvider>
            </NavProvider>
          </AccountProvider>
  );
}