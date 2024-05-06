// ---------------------------------------------------------
// primitive data types
// String:
// const firstName: String = 'dulon';
// console.log(firstName);

// ---------------------------------------------------------
// number:
// const age:Number = 30;
// console.log(age);

// ---------------------------------------------------------
//boolean:
// const isMarried: Boolean | number = 30;
// console.log(isMarried);

// ---------------------------------------------------------
//null:
// let manage: null = null;
// console.log(manage);
// manage = 'dulon'

// ---------------------------------------------------------
//undefined:
// let marque:undefined;
// console.log(marque);
// marque =30

// non primitive or reference data types in .ts:
// array[]:
// const arr: string[] = ['mna', '30', 'lena'];
// console.log(arr);

// ---------------------------------------------------------
//tuple:
// const arr2:[string, number] = ['dulon', 30] ;
// console.log(arr2);

// const arr3:[string, number, boolean] = ['dulon', 30, true] ;
// console.log(arr3);

//literals types:
// const names: 'dulon' | 'molla' = 'molla';
// const age: '30' | '50' = '20';

// ---------------------------------------------------------
//object:
// const person: {
//   readonly id: number       //do not change or redeclare it because its readonly property
//   firstName: string;
//   middleName?: string;     // middleName is optional Property
//   lastName: string;
//   companyName: 'programming hero' // literal type
//   age: number;
//   isMarried: boolean;
// } = {
//   id: 12564,
// firstName: 'dulon',
// // middleName: 'mahadi',
// lastName: 'molla',
// companyName: 'programming hero'
// age: 28,
// isMarried: false
// }

// console.log(person);
// console.log(person.id);
// console.log(person.isMarried);

// ---------------------------------------------------------
//function:
// function ageCalculate(num1: number, num2: number): number {
//   return num1 + num2;
// }
// console.log(ageCalculate(12,13));

// const arr: string[] = ['jadu', 'madu', 'padu'];
// const news = arr.map((elem: string): string=> elem)
// console.log(news);

// ---------------------------------------------------------
//spreed operator:
// type Person = string[];

// const person1:Person = ['dulon', 'molla', 'spin'];
// const person2:Person = ['mike', 'jhondoe', '30'];
// const num:number[] = [30,20,25]

// const allPerson:Person = [...person1, ...person2];
// console.log(allPerson);

// ---------------------------------------------------------
//rest operator:
// const [first, second, ...rest ]:string[] = allPerson;
// console.log(rest, first, second);

// ---------------------------------------------------------
//union type: only common all property:
// type FrontEnd = {
//   skills: string[];
//   position: 'frontend';
//   expectation: [30 | 50 | 20];
// };

// type BackEnd = {
//   skills: string[];
//   position: 'backend';
//   expectation: [40 | 60 | 70];
// };

// const person1: FrontEnd | BackEnd = {
//   skills:['ant-design', 'tailwind', 'bootstrap'],
//   position: 'frontend',
//   expectation: [50],
// }
// const person2: FrontEnd | BackEnd = {
//   skills:['ant-design', 'tailwind', 'bootstrap'],
//   position: 'backend',
//   expectation: [70],
// }

// console.log(person1);
// console.log(person2);

// ---------------------------------------------------------
//intersection type: common uncommon all property:
// type FrontEnd = {
//   skills: string[];
//   position1: 'frontend';
//   expectation1: [30 | 50 | 20];
// };

// type BackEnd = {
//   skills: string[];
//   position2: 'backend';
//   expectation2: [40 | 60 | 70];
// };

// const person: FrontEnd & BackEnd = {
//   skills: ['ant-design', 'tailwind', 'bootstrap'],
//   position1: 'frontend',
//   position2: 'backend',
//   expectation1:[30],
//   expectation2:[70],
// };

// console.log(person);

// ---------------------------------------------------------
//null type:
// type Married = null | boolean;

// const isMarried:Married = null;
// console.log(isMarried);

// ---------------------------------------------------------
//unknown type: manage unknown type using condition:
// const calculate = (value: unknown ) =>{
//   if(typeof value === 'number'){
//     return (`value type is number: ${value + value}`)
//   }

//   if(typeof value === 'string'){
//     return (`value type is string: ${value}`)
//   }
// }
// const result1 = calculate(30);
// const result2 = calculate('dulon mahadi molla');
// console.log(result1);
// console.log(result2);

// ---------------------------------------------------------
//never type: never return anything:
// const throwError = (msg: string):never => {
//   throw new Error(msg);
// };

// throwError('this function is return anything')

// ---------------------------------------------------------
// type assertion:
// Type Assertion: যখন কোনো ভ্যারিয়েবলের টাইপ সম্পর্কে TypeScript এর কাছে পর্যাপ্ত তথ্য থাকে না এবং ডেভেলপার TypeScript কে forcefully ভ্যারিয়েবলের কোনো একটা নির্দিষ্ট টাইপ ধরে নিতে বলে তখন তাকে Type Assertion বলে। amra jokhon kono kichor type nije theke declear kore dei setai type assertion.

// function demo(value: any): any{
//   if(typeof value === 'string'){
//     console.log('assertion value is a string');
//     return 'assertion value is a string'
//   }

//   if(typeof value === 'number'){
//     console.log('assertion value is a number');
//     return 'assertion value is a number'
//   }
// }

// const res1 = demo(50000)  as number
// const res2 = demo('dulon')  as string

// ---------------------------------------------------------
//type and interface:

// Interface: Interface হলো Type Alias এর মতোই টাইপ ডিফাইন করার একটি পদ্ধতি যেটার মাধ্যমে শুধুমাত্র non primitive or reference Type এর স্ট্রাকচার ডিফাইন করা হয়।:
// interface User1 {
//   name: string;
//   age : 50;
// }

// ---------------------------------------------------------
// Type Alias: Type Alias দ্বারা primitive এবং non primitive উভয় ধরণের টাইপ ডিফাইন করা যায়।:
// type Name = string;

// type User2 = {
//   name : string;
//   age : 50;
// }

// ---------------------------------------------------------
// Interface কে এক্সটেন্ড করতে হয় extends keyword দ্বারা। অপরদিকে Type Alias কে এক্সটেন্ড করতে হয় ‘&’ অপারেটর দ্বারা।:
// interface User {
//   name: string;
//   age: number;
// }

// interface Person extends User {roll: string};

// const person: Person = {
//   name: 'dulon',
//   age: 27,
//   roll: 'player'
// }

// console.log(person);

//interface array:
// interface Rule {
//   [index: number] : number
// }

// const arrayRule: Rule = [1,2,3]

// ---------------------------------------------------------
// interface function:
// interface Add{
//   (val1: number, val2: number) : number
// }

// const addFunc:Add = (val1, val2) => {
//   return val1 + val2
// }

// const result = addFunc(20,10)
// console.log(result);

// ---------------------------------------------------------
// Generic type:
// Generics: কোনো function, type alias, interface, class ইত্যাদিতে টাইপ ডিফাইন করার সময় কোনো টাইপকে explicitly ডিফাইন না করে টাইপকে ভ্যারিয়েবল আকারে রিসিভ করে function, type alias, interface, class ইত্যাদি ডিফাইন করাকে Generics বলে।

// generic er madhome amra amader proyojon onujai typediye dite pari.

// type Person<T> = Array<T>;

// const arrNumber: Person<number> = [30, 40, 50];
// const arrString: Person<string> = ['dulon', 'mahadi'];

// // generic moloto dynamic way te param akare type niye thake.
// const arrMixed: Person<string | number> = [30, 'dulon', 30];
// const arrSpecific: Person<'manage' | 70> = ['manage'];

// //generic object:
// const arrObject: Person<{ userName: string; age: number }> = [
//   { userName: 'dulon', age: 20 },
//   { userName: 'dulon', age: 20 },
// ];

// ---------------------------------------------------------
//generic with interface:
// interface Developer<T> {
//   manageName: string;
//   haven: T;
// }

// const developer1:Developer<boolean> = {
//   manageName: 'control',
//   haven: true,
// }

// const developer2:Developer<{till: string, isLoad: boolean}> = {
//   manageName: 'supply',
//   haven:{till:'multer', isLoad: true}
// }

// ---------------------------------------------------------
//generic function:
// const createGeneric = <T>(param:T): T[] => {
//   return [param]
// }
// const res1 = createGeneric<boolean>(true)
// const res2 = createGeneric<string>('dulon mahadi')
// const res3 = createGeneric<{name: string, age: number}>({name: 'molla', age:27})

// console.log(res1);
// console.log(res2);
// console.log(res3);

// ---------------------------------------------------------
//generic tuple:
// const createTuple = <T,Q>(val1:T,val2:Q)=>{
//   return [val1, val2]
// }

// const res4 = createTuple<number, number>(30,50);
// const res5 = createTuple<{name: string}, {base: boolean}>({name: 'dulon'}, {base: true})
// console.log(res4);
// console.log(res5);

// ---------------------------------------------------------
//constrains in generic: extends with property:
//extends কীওয়ার্ড দ্বারা Generics এ ব্যবহৃত টাইপ ভ্যারিয়েবলে কিছু বাধ্যবাধকতা বা শর্তারোপ করা যায়।
// const addStudent = <T extends { id: number; userName: string }>(student: T) => {
//   return { ...student };
// };

// const result1 = <{ age: number; isMarried: boolean }>(
//   addStudent({ id: 1254, userName: 'dulon', age: 30, isMarried: true })
// );

// console.log(result1);


// ---------------------------------------------------------
// constrains in generic with keyof and extends combination:
// const user:{userName: string, age: number, isMarried: boolean} = {
//   userName: 'dulon',
//   age: 27,
//   isMarried: false,
// }

// const getProperty = <T, Q extends keyof T>(obj:T, key:Q)=>{
//   return obj[key]
// }

// const result1 = getProperty(user,'userName');
// console.log(result1);


// ---------------------------------------------------------
// conditional type checking:
// type a1 = string;
// type b1 = undefined;

// type x = a1 extends null ? true : false;
// type y = a1 extends string ? true : b1 extends undefined ? undefined : any;

// ---------------------------------------------------------
// conditional type checking:
// type Sheikh = {
//   bike: string;
//   car: string;
//   ship: string;
// }

// type CheckVehicle<T> = T extends keyof Sheikh ? Sheikh : false;

// type HasShip = CheckVehicle<'ship'>



// ---------------------------------------------------------
// mapped type:
// mapped type change all the type safely:
// type Person = {
//   name: string;
//   age: number;
//   isOpen: boolean;
// }

// type PersonString = {
//   [key in keyof Person]: boolean;
// }

// const person: PersonString = {
//   name: true,
//   age: true,
//   isOpen: false,
// }


















































