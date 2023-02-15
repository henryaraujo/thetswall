import { ExampleInterface } from './api/example/example.interface';
import { ExampleService } from "./api/example/example.service";

const exampleService = new ExampleService();

const buttonExample: HTMLButtonElement = document.querySelector('#example') as HTMLButtonElement;

buttonExample.addEventListener('click', listExample)

async function listExample() {
  const example:ExampleInterface = await exampleService.getExample();
  console.log(example);
}