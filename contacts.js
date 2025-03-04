class contact{

        #firstName;
        #lastName;
        #address;
        #city;
        #state;
        #zip;
        #phoneNo;
        #email;

        constructor(firstName,lastName,address,city,state,zip,phoneNo,email){
            this.#firstName=firstName;
            this.#lastName=lastName;
            this.#address=address;
            this.#city=city;
            this.#state=state;;
            this.#zip=zip;
            this.#phoneNo=phoneNo;
            this.#email=email;
        }

        display(){
            console.log(`Name : ${this.#firstName} ${this.#lastName}`);
            console.log(`Adress : ${this.#address} ${this.#city} ${this.#state} ${this.#zip}`);
            console.log(`Phone : ${this.#phoneNo} ${this.#email}`);
        }

}

let contact1 = new contact("Gaurav","Raikwar","Karond 34 Streets","Bhopal","Mp","462038","0123456789","gaurav123@gmail.com");
contact1.display();