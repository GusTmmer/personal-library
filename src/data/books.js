export const books = [
  {
    id: 'clean-code',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
    status: 'read',
    essay: `One of the first software engineering books I've read. It brings to light the perspective that coding is much more about communication with other programmers than with the computer that processes the code.

The now-common knowledge about variable, method, and class naming is all here: is/has in boolean methods, the general convention of using verbs for methods, and so on. It's a book whose content is easy to keep in mind day-to-day, since it affects pretty much every line of code you write. The number of WTFs per minute is a playful measure of code quality, and this book's content is what comes to mind most often when reading bad code.

One insight I haven't really found elsewhere is what turns out to be the Single Level of Abstraction Principle (SLAP): each function should operate at one level of complexity only, never mixing high-level orchestration with low-level detail.

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
    essay: `Clean Architecture expands the ideas of Clean Code to the level of entire systems. Its central argument is the dependency rule: source code dependencies must always point inward, toward higher-level policy. Frameworks, databases, and UIs are details — volatile, changeable, replaceable. Business logic is the core, and it should know nothing about the layers surrounding it.

The book gives the SOLID principles their full treatment — each applied at an architectural scale rather than at the class level — and introduces principles for managing component cohesion and coupling. It argues that a good architecture defers decisions: the choice of database, framework, or delivery mechanism should be a detail you can change late, not a constraint baked into the core.

Honestly, the book didn't land with as much impact as Clean Code did. Many of the ideas had already reached me through Bob Martin's Clean Code video series, offered by the company I worked at, which I found more engaging than the written format. When the content is already familiar, the book reads more like revision than revelation. For someone encountering these ideas for the first time, it would probably hit harder.`,
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
    essay: `A classic, and the book that introduced the concept of repeatable design — approaches to common problems that have been named, documented, and refined enough to be reused.

I've encountered a fair number of these patterns in production codebases and used several myself. But I've also seen them misapplied — introduced far too early in a feature's development, before the shape of the problem is even clear, making the code feel heavy and over-engineered before it's done anything useful. That observation reinforced something the book itself warns about but that's easy to forget in practice: these are tools, not rules. Reaching for a pattern prematurely, just because the scenario looks familiar, is its own kind of mistake.

What I carry forward is mostly the vocabulary and the framing. Being able to name a pattern — to say "this is a Strategy" or "this is an Observer" — makes conversations with other developers faster and makes code easier to reason about when you recognize the structure. The most lasting value of this book is that shared language, not any specific implementation to follow by the letter.`,
  },
  {
    id: 'pragmatic-programmer',
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg',
    status: 'read',
    essay: `The difficulty with writing about this book is that it doesn't have one central idea — it has dozens, and they work by accumulation rather than by any single revelation. That makes it hard to do justice to in an essay, but also explains why I've read it more than once.

One idea that proved itself over time in an unexpected way: the value of plain text. Until I read this, I hadn't given plain-text files much thought. The argument is that plain text is the most durable and universal format — it doesn't depend on tools, versions, or platforms. Years later, when AI assistants emerged and proved most capable on codebases and data that could be read as text, that idea clicked again in a new context.

The tracer bullet metaphor changed how I approach greenfield work. I used to be a top-down person — define the full structure first, then fill it in. The tracer bullet approach suggests building a thin, end-to-end slice of the system first: something that goes all the way through, even if incomplete. It surfaces assumptions you didn't know you were making far earlier than a top-down approach ever would.

The broken window theory put words to something I had felt many times but couldn't name: the file in a codebase so bad that nobody cares how it evolves anymore. People just throw things at it because the standard is already gone. Once you've named it, you see it everywhere — and you become much more careful about being the one who breaks the first window.

Stone soup is a negotiation metaphor I've thought back to in past discussions — conversations where leading with something small, rather than asking for full buy-in upfront, might have led to a very different outcome.

The boiling frog is about the danger of gradual change going unnoticed. A frog dropped in boiling water jumps out; a frog in water that slowly heats up doesn't register the threat until it's too late. After reading this — and a few other books about operational excellence — I've become much more sensitive to detecting slow-moving problems in processes and the status quo. One pattern I now watch for: a part of the system being worked almost exclusively by a single engineer, without enough context-sharing happening around it. On the surface it looks fine. The work gets done, nothing is on fire. But the knowledge concentration is a quiet risk — to the team's resilience, and sometimes to the company's interests if that person leaves or moves on. The frog metaphor is a useful lens for exactly these situations: nothing feels urgent precisely because the temperature has been rising slowly the whole time.

An absolute must — not for any one idea, but for all of them together.`,
  },
  {
    id: 'refactoring',
    title: 'Refactoring',
    author: 'Martin Fowler',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780134757599-L.jpg',
    status: 'read',
    essay: `From the first chapter, it seems this book played a strong role in establishing the definition of refactoring. By the time I got to read it, the concept was already well established — but going through the original definition was still enriching: refactoring means moving code toward a different structure while preserving behavior, in steps small enough that you can be confident nothing is breaking. This doesn't dismiss the need for tests, but the emphasis on those small steps was compelling — not unlike the principle behind Atomic Habits.

The main substance of this book is the code smells catalogue. The refactoring strategies make up the rest — named processes broken into small, mechanical steps. In practice, the steps are often so obvious and the outcome so clear that the named strategy doesn't add much; it felt like mandatory content more than genuine insight.

The code smells were where I found the most to take away. Many resonated immediately from experience: Primitive Obsession, Temporary Field, Speculative Generality, Repeated Switches, Data Clumps, and others.

A good book overall, but most of the refactoring strategies catalogue can be skipped.`,
  },
  {
    id: 'understanding-distributed-systems',
    title: 'Understanding Distributed Systems',
    author: 'Roberto Vitillo',
    coverUrl: '/personal-library/understanding-distributed-systems-cover.jpg',
    status: 'read',
    essay: `A structured survey of the distributed systems problem space. Where Designing Data-Intensive Applications goes deep on the internals of storage and data processing, this book takes a wider view — organizing the material around five concerns: communication, coordination, scalability, resiliency, and maintainability. That framing alone is useful. Before getting into any one topic, you have a map of the territory.

The resiliency section stands out for its practical focus: patterns like circuit breakers, timeouts, retries, and backpressure are explained clearly enough to reason about rather than just recognize by name. The coordination material — failure detection, leader election, replication — covers the kind of content that's hard to find concentrated in one place.

It's a well-paced read that doesn't overwhelm. As an introduction to the distributed systems landscape, it does its job well — and makes DDIA more rewarding once you follow up with it.
`,
  },
  {
    id: 'phoenix-project',
    title: 'The Phoenix Project',
    author: 'Gene Kim, Kevin Behr & George Spafford',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781942788294-L.jpg',
    status: 'read',
    essay: `The book I didn't know I needed.

Having already read books on operational excellence and having faced job experiences that looked a lot like what's portrayed here, it was striking to see how much management can and does affect an engineer's day-to-day. This book made me more sensitive to company processes, communication structures, and where to look for constraints in them.

It helped me realize something obvious in retrospect: showing up and doing your work can be entirely useless if the company's interests aren't aligned around it. Teams get siloed and end up prioritizing things that don't matter to the business. Alternative solutions go unfound — not because they don't exist, but because of miscommunication or a loss of focus on what a project is actually supposed to solve.

The scale of management's impact became clear, and it was the first time I seriously thought about pursuing a management role. It doesn't matter how good an engineer you are if the management layer is broken.

Following the Three Ways take shape through a narrative rather than as theory made them land differently. The main character's anxiety was hard not to share.`,
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
    id: 'designing-data-intensive-apps',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781449373320-L.jpg',
    status: 'read',
    essay: `One of the best books I've read on software engineering. I regret putting it off for as long as I did, thinking it would be too dense or difficult to keep up with. In the end, it was very approachable and I really enjoyed it.

The greatest benefit it provided me was confidence. I had studied system design quite extensively before reading this book, but given its reputation I couldn't help but fear I was still missing a lot. I still learned a great deal — and there were topics I couldn't help but wonder how someone can work professionally in a distributed system without knowing. Most notably, modes of transaction isolation and how the main relational databases differ in their default configuration for that. When I read that chapter, I was in awe. Knowing how transaction isolation is actually implemented was fantastic.

It's a book that delves into the implementation details of all the technologies it covers — OLAP systems, storage engines, replication, and more — making you realize there's no magic after all — these solutions aren't actually complex, they're simple, but simple in a smart and effective way. That was one of the greatest values I personally took from it.

It just goes to show why this book has the reputation it does. A mandatory read for any software engineer.`,
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
    id: 'working-effectively-legacy-code',
    title: 'Working Effectively with Legacy Code',
    author: 'Michael Feathers',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780131177055-L.jpg',
    status: 'read',
    essay: `Essentially the Refactoring book applied to an adversarial scenario — one where you don't have full control over the code at any given moment.

It opens with a memorable definition: legacy code is code without tests. The implication follows quickly — it's entirely possible to write legacy code on day one.

The central argument is that you sometimes have to take a step back to move two steps forward. Many of the strategies involve working around legacy code rather than through it, but the real goal is always the same: make it testable. Only once tests enforce the expected behavior do you have the freedom to change anything safely.

Worth noting: tests rarely guarantee that something works — they prove that things don't break. Exhaustive tests are rare, and the book accounts for that reality too.

If your job has a code-improvement culture and you're facing dense legacy code, there's something useful here for you.`,
  },
  {
    id: 'monolith-to-microservices',
    title: 'Monolith to Microservices',
    author: 'Sam Newman',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781492047841-L.jpg',
    status: 'read',
    essay: '',
  },
  {
    id: 'effective-java',
    title: 'Effective Java',
    author: 'Joshua Bloch',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780134685991-L.jpg',
    status: 'read',
    essay: '',
  },
  {
    id: 'system-design-interview-vol1',
    title: 'System Design Interview Vol. 1',
    author: 'Alex Xu',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9798664653403-L.jpg',
    status: 'read',
    essay: '',
  },
  {
    id: 'system-design-interview-vol2',
    title: 'System Design Interview Vol. 2',
    author: 'Alex Xu & Sahn Lam',
    coverUrl: 'https://covers.openlibrary.org/b/id/15111141-L.jpg',
    status: 'read',
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
