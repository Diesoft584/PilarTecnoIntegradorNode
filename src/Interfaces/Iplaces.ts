export interface Iplaces{

    areas: string;
    name: string;
    address: Address;
    description: string;
    attention_hours: string;
    image: string;
    contact: Contact;
  }
  
  interface Contact {
    contact_phone: string;
    contact_mail: string;
    contact_red_social: string;
    contact_page: string;
  }
  
  interface Address {
    latitud: number;
    length: number;
    map: string;
  }