export interface Geo {
    lat: string
    lng: string
}

export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

export interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface User extends UserLoginForm{
    id: number
    username: string
    address: Address,
    phone: string,
    website: string,
    company: Company
}

export interface UserLoginForm {
    name: string
    email: string
}
