// URL for the challenge https://dev.to/thepracticaldev/daily-challenge-51-valid-curly-braces-4e6o

class BracerMatcher {

    constructor(){
        this.defaultValue = 0;
        this.emptyStringValue = 0;
        this.rightBraceValue = 1;
        this.leftBraceOrUnknowValue = -1;
    }

    isEmptyString(str) {
        return str === '';
    }

    isRightBrace(brace) {
        return brace == '{';
    }

    isValid(string) {
        const finalValue = string
                            .split("")      
                            .map(brace => 
                                this.isRightBrace(brace) ? this.rightBraceValue : 
                                (this.isEmptyString(brace) ? this.emptyStringValue : this.leftBraceOrUnknowValue))  
                            .reduce((acumulator, currentValue) => 
                                acumulator + currentValue, 
                                this.defaultValue);                    
                        
        return finalValue == 0 ? true : false;
    }

   
}

// testing 
const bracerMatcher = new BracerMatcher();
console.log(bracerMatcher.isValid("{{{}{}}}")); // true
console.log(bracerMatcher.isValid("{{")); // false
console.log(bracerMatcher.isValid("{}}"));// false
console.log(bracerMatcher.isValid("{}"));// true
console.log(bracerMatcher.isValid("should_not_work"));// false
console.log(bracerMatcher.isValid("!!should?_not _work  111111")); // false
console.log(bracerMatcher.isValid("!!shout_not_work{}")); // false
console.log(bracerMatcher.isValid("")); // true