const courses = {
  frontend: {
    number: "02",
    title: "Frontend development",
    intro: "Build the part of an app people see and use. Learn to structure pages with HTML, style adaptable layouts with CSS, add behavior with JavaScript, and organize interactive interfaces into components.",
    lessons: [
      {
        title: "HTML & semantic structure",
        intro: "HTML describes the meaning and structure of a page. Choose elements for what their content means, not just for how they look.",
        concepts: [
          "Use headings in a logical hierarchy, paragraphs for prose, lists for grouped items, and buttons for actions.",
          "Use links for navigation and form labels connected to their inputs. This gives keyboard and assistive-technology users useful context.",
          "Semantic elements such as main, nav, article, and header make page regions easier to understand and maintain."
        ],
        exercise: "Create a small article page with a header, navigation, main content, a heading hierarchy, and a labeled search form. Try using it with only the keyboard."
      },
      {
        title: "CSS & responsive design",
        intro: "CSS controls presentation and layout. Start with a readable small-screen layout, then use flexible sizing and breakpoints only where the content needs them.",
        concepts: [
          "Use Flexbox for one-dimensional alignment and Grid for rows and columns. minmax(0, 1fr) helps grid items shrink instead of overflowing.",
          "Use relative units and constraints such as max-width: 100% for images so content can adapt to its container.",
          "A media query can change layout at a content-driven breakpoint; test narrow and wide widths for overflow and legibility."
        ],
        exercise: "Style the article from the previous lesson as a two-column layout on a wide screen and a single column on a phone. Check that long words and images do not cause horizontal scrolling."
      },
      {
        title: "JavaScript & TypeScript",
        intro: "JavaScript adds behavior to pages, from responding to a button click to loading data. TypeScript adds static types that help catch mismatched values while you develop.",
        concepts: [
          "Select elements, listen for events, and update the interface in response. Keep state changes explicit and avoid attaching duplicate event listeners.",
          "Use arrays and objects to represent related data, and functions to name repeatable operations.",
          "Promises represent work that completes later. async and await make it easier to handle results and errors without blocking the page."
        ],
        exercise: "Add a button that filters a list of items as a search field changes. Show a clear empty state when nothing matches, and test blank input and unusual capitalization."
      },
      {
        title: "React, state & routing",
        intro: "React builds interfaces from components: small functions that turn data and state into UI. State represents information that can change and should cause the relevant UI to update.",
        concepts: [
          "Break a page into components with clear responsibilities, and pass data to child components through props.",
          "Keep state as close as practical to the components that need it. Derive values from existing state instead of storing duplicate copies.",
          "A client-side router maps URLs to views. Use links for navigation so pages remain addressable and browser history works."
        ],
        exercise: "Build a list and a reusable list-item component. Add a filter control using state, then make one detail view reachable at its own URL."
      }
    ]
  },
  backend: {
    number: "03",
    title: "Backend development",
    intro: "Build the services behind an application. Learn how a server handles requests, how to shape an API, how identity and sessions work, and how validation and security protect your data.",
    lessons: [
      {
        title: "Node.js & server basics",
        intro: "Node.js runs JavaScript outside the browser. A server process can listen for network requests, run application logic, and send responses back to clients.",
        concepts: [
          "The runtime provides APIs for tasks such as networking and files; npm helps install and manage project dependencies.",
          "A request handler reads a request and produces a response. Keep startup configuration separate from the logic that handles each request.",
          "Network and file operations are often asynchronous. Handle rejected operations explicitly and return useful error responses."
        ],
        exercise: "Create a small local server with a health route that returns a success status and a short JSON response. Add a second route and check both with a browser or HTTP client."
      },
      {
        title: "REST APIs & GraphQL",
        intro: "An API is a contract between a client and a server. A clear contract describes available operations, accepted input, returned data, and expected errors.",
        concepts: [
          "In REST, resources are addressed by URLs and HTTP methods express operations such as reading, creating, updating, or deleting.",
          "Use appropriate status codes and a consistent response shape. Clients should be able to distinguish validation errors from missing resources and server failures.",
          "GraphQL lets a client request fields from a typed schema. It changes how data is queried, but still requires careful authorization and input limits."
        ],
        exercise: "Sketch endpoints for listing, viewing, creating, and updating tasks. Write one example request and response for each, including what happens when an ID does not exist."
      },
      {
        title: "Authentication & sessions",
        intro: "Authentication establishes who a user is; authorization decides what that user may do. Treat these as separate checks on every protected operation.",
        concepts: [
          "Store password verifiers using a purpose-built password hashing algorithm and unique salts; never store or log plaintext passwords.",
          "A server-side session stores identity and related state on the server while a cookie carries an unpredictable session identifier.",
          "If using tokens, validate signature, issuer, audience, and expiry. Keep credentials out of URLs and avoid exposing them to client-side scripts unnecessarily."
        ],
        exercise: "Draw the sign-in flow from form submission to a protected request. Mark where credentials are checked, where a session is created, and where authorization is enforced."
      },
      {
        title: "Validation & security",
        intro: "Assume every value crossing the application boundary may be malformed or unexpected. Validate it on the server before using it, and encode data appropriately when displaying it.",
        concepts: [
          "Validate type, length, format, and allowed values against an explicit schema. Reject unexpected fields where appropriate.",
          "Use parameterized database queries rather than concatenating user input into SQL. Apply authorization checks to the requested resource, not just the route.",
          "Use HTTPS, secure cookie settings, dependency updates, and careful secret management. Return safe error details to users and keep diagnostic context in protected logs."
        ],
        exercise: "Define validation rules for a task title and completion flag. Try empty, overly long, wrong-type, and valid inputs, then confirm invalid requests do not change stored data."
      }
    ]
  },
  data: {
    number: "04",
    title: "Data & persistence",
    intro: "Choose how an application stores information and shape the model around how it will be used. Practice relational queries, document data, schema changes, caching, and file storage.",
    lessons: [
      {
        title: "Relational data & SQL",
        intro: "Relational databases organize data into tables with defined relationships. SQL lets you query and update that data while constraints help preserve correctness.",
        concepts: [
          "Give each row a stable key. Use foreign keys to represent relationships and constraints to prevent invalid states.",
          "JOIN combines related rows; WHERE filters them; ORDER BY sorts results. Select only the columns and rows the application needs.",
          "A transaction groups changes so they succeed or fail together. Indexes can speed up reads but add storage and write costs."
        ],
        exercise: "Design users and tasks tables. Write a query to list a user's tasks in creation order, then decide which constraints and indexes support the data rules."
      },
      {
        title: "NoSQL databases",
        intro: "NoSQL describes several non-relational storage models. Document databases store nested records, while key-value stores retrieve values by key. Choose based on access patterns and consistency needs.",
        concepts: [
          "A document can keep fields that are commonly read together in one record, but duplicated data may need coordinated updates.",
          "Key-value storage is useful for direct lookups by a known key; it is less suited to arbitrary relational queries.",
          "Define expected query patterns, record growth, consistency requirements, and backup strategy before choosing a storage model."
        ],
        exercise: "Model a user profile and its preferences as a document. List two queries the app needs, then identify what would become difficult if preferences needed complex reporting."
      },
      {
        title: "ORMs & data modeling",
        intro: "An object-relational mapper (ORM) maps application objects to relational data and can provide typed query helpers. It does not remove the need to understand tables, joins, or transactions.",
        concepts: [
          "Model entities and relationships explicitly. Keep important database constraints even when the application validates the same rules.",
          "Use migrations as versioned, reviewable changes to a database schema. Plan how a change works with both old and new application versions during deployment.",
          "Avoid loading more rows or relationships than a request needs; inspect generated queries when performance is unexpected."
        ],
        exercise: "Add a nullable description field through a migration. Apply it to a development database, verify existing rows still work, and document how to roll back safely."
      },
      {
        title: "Caching & file storage",
        intro: "Caching keeps a temporary copy of data to reduce repeated work. File or object storage holds larger binary assets separately from the relational records that describe them.",
        concepts: [
          "Choose a cache key and expiration policy that match the data. Invalidate or refresh entries when the source changes, and decide what happens on a cache miss.",
          "Treat cache contents as disposable; the primary data store remains the source of truth.",
          "Store uploaded files in dedicated object storage, keep metadata and ownership in the database, and validate file type and access permissions."
        ],
        exercise: "Choose a frequently read product summary to cache. Describe its key, time-to-live, update invalidation, and what the app returns if the cache is unavailable."
      }
    ]
  },
  delivery: {
    number: "05",
    title: "Testing & delivery",
    intro: "Build confidence in changes and make releases repeatable. Learn the different levels of testing, automate checks in CI, package applications consistently, and configure deployments safely.",
    lessons: [
      {
        title: "Unit, integration & end-to-end tests",
        intro: "Tests check behavior against expectations. A balanced suite tests small pieces quickly, verifies important interactions, and covers critical user journeys.",
        concepts: [
          "Unit tests check a focused function or component. Keep them deterministic and assert observable behavior rather than private implementation details.",
          "Integration tests exercise boundaries between real pieces, such as an API handler and a test database.",
          "End-to-end tests drive the app like a user. Keep them focused on critical flows because they are typically slower and more sensitive to environment issues."
        ],
        exercise: "For a task app, write one unit test for a validation rule, one integration test for creating a task, and outline an end-to-end test for completing it."
      },
      {
        title: "CI/CD & automation",
        intro: "Continuous integration (CI) runs repeatable checks on proposed changes. Continuous delivery or deployment (CD) automates preparing or releasing a verified build.",
        concepts: [
          "A pipeline can install locked dependencies, run lint and tests, build the app, and report a failing step before a change is merged.",
          "Make jobs repeatable and fast; cache dependencies where safe, but do not let a cache hide a missing build step.",
          "Protect deployment credentials, require review for production changes, and keep a clear path to roll back a bad release."
        ],
        exercise: "Write down the checks your project should run on every change and the separate steps required for production. Decide which failures should block a release."
      },
      {
        title: "Containers & deployment",
        intro: "A container packages an application with its runtime dependencies so it can run consistently across environments. Deployment makes a tested build available to users.",
        concepts: [
          "Build an image from a minimal, maintained base and run the app as a non-root user where practical.",
          "Keep persistent data outside the container's temporary filesystem. Configure ports and health checks for the hosting platform.",
          "Deploy a known build artifact, verify its health, and use staged rollout or rollback mechanisms appropriate to the service."
        ],
        exercise: "Map your app's runtime needs: command, port, environment variables, persistent data, and health check. Compare those needs with a local container run."
      },
      {
        title: "Environment & configuration",
        intro: "Applications often need different settings in development, testing, and production. Keep configuration explicit and separate from the code that uses it.",
        concepts: [
          "Read settings at startup, validate required values, and fail clearly if essential configuration is missing.",
          "Keep secrets in an approved secret store or protected environment configuration. Never commit credentials or print them in logs.",
          "Use separate credentials and data for each environment, restrict access, and rotate secrets through a planned process."
        ],
        exercise: "List your app's configuration values and label each as public, sensitive, or environment-specific. Add startup checks for required values without displaying their contents."
      }
    ]
  },
  architecture: {
    number: "06",
    title: "Architecture & scale",
    intro: "Make applications easier to evolve as they grow. Learn to reason about system boundaries and trade-offs, improve performance and accessibility, observe production behavior, and coordinate real-time features and team changes.",
    lessons: [
      {
        title: "System design & architecture",
        intro: "Architecture is the set of decisions that shape how a system is divided and how its parts communicate. Start with requirements and constraints rather than choosing a fashionable pattern.",
        concepts: [
          "Identify user-visible requirements and quality goals such as latency, availability, privacy, and cost.",
          "Draw the main components and data flows. Keep boundaries clear, and make ownership of each responsibility explicit.",
          "Every design has trade-offs. Record important assumptions and revisit them when traffic, team size, or product needs change."
        ],
        exercise: "Sketch a small task app from browser to API and database. Mark the trust boundaries, the data each component owns, and one likely bottleneck as usage grows."
      },
      {
        title: "Performance & accessibility",
        intro: "Fast, accessible interfaces work better for more people and devices. Measure real bottlenecks, then improve the slowest meaningful part without sacrificing usable behavior.",
        concepts: [
          "Optimize the critical rendering path: send only necessary assets, size images appropriately, and avoid blocking the browser with unnecessary scripts.",
          "Use semantic HTML, keyboard-operable controls, visible focus, sufficient contrast, and text alternatives where they add meaning.",
          "Measure performance on representative devices and networks. Check user-centered metrics before and after a change."
        ],
        exercise: "Use browser developer tools to inspect a page's largest assets and keyboard navigation. Pick one issue, make a measured improvement, and test again."
      },
      {
        title: "Logging & monitoring",
        intro: "Logs record useful events; metrics summarize behavior over time; traces connect work across services. Together they help teams detect and diagnose issues in production.",
        concepts: [
          "Log enough context to investigate a request, such as a correlation ID and outcome, but exclude passwords, tokens, and unnecessary personal data.",
          "Track service-level signals such as request rate, error rate, and latency. Alerts should point to actionable user impact.",
          "Define health checks and dashboards before an incident. Use monitoring to test whether a change improved the actual problem."
        ],
        exercise: "For an API request, list safe log fields and useful metrics. Write an alert condition for a sustained increase in errors and explain who should respond."
      },
      {
        title: "Real-time & team practices",
        intro: "Real-time features send updates without requiring a full page reload. WebSockets provide a persistent two-way connection, but they add operational and consistency concerns.",
        concepts: [
          "Use real-time transport when timely updates matter; ordinary HTTP polling or server-sent events may be simpler for one-way or infrequent updates.",
          "Plan for disconnects, reconnects, authorization, duplicate messages, and clients receiving events out of order.",
          "Keep changes reviewable and communicate interface contracts. Code review, small releases, and shared ownership reduce integration surprises."
        ],
        exercise: "Design live task updates for two users. Decide what event is sent, how the server checks permission, and what the client does after reconnecting."
      }
    ]
  }
};

const courseKey = new URLSearchParams(window.location.search).get("track");
const course = courses[courseKey];
const layout = document.querySelector("#course-layout");
const errorState = document.querySelector("#course-error");

if (course && layout && errorState) {
  const title = document.querySelector("#course-title");
  const intro = document.querySelector("#course-intro");
  const breadcrumbTitle = document.querySelector("#course-breadcrumb-title");
  const kicker = document.querySelector("#course-kicker");
  const meta = document.querySelector("#course-meta");
  const lessonsContainer = document.querySelector("#course-lessons");
  const outline = document.querySelector("#course-outline");

  document.title = `${course.title} course — Stackwise`;
  breadcrumbTitle.textContent = course.title;
  kicker.textContent = `TRACK ${course.number} / YOUR LEARNING PATH`;
  const displayTitle = `${course.title[0].toLowerCase()}${course.title.slice(1)}.`;
  title.replaceChildren(document.createTextNode("Learn "), Object.assign(document.createElement("span"), { textContent: displayTitle }));
  intro.textContent = course.intro;
  meta.replaceChildren(...[
    `${course.lessons.length} lessons`,
    "Practical examples",
    "Learn by doing"
  ].map((text) => {
    const item = document.createElement("span");
    item.textContent = text;
    return item;
  }));

  course.lessons.forEach((lesson, index) => {
    const lessonId = `lesson-${index + 1}`;
    const article = document.createElement("article");
    article.className = "lesson-card";
    article.id = lessonId;

    const kickerElement = document.createElement("span");
    kickerElement.className = "lesson-kicker";
    kickerElement.textContent = `LESSON ${String(index + 1).padStart(2, "0")}`;
    article.append(kickerElement);

    const heading = document.createElement("h2");
    heading.textContent = lesson.title;
    article.append(heading);

    const summary = document.createElement("p");
    summary.textContent = lesson.intro;
    article.append(summary);

    const conceptsHeading = document.createElement("h3");
    conceptsHeading.textContent = "Key ideas";
    article.append(conceptsHeading);

    const concepts = document.createElement("ul");
    lesson.concepts.forEach((concept) => {
      const item = document.createElement("li");
      item.textContent = concept;
      concepts.append(item);
    });
    article.append(concepts);

    const exerciseHeading = document.createElement("h3");
    exerciseHeading.textContent = "Try it";
    article.append(exerciseHeading);

    const exercise = document.createElement("p");
    exercise.textContent = lesson.exercise;
    article.append(exercise);
    lessonsContainer.append(article);

    const outlineItem = document.createElement("li");
    const outlineLink = document.createElement("a");
    outlineLink.href = `#${lessonId}`;
    outlineLink.textContent = lesson.title;
    outlineItem.append(outlineLink);
    outline.append(outlineItem);
  });

  const completion = document.createElement("section");
  completion.className = "lesson-card";
  const completionKicker = document.createElement("span");
  completionKicker.className = "lesson-kicker";
  completionKicker.textContent = "YOU’RE READY FOR WHAT’S NEXT";
  const completionHeading = document.createElement("h2");
  completionHeading.textContent = "Put it into practice";
  const completionText = document.createElement("p");
  completionText.textContent = `Use what you learned in ${course.title.toLowerCase()} to improve a small project. Build one focused feature, check it against the ideas in these lessons, and review the result before moving to another track.`;
  const roadmapLink = document.createElement("a");
  roadmapLink.className = "button button-primary";
  roadmapLink.href = "index.html#roadmap";
  roadmapLink.append(document.createTextNode("Back to the roadmap "));
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  roadmapLink.append(arrow);
  completion.append(completionKicker, completionHeading, completionText, roadmapLink);
  lessonsContainer.append(completion);
  layout.hidden = false;
} else if (layout && errorState) {
  layout.hidden = true;
  errorState.hidden = false;
}
