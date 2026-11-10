# TypeScript Union (|) and Intersection (&) Example

## TypeScript Code

```typescript
type Student = {
  name: string;
  grade: number;
};

type Teacher = {
  name: string;
  subject: string;
};

type Athlete = {
  sport: string;
};

type StudentAthlete = Student & Athlete;

type SchoolMember = Student | StudentAthlete | Teacher;

const person: SchoolMember = {
  name: "rahim",
  grade: 10,
  sport: "Football"
};

function showDetails(member: SchoolMember) {
  console.log(`Name: ${member.name}`);
  
  if ('sport' in member) {
    console.log(`Sport: ${member.sport}`);
  }
}

showDetails(person);