const multiplyValue = (value: number, multiplier?: number) => {
  if (multiplier || multiplier === 0) {
    return value * multiplier;
  } else {
    return value * 2;
  }
};

const processInput = (value: number | string | boolean) => {
  if (typeof value === "string") {
    return value.trim().toLocaleLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    if (value === true) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
};

const formatCoordinate = ([latitude, longitude, locationName]: [
  number,
  number,
  string,
]) => {
  return `Location: ${locationName} ${latitude}, ${longitude}`;
};

const concatenateArrays = <T>(...arrays: T[][]) => {
  return arrays.flat();
};
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number) => {
  const availableCourse: Course[] = [];
  for (const causer of courses) {
    if (causer.isPublished === true && causer.students >= minStudents) {
      availableCourse.push(causer);
    }
  }
  return availableCourse;
};

interface User {
  id: number;
  name: string;
  role: string;
}

const pluckValues = <T, K extends keyof T>(arr: T[], key: K): T[K][] => {
  const res = arr.map((value) => value[key]);
  return res;
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function validateAgeAsync(age: number): Promise<string> {
  if (age > 18) {
    await delay(1000);
    return "Access Granted";
  } else {
    throw new Error("Error: Access Denied: Must be 18 or older");
  }
}
