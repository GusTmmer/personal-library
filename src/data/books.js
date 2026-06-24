export const books = [
  {
    id: 'clean-code',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
    status: 'read',
    essay: `One of the first software engineering books I've read. It brings to light the perspective that coding is much more about communication with other programmers than with the computer that processes the code.

The now-common knowledge about variable, method, and class naming is all here: is/has in boolean methods, the general convention of using verbs for methods, and so on. It's a book whose content is easy to keep in mind day-to-day, since it affects pretty much every line of code you write. The number of WTFs per minute is a playful measure of code quality, and this book's content is what comes to mind most often when reading bad code.

A couple of insights I haven't really found elsewhere — perhaps only in Clean Architecture by the same author — is the notion of layers of code complexity. Working with a few objects, calling their methods and passing results forward, is one level of complexity: organized, no branches, simple to follow. Introduce conditionals or most forms of iteration, and you start having to carry a lot of context about how the execution path is affected. Properly separating these responsibilities into complexity layers is one of the things that helps the most in understanding systems. I'd argue most other principles — large or small — follow from this idea: early returns, the single level of abstraction rule, and nearly all code smells have some relation to it.

Another insight I enjoyed: the bigger a method name is, the more private and context-specific it should be; the bigger a variable name is, the larger its scope should be. What I liked about this is that most people who read this book become zealots about naming — requiring everything to have the most precise name possible, or extracting intermediate steps into new variables with yet more long and accurate names. This idea helps ground those instincts, showing that good naming is always contextual.

Clean Code also introduces the Single Responsibility Principle, which later becomes part of the SOLID set that Martin expands on more fully in Clean Architecture.

All in all, a book I'd certainly recommend. An experienced professional who has already thought deeply about quality may not take much from it, but knowing its concepts and vocabulary helps in conversations with people who have read it — much the same reason we study design patterns.`,
  },
  {
    id: 'clean-architecture',
    title: 'Clean Architecture',
    author: 'Robert C. Martin',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780134494166-L.jpg',
    status: 'read',
    essay: `Clean Architecture covers much of the same ground as Clean Code, but at a larger scale. Instead of the scope of a single method or class, it expands the same questions about quality and responsibility to whole modules and systems. The dependency rule — that source code dependencies must always point inward, toward higher-level policy — is the central idea the entire book builds around.`,
  },
  {
    id: 'clean-coder',
    title: 'The Clean Coder',
    author: 'Robert C. Martin',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780137081073-L.jpg',
    status: 'read',
    essay: `The Clean Coder is a very interesting book. Ever since reading it, I've never found anything quite like it. It explores what it means to be a professional, specifically in the field of software development. It discusses the responsibility one has not only to one's craft, but also to one's role — and it criticizes a lot of the clichéd scenarios that happen in the industry: pushing without testing, marking a feature as done without actually verifying it, or deferring tests to a later point that never arrives.

It argues that it is the professional's duty to guarantee that their work performs as expected. It also raises ethical questions — about being a developer at a company that exploits its users, writing code you can't stand behind. A lot of noble ideas that gave me a great deal of respect and pride for this line of work.

It's not about being perfect, though. One example that stuck with me: a professional who is off their game one day — perhaps from poor sleep — noticing that they are making mistakes and overlooking things. Coffee didn't help. What should they do? Keep grinding through the day according to the contract? Or accept that in their current state, they cannot operate at the level expected of them, and that the best course of action is to focus on recovery?

A lot of food for thought, and highly recommended to anyone in the field who hasn't read it yet.`,
  },
  {
    id: 'design-patterns',
    title: 'Design Patterns',
    author: 'Erich Gamma, Richard Helm, Ralph Johnson & John Vlissides',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg',
    status: 'read',
    essay: `A classic, and the book that introduced the very concept of thinking about code as composable, repeatable building blocks — approaches that just work.

What I value most about it isn't any individual pattern, since some depend heavily on language features, become outdated, or apply only to rare and specific scenarios. What matters is the framing: the discussion of the problem or situation where a pattern becomes viable is often more interesting than the pattern itself. That's what you actually carry forward into your day-to-day work.

The most lasting value of studying design patterns is the shared vocabulary it creates. Standardized approaches make code easier to reason about, and make conversations with other developers about implementation details much faster. That's what I find most worthwhile — not memorizing the patterns, but being able to recognize and name common scenarios.`,
  },
  {
    id: 'pragmatic-programmer',
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg',
    status: 'read',
    essay: `Another classic, and a must-read. There's so much here that it's difficult to write an essay that does it justice, since it doesn't limit itself to any single problem or challenge of being a programmer.

The book reads like a mentor — raising your attention to the psychological aspects that can affect a programmer's work (broken windows, boiling a frog, stone soup), the agency a programmer has over their own career, ways to step outside your comfort zone and find new things to learn even in areas you thought you knew well, how to reason about delivery estimates, how to best approach greenfield projects through the tracer bullet metaphor. And it goes on.

I've read this book more than once, and have heard of people who read it every year because it's that rich. An absolute must.`,
  },
  {
    id: 'refactoring',
    title: 'Refactoring',
    author: 'Martin Fowler',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780134757599-L.jpg',
    status: 'read',
    essay: '',
  },
  {
    id: 'phoenix-project',
    title: 'The Phoenix Project',
    author: 'Gene Kim, Kevin Behr & George Spafford',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781942788294-L.jpg',
    status: 'read',
    essay: '',
  },
  {
    id: 'unicorn-project',
    title: 'The Unicorn Project',
    author: 'Gene Kim',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781942788768-L.jpg',
    status: 'plan-to-read',
    essay: '',
  },
  {
    id: 'understanding-distributed-systems',
    title: 'Understanding Distributed Systems',
    author: 'Roberto Vitillo',
    coverUrl: '/personal-library/understanding-distributed-systems-cover.jpg',
    status: 'read',
    essay: '',
  },
  {
    id: 'designing-data-intensive-apps',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781449373320-L.jpg',
    status: 'read',
    essay: '',
  },
  {
    id: 'software-architecture-hard-parts',
    title: 'Software Architecture: The Hard Parts',
    author: 'Neal Ford, Mark Richards, Pramod Sadalage & Zhamak Dehghani',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781492086895-L.jpg',
    status: 'plan-to-read',
    essay: '',
  },
  {
    id: 'staffeng',
    title: 'Staff Engineer',
    author: 'Will Larson',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781736417911-L.jpg',
    status: 'plan-to-read',
    essay: '',
  },
  {
    id: 'devops-handbook',
    title: 'The DevOps Handbook',
    author: 'Gene Kim, Jez Humble, Patrick Debois & John Willis',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781942788003-L.jpg',
    status: 'plan-to-read',
    essay: '',
  },
  {
    id: 'mythical-man-month',
    title: 'The Mythical Man-Month',
    author: 'Frederick P. Brooks Jr.',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780201835953-L.jpg',
    status: 'plan-to-read',
    essay: '',
  },
  {
    id: 'domain-driven-design',
    title: 'Domain-Driven Design',
    author: 'Eric Evans',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780321125217-L.jpg',
    status: 'plan-to-read',
    essay: '',
  },
]
