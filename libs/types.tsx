export interface InvoiceType {
    id: string;
    type: 'deposit' | 'withdraw' | 'pix' | 'docTed';
    value: number;
    date: Date;
  }

  export type dataDropdown = {
    label: string,
    value: string,
}
