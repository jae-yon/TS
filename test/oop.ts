class Employee {
  // 초기화
  constructor(
    private _name : string, 
    private _age : number, 
    private _job : string
  )
  {
    
  }

  get name() {
    return this._name;
  }

  set name(arg : string) {
    this._name = arg;
  }

  get age() {
    return this._age;
  }

  set age(arg : number) {
    this._age = arg;
  }

  get job() {
    return this._job;
  }

  set job(arg : string) {
    this._job = arg;
  }

  employeeInfo = () : void => {
    console.log(`${this._name}의 나이는 ${this._age}이고, 직업은 ${this._job}이다.`);
  }
}

let emp = new Employee('재영' , 29 , '개발자');

emp.name = '지민';
emp.age = 33;
emp.job = '디자이너';

emp.employeeInfo();