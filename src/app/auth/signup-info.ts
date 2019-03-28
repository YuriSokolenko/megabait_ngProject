export class SignUpInfo {
    firstName: string;
    secondName: string;
    username: string;
    email: string;
    password: string;
    city: string;
    phone: string;
    address: string;
    district: string;
    role: string[];



    constructor(firstName: string, secondName: string, username: string, email: string, password: string, city: string, phone: string, address: string, district: string ) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.city=city,
        this.phone=phone,
        this.address=address,
        this.district=district,
        this.role = ['user'];
       
        
        
       
        
    }
}
