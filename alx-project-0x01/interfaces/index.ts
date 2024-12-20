export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}


export interface geo {
    lat: string;
    lng: string;
}

export interface address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: geo;
}
export interface company {
    name: string;
    catchPhrase: string;
    bs: string;
}
export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: address;
    phone: string;
    website: string;
    company: company;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}
export interface UserModalProps {

}
export interface UserData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo : {
            lat: string;
            lng: string;
        }
    }
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}