

export class MyUser {
    constructor(name, lastname, gender, id, img, email, birthDate) {
        this.name = name;
        this.lastname = lastname;
        this.gender = gender;
        this.id = id;
        this.img = img;
        this.email = email;
        this.birthDate = birthDate;
    }

    hideEmail() {

        const hideEmail = this.email;
        const indMail = hideEmail.indexOf('@');
        const end = indMail - 3;
        const length = hideEmail.length;

        return this.email = hideEmail.slice(0, 3) + '...' + hideEmail.slice(end, length);

    }
    formatDate() {
        const date = new Date(this.birthDate);
        return date.toLocaleDateString('en-GB').split('/').join('.')
    }
    limitUsers() {

    }
}