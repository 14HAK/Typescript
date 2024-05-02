"use strict";
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
