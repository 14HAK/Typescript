{
  //------------------------------------------------------------------------------------------------
//! Problem 1:
//* Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.
//TODO: // Sample Input: 
// repeatString("Hello!", 3)
//TODO: // Sample Output:
// "Hello!Hello!Hello!"

//------------------------------------------------------------------------------------------------
//main operation:
const inputString: string = "hello!";
const countNumber:number = 3;

function repeatString(str: string, count:number): string{
  const repeatString = str.repeat(count);
  return repeatString;
}

//result print:
const repeatedString = repeatString(inputString, countNumber);
console.log(repeatedString);
//------------------------------------------------------------------------------------------------
}

{
  //------------------------------------------------------------------------------------------------
//! Problem 2:
//* Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.
//TODO: // Sample Input: 
// findLargestNumber([10, 5, 8, 20, 3])
//TODO: // Sample Output:
// 20

//------------------------------------------------------------------------------------------------
//main operation:
type ArrayOfNumbers = number[];

const arrayOfNumbers: ArrayOfNumbers = [10,699,70,46,48];

const findLargestNumber = function(ary: number[]): number{
  const largestNumber: number = Math.max(...ary)
  return largestNumber;
}


//result print:
const maxNumber = findLargestNumber(arrayOfNumbers);
console.log(maxNumber);
//------------------------------------------------------------------------------------------------
}


{
  //------------------------------------------------------------------------------------------------
//! Problem 3:
//* Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.
//TODO: // Sample Input:
// filterEvenNumbers([1, 2, 3, 4, 5, 6])
//TODO: // Sample Output:
// [2, 4, 6]

//------------------------------------------------------------------------------------------------
//main operation:
type NumberOfArray = number[];

const numberOfArray: NumberOfArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const filterEvenNumbers = (numbers: NumberOfArray): NumberOfArray => {
  const EvenNumbers = numbers.filter((item: number) => item % 2 === 0);
  return EvenNumbers;
};

//result print:
const evenNumbersArray: NumberOfArray = filterEvenNumbers(numberOfArray);
console.log(evenNumbersArray);
//------------------------------------------------------------------------------------------------

}









{
//------------------------------------------------------------------------------------------------
//! Problem 4:
//* Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.
//TODO: // Sample Input 1:
// reverseArray(["apple", "banana", "cherry"])
//TODO: // Sample Output 1:
// ["cherry", "banana", "apple"]

//TODO: // Sample Input 2:
// reverseArray([10, 20, 30])
//TODO: // Sample Output 2: 
// [30, 20, 10]

//------------------------------------------------------------------------------------------------
//main operation:
type ArrayType<T> = T[];

const stringArray:ArrayType<string> = ["apple", "banana", "cherry"];
const numberArray:ArrayType<number> = [10, 20, 30];

const reverseArray = <T>(ary: ArrayType<T>): ArrayType<T> =>{
  const reverse = ary?.reverse();
  return reverse;
}

//result print:
const stringReverse = reverseArray<string>(stringArray);
const numberReverse = reverseArray<number>(numberArray)
console.log(stringReverse);
console.log(numberReverse);
//------------------------------------------------------------------------------------------------
}

{
  //------------------------------------------------------------------------------------------------
//! Problem 5:
//* You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.
//TODO: // Sample Input 1:
// const student1: Student = {
// name: "Bob",
// age: 17,
// grades: [75, 80, 82, 88, 90] };

// const averageGradeForBob = calculateAverageGrade(student1);
// Hints: Use a reduce() method to sum the grades. average = total grades/ total length
//TODO: // Sample Output 1:
// 83

//------------------------------------------------------------------------------------------------
//main operation:
interface Student {
  name: string;
  age: number;
  grades: number[];
}

const student: Student = {
  name: 'Dulon Molla',
  age: 27,
  grades: [75, 80, 82, 88, 90],
};

const calculateAverageGrade = (student: Student): number => {
  const { grades } = student;
  const totalMarks: number = grades?.reduce(
    (previous: number, current: number): number => previous + current,
    0
  );
  const average: number = (totalMarks / grades.length);
  return average
};

//result print:
const averageGrade = calculateAverageGrade(student);
console.log(averageGrade);

//------------------------------------------------------------------------------------------------

}


{
  //------------------------------------------------------------------------------------------------
  //! Problem 6:
  //* You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.

  // Hints: Use getFullYear() method to extract the year to check the given year with current year.

  //TODO: // Sample Input 1:
  // const book1: Book = {
  //   title: "Sample Book",
  //   author: "John Doe",
  //   publishedYear: 2022
  // };

  // isRecentBook(book1);
  //TODO: // Sample Output 1:
  // true

  //------------------------------------------------------------------------------------------------
  //main operation:
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const book1: Book = {
    title: 'Behind Alisa',
    author: 'Kazi Najrul',
    publishedYear: 2022,
  };

  const isRecentBook = (book: Book): boolean => {
    const currentYear = new Date().getFullYear();
    const { publishedYear: bookPublishedAt } = book;

    if (currentYear - bookPublishedAt <= 5) {
      return true;
    }
    return false;
  };

  //result print:
  const RecentBook = isRecentBook(book1);
  console.log(RecentBook);

  //------------------------------------------------------------------------------------------------
}


{
  //------------------------------------------------------------------------------------------------
  //! Problem 7:
  //* Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

  //TODO: // Sample Input 1:
  // logString("Hello, TypeScript!");

  //TODO: // Sample Output 1:
  // "Hello, TypeScript!"

  //TODO: // Sample Input 1:
  // logString(42)

  //TODO: // Sample Output 1:
  // Input is not a string.

  //------------------------------------------------------------------------------------------------
  //main operation:
  const value: any = 'Hello, TypeScript!';

  const logString = (value: unknown): string => {
    if (typeof value === 'string') {
      return value;
    } else {
      throw new Error('Input is not a string.');
    }
  };

  //result print:
  const result = logString(value);
  console.log(result);

  //------------------------------------------------------------------------------------------------
}


{
  //------------------------------------------------------------------------------------------------
  //main operation:
  class Car {
    constructor(
      public brand: string,
      public model: string,
      public year: number
    ) {}
    get displayInfo() {
      return `Your Car Model is: ${this.year} ${this.brand} ${this.model}`;
    }
  }

  //result print:
  const car1 = new Car('Toyota', 'Corolla', 2020);
  console.log(car1?.displayInfo);

  //------------------------------------------------------------------------------------------------
}


// //problem 8
//------------------------------------------------------------------------------------------------
//main operation:
class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number){
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  get displayInfo(){
    return (`Your Car Model is: ${this.year} ${this.brand} ${this.model} `)
  }
}

//result print:
const car2 = new Car("Toyota", "Corolla", 2020);
console.log(car2?.displayInfo);
//------------------------------------------------------------------------------------------------






