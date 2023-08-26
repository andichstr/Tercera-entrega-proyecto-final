export default class UserDTO {
    constructor(user){
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.role = user.role;
        this.age = user.age;
    }
}