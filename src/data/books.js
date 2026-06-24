export const books = [
  {
    id: 'clean-code',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
    status: 'read',
    essay: `Clean Code is one of those books that changes how you see every line you write afterward. Martin's central claim — that code is read far more than it is written — sounds obvious once stated, but the implications are radical.

The chapter on meaningful names alone rewired how I approach variable naming. I used to optimize for brevity; now I optimize for clarity at the callsite. A name like "d" tells the reader nothing; "elapsedTimeInDays" tells them everything they need without opening the function.

What I appreciated most was the consistent reminder that code communicates intent to other humans, not just instructions to a machine. The boy scout rule ("leave the code cleaner than you found it") is deceptively simple but, applied consistently, it compounds into a codebase that doesn't accumulate rot.

My one caveat: some of the Java-era examples feel dated, and the test chapter can be taken too far — I've seen teams hide business logic in unit tests chasing 100% coverage. But as a foundation for thinking about craft, this book holds up.`,
  },
  {
    id: 'pragmatic-programmer',
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg',
    status: 'read',
    essay: `The Pragmatic Programmer is less a book about programming and more a book about being a professional. It sits at the intersection of craft, attitude, and career — and it earns every page of that scope.

The "broken windows" metaphor stuck with me immediately: a single piece of bad code, left unfixed, signals that the codebase is a place where bad code is acceptable. Standards degrade from the edges inward. I now treat any code I'm embarrassed to own as a broken window to fix promptly, not schedule.

The DRY principle is articulated here more precisely than anywhere else I've read. It's not about avoiding copy-paste — it's about having a single authoritative source for every piece of knowledge in a system. This distinction matters because you can violate DRY without ever duplicating a character.

The 2019 edition updates the language examples nicely. A must-read before any junior engineer gets too comfortable with their first job.`,
  },
  {
    id: 'designing-data-intensive-apps',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781449373320-L.jpg',
    status: 'read',
    essay: `This is the best technical book I have read in the last five years, without qualification. Kleppmann writes with the rare combination of depth and clarity that makes complex distributed systems concepts genuinely accessible.

The section on replication alone — covering leader-follower, multi-leader, and leaderless approaches — is worth the price of the book. I had used these systems for years before reading this; I understood them for the first time after.

What elevates it above a textbook is the consistent attention to trade-offs. Every design decision is examined through the lens of what you gain and what you give up. There are no silver bullets presented, only honest analyses of real constraints.

The chapters on stream processing and the log-structured nature of event sourcing gave me a new mental model that I now reach for constantly when thinking about data architecture. Required reading for anyone building systems that handle meaningful amounts of data.`,
  },
  {
    id: 'structure-interpretation',
    title: 'Structure and Interpretation of Computer Programs',
    author: 'Abelson & Sussman',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780262510875-L.jpg',
    status: 'plan-to-read',
    essay: '',
  },
  {
    id: 'a-philosophy-of-software-design',
    title: 'A Philosophy of Software Design',
    author: 'John Ousterhout',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781732102200-L.jpg',
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
    id: 'mythical-man-month',
    title: 'The Mythical Man-Month',
    author: 'Frederick P. Brooks Jr.',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780201835953-L.jpg',
    status: 'read',
    essay: `Few books written in 1975 remain this relevant. Brooks' central thesis — that adding manpower to a late software project makes it later — was heresy at the time and is still violated daily by managers who haven't read it.

The essay that gives the book its title is brilliant, but the one I return to most is "No Silver Bullet." Brooks argues that there is no single development innovation that will yield an order-of-magnitude improvement in productivity, reliability, or simplicity. Every generation of the industry rediscovers this the hard way with each new paradigm that promises to change everything.

What ages less well is the implicit assumption that software projects are always large, staffed endeavors. The solo and small-team dynamics that define so much modern work aren't really addressed. But as a diagnosis of why large software efforts fail — coordination cost, conceptual integrity, second-system syndrome — this remains definitive.`,
  },
  {
    id: 'refactoring',
    title: 'Refactoring',
    author: 'Martin Fowler',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780134757599-L.jpg',
    status: 'read',
    essay: `Refactoring gave me a vocabulary I didn't know I was missing. Before reading it, I would describe improvements to a codebase vaguely — "cleaning up," "tidying," "making it clearer." After, I could name exactly what I was doing: Extract Function, Replace Temp with Query, Introduce Parameter Object.

Having precise names for transformations matters more than it sounds. It makes code review conversations faster, it lets you communicate intent in a commit message, and it helps you think more clearly about what you're actually doing versus what you think you're doing.

The second edition's JavaScript examples feel more current than the Java of the first. The catalogue format — each refactoring with a motivation, mechanics, and example — makes it as useful as a reference as it is a cover-to-cover read. I've returned to individual entries many more times than I've reread the whole thing.`,
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
