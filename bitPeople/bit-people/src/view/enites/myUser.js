

export class MyUser {
    constructor(name, lastname, gender, id, img, email) {
        this.name = name;
        this.lastname = lastname;
        this.gender = gender;
        this.id = id;
        this.img = img;
        this.email = email;
    }

    hideEmail() {

        const hideEmail = this.email;
        const indMail = hideEmail.indexOf('@');
        const end = indMail - 3;
        const length = hideEmail.length;

        return this.email = hideEmail.slice(0, 3) + '...' + hideEmail.slice(end, length);

    }
}