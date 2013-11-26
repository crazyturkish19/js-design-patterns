function SingletonObject(){
    //cache the instance
    var instance;

    SingletonObject = function SingletonObject() {
	return instance;
    }

    SingletonObject.prototype = this;

    instance = new SingletonObject();

    instance.constructor = SingletonObject;


    instance.myprop = 0;
    
    return instance;

}

var mySingletonObj1 = new SingletonObject();
var mySingletonObj2 = new SingletonObject();

console.log(mySingletonObj1 === mySingletonObj2); //true

