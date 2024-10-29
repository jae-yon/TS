var Employee = /** @class */ (function () {
    // 초기화
    function Employee(_name, _age, _job) {
        var _this = this;
        this._name = _name;
        this._age = _age;
        this._job = _job;
        this.employeeInfo = function () {
            console.log("".concat(_this._name, "\uC758 \uB098\uC774\uB294 ").concat(_this._age, "\uC774\uACE0, \uC9C1\uC5C5\uC740 ").concat(_this._job, "\uC774\uB2E4."));
        };
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (arg) {
            this._name = arg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (arg) {
            this._age = arg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "job", {
        get: function () {
            return this._job;
        },
        set: function (arg) {
            this._job = arg;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var emp = new Employee('재영', 29, '개발자');
emp.name = '지민';
emp.age = 33;
emp.job = '디자이너';
emp.employeeInfo();
