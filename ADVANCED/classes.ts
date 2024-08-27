// class User {
//   public email: string;
//   name: string;
//   private readonly city: string = ""; /// private or '#'
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

//best professional practice
class User {  

    protected coursecount=1
    
    constructor(
         public email: string,
         public name: string
        ){ }

    private deleteMsg(){      // since private can be accesed only within the class User
        console.log('delete message')
    }    

    get getEail():string{
        return `email${this.email}`
    }
    get countOfCourse():number{
        return this.coursecount
    }
    set courseCount(courseNum){           //setter doesnt have any type defined
            if(courseNum<=1){
                throw new Error("cousrese count should be more than 1")
            }
            this.coursecount=courseNum
    }   
  }

class SubUser extends User{
    /// while intatiating a object from the another class , all the properties from public 
    /// will be accessed but the private properties of User class will not be accesesed 
    /// due to the usage of private access modifiers
    isFamily:boolean= true
    changeCourseCount(){
        this.coursecount=5  // can be changed now because the access modifer has been set 
                            // to protected=> which means protected properties can be asscessed
                            // from the parent class and it all other sub class( extended classes)
}  
}

const harish = new User("harish@mail.com", "harish");
// harish.city = "chennai";

export {};

// access modifiers as the anme suggests limits the usage or access of the 
//to the defined value or method
