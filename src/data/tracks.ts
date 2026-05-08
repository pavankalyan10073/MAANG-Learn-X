import {
  Code2Icon, BrainIcon, NetworkIcon, DatabaseIcon, CpuIcon, GitBranchIcon, SigmaIcon,
  CalculatorIcon, SparklesIcon, LayersIcon, CloudIcon, BarChart3Icon, WorkflowIcon, BookOpenIcon, BriefcaseIcon
} from "@/components/icons";
import type { ComponentType } from "react";

export type Resource = {
  id: string;
  title: string;
  url: string;
  type: "video" | "article" | "practice" | "docs" | "course" | "book";
  source?: string;
};

export type Topic = {
  id: string;
  title: string;
  summary: string;
  resources: Resource[];
  questions?: { q: string; url?: string }[];
};

export type Track = {
  slug: string;
  title: string;
  tagline: string;
  icon: ComponentType<{ className?: string }>;
  color: string; // tailwind hue token use via style
  topics: Topic[];
};

const r = (id: string, title: string, url: string, type: Resource["type"], source?: string): Resource => ({ id, title, url, type, source });

export const tracks: Track[] = [
  {
    slug: "dsa",
    title: "DSA (300+ Problems)",
    tagline: "Topic-wise patterns, must-do problems & video solutions for MAANG.",
    icon: Code2Icon,
    color: "255",
    topics: [
      {
        id: "dsa-arrays",
        title: "Arrays & Strings",
        summary: "Two pointers, sliding window, prefix sum, Kadane's.",
        resources: [
          r("d-arr-1", "Striver A2Z DSA Sheet", "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2", "course", "takeuforward"),
          r("d-arr-2", "NeetCode 150 — Arrays & Hashing", "https://neetcode.io/practice", "practice", "NeetCode"),
          r("d-arr-3", "Sliding Window Playlist", "https://www.youtube.com/playlist?list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj", "video", "Aditya Verma"),
          r("d-arr-4", "Two Pointers — LeetCode patterns", "https://leetcode.com/explore/learn/card/array-and-string/", "article", "LeetCode"),
        ],
        questions: [
          { q: "Two Sum", url: "https://leetcode.com/problems/two-sum/" },
          { q: "Maximum Subarray (Kadane)", url: "https://leetcode.com/problems/maximum-subarray/" },
          { q: "Longest Substring Without Repeating", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
          { q: "Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/" },
          { q: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/" },
        ],
      },
      {
        id: "dsa-ll",
        title: "Linked List",
        summary: "Reverse, fast/slow pointers, merge, cycle detection.",
        resources: [
          r("d-ll-1", "Striver LinkedList Playlist", "https://www.youtube.com/playlist?list=PLgUwDviBIf0rAuz8tVcM0AymmhTRsfaLU", "video", "Striver"),
          r("d-ll-2", "NeetCode — Linked List", "https://neetcode.io/practice", "practice", "NeetCode"),
        ],
        questions: [
          { q: "Reverse Linked List", url: "https://leetcode.com/problems/reverse-linked-list/" },
          { q: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
          { q: "Linked List Cycle II", url: "https://leetcode.com/problems/linked-list-cycle-ii/" },
          { q: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/" },
        ],
      },
      {
        id: "dsa-stacks",
        title: "Stacks & Queues",
        summary: "Monotonic stack, NGE, min stack, queue with stacks.",
        resources: [
          r("d-st-1", "Aditya Verma — Stack Playlist", "https://www.youtube.com/playlist?list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd", "video", "Aditya Verma"),
        ],
        questions: [
          { q: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/" },
          { q: "Next Greater Element II", url: "https://leetcode.com/problems/next-greater-element-ii/" },
          { q: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
        ],
      },
      {
        id: "dsa-trees",
        title: "Trees & BST",
        summary: "Traversals, LCA, diameter, serialize/deserialize.",
        resources: [
          r("d-tr-1", "Striver Tree Series", "https://www.youtube.com/playlist?list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk", "video", "Striver"),
        ],
        questions: [
          { q: "Binary Tree Level Order", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
          { q: "Lowest Common Ancestor", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
          { q: "Serialize and Deserialize Binary Tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
        ],
      },
      {
        id: "dsa-graphs",
        title: "Graphs",
        summary: "BFS/DFS, topo sort, Union-Find, Dijkstra, MST.",
        resources: [
          r("d-gr-1", "Striver Graph Playlist", "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn", "video", "Striver"),
          r("d-gr-2", "Graph Patterns — LeetCode", "https://leetcode.com/discuss/general-discussion/655708/", "article", "LeetCode"),
        ],
        questions: [
          { q: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/" },
          { q: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/" },
          { q: "Network Delay Time (Dijkstra)", url: "https://leetcode.com/problems/network-delay-time/" },
          { q: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/" },
        ],
      },
      {
        id: "dsa-dp",
        title: "Dynamic Programming",
        summary: "1D/2D DP, knapsack, LIS, MCM, DP on trees & bitmask.",
        resources: [
          r("d-dp-1", "Striver DP Series (50+)", "https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY", "video", "Striver"),
          r("d-dp-2", "Aditya Verma DP", "https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go", "video", "Aditya Verma"),
        ],
        questions: [
          { q: "House Robber", url: "https://leetcode.com/problems/house-robber/" },
          { q: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
          { q: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/" },
          { q: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
        ],
      },
      {
        id: "dsa-greedy",
        title: "Greedy & Backtracking",
        summary: "Interval scheduling, N-Queens, subsets, permutations.",
        resources: [
          r("d-gb-1", "Backtracking Playlist", "https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9", "video", "Striver"),
        ],
        questions: [
          { q: "Subsets", url: "https://leetcode.com/problems/subsets/" },
          { q: "N-Queens", url: "https://leetcode.com/problems/n-queens/" },
          { q: "Jump Game II", url: "https://leetcode.com/problems/jump-game-ii/" },
        ],
      },
    ],
  },

  {
    slug: "system-design",
    title: "System Design",
    tagline: "HLD + LLD case studies, scaling, distributed systems.",
    icon: LayersIcon,
    color: "210",
    topics: [
      {
        id: "sd-fund",
        title: "Fundamentals",
        summary: "Latency, throughput, CAP, consistency models, SLA/SLO.",
        resources: [
          r("sd-1", "System Design Primer (GitHub)", "https://github.com/donnemartin/system-design-primer", "docs", "Donne Martin"),
          r("sd-2", "ByteByteGo — System Design 101", "https://github.com/ByteByteGoHq/system-design-101", "docs", "ByteByteGo"),
          r("sd-3", "Gaurav Sen — System Design Playlist", "https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX", "video", "Gaurav Sen"),
        ],
      },
      {
        id: "sd-scaling",
        title: "Scaling, Caching, Load Balancing",
        summary: "CDN, Redis, consistent hashing, rate limiting.",
        resources: [
          r("sd-4", "High Scalability Architectures", "http://highscalability.com/", "article", "HighScalability"),
          r("sd-5", "ByteByteGo — Scaling Videos", "https://www.youtube.com/@ByteByteGo", "video", "ByteByteGo"),
        ],
      },
      {
        id: "sd-cases",
        title: "MAANG-level Case Studies",
        summary: "Design Twitter, WhatsApp, YouTube, Uber, Netflix, Dropbox.",
        resources: [
          r("sd-6", "Design Twitter — Educative", "https://www.educative.io/courses/grokking-the-system-design-interview", "course", "Educative"),
          r("sd-7", "System Design Interview — Alex Xu (Vol 1+2)", "https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF", "book", "Alex Xu"),
          r("sd-8", "Tushar Roy — Case Studies", "https://www.youtube.com/@tusharroy2525", "video", "Tushar Roy"),
        ],
      },
      {
        id: "sd-lld",
        title: "LLD / OOD",
        summary: "Parking lot, Splitwise, BookMyShow, design patterns.",
        resources: [
          r("sd-9", "Low Level Design Primer", "https://github.com/prasadgujar/low-level-design-primer", "docs", "GitHub"),
          r("sd-10", "Refactoring Guru — Patterns", "https://refactoring.guru/design-patterns", "article", "Refactoring Guru"),
        ],
      },
    ],
  },

  {
    slug: "ai-ml",
    title: "AI & ML (LLM, RAG, Agents)",
    tagline: "ML, DL, NLP, LLMs, RAG, LangChain, multi-agent systems.",
    icon: BrainIcon,
    color: "300",
    topics: [
      {
        id: "ml-found",
        title: "ML Foundations",
        summary: "Regression, classification, trees, SVMs, ensembles.",
        resources: [
          r("ai-1", "Andrew Ng — ML Specialization", "https://www.coursera.org/specializations/machine-learning-introduction", "course", "Coursera"),
          r("ai-2", "StatQuest", "https://www.youtube.com/@statquest", "video", "StatQuest"),
          r("ai-3", "Hands-On ML (Aurélien Géron)", "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/", "book", "O'Reilly"),
        ],
      },
      {
        id: "ml-dl",
        title: "Deep Learning & NLP",
        summary: "NN, CNN, RNN, Transformers, attention.",
        resources: [
          r("ai-4", "DeepLearning.AI Specialization", "https://www.coursera.org/specializations/deep-learning", "course", "Coursera"),
          r("ai-5", "Karpathy — Neural Networks Zero to Hero", "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ", "video", "Andrej Karpathy"),
          r("ai-6", "The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "article", "Jay Alammar"),
        ],
      },
      {
        id: "ml-llm",
        title: "LLMs, RAG & Prompt Engineering",
        summary: "GPT, embeddings, vector DBs, RAG pipelines, prompts.",
        resources: [
          r("ai-7", "LangChain Docs", "https://python.langchain.com/docs/introduction/", "docs", "LangChain"),
          r("ai-8", "OpenAI Cookbook", "https://cookbook.openai.com/", "docs", "OpenAI"),
          r("ai-9", "Prompt Engineering Guide", "https://www.promptingguide.ai/", "article", "DAIR.AI"),
          r("ai-10", "RAG from Scratch (LangChain)", "https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x", "video", "LangChain"),
        ],
      },
      {
        id: "ml-agents",
        title: "Agentic AI & Multi-Agent",
        summary: "ReAct, tool use, AutoGen, CrewAI, LangGraph.",
        resources: [
          r("ai-11", "LangGraph Docs", "https://langchain-ai.github.io/langgraph/", "docs", "LangChain"),
          r("ai-12", "Microsoft AutoGen", "https://microsoft.github.io/autogen/", "docs", "Microsoft"),
          r("ai-13", "CrewAI", "https://docs.crewai.com/", "docs", "CrewAI"),
        ],
      },
      {
        id: "ml-libs",
        title: "Python Libraries (NumPy, Pandas, scikit-learn)",
        summary: "Data wrangling, modeling, evaluation.",
        resources: [
          r("ai-14", "scikit-learn User Guide", "https://scikit-learn.org/stable/user_guide.html", "docs", "scikit-learn"),
          r("ai-15", "Pandas Docs", "https://pandas.pydata.org/docs/user_guide/index.html", "docs", "Pandas"),
        ],
      },
    ],
  },

  {
    slug: "core-cs",
    title: "Core CS (DBMS, OS, CN, OOPs)",
    tagline: "Theory MAANG interviewers test in round 2.",
    icon: CpuIcon,
    color: "180",
    topics: [
      {
        id: "cs-os",
        title: "Operating Systems",
        summary: "Processes, threads, scheduling, deadlock, memory.",
        resources: [
          r("os-1", "OSTEP (Free book)", "https://pages.cs.wisc.edu/~remzi/OSTEP/", "book", "Remzi"),
          r("os-2", "Neso Academy OS", "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O", "video", "Neso Academy"),
          r("os-3", "Love Babbar OS Notes", "https://www.geeksforgeeks.org/operating-systems/", "article", "GfG"),
        ],
      },
      {
        id: "cs-dbms",
        title: "DBMS & SQL",
        summary: "Normalization, indexing, transactions, ACID, joins.",
        resources: [
          r("db-1", "GfG DBMS", "https://www.geeksforgeeks.org/dbms/", "article", "GfG"),
          r("db-2", "SQLZoo", "https://sqlzoo.net/", "practice", "SQLZoo"),
          r("db-3", "Use The Index, Luke!", "https://use-the-index-luke.com/", "article", "Markus Winand"),
        ],
      },
      {
        id: "cs-cn",
        title: "Computer Networks",
        summary: "OSI, TCP/IP, HTTP, DNS, TLS.",
        resources: [
          r("cn-1", "Kurose & Ross — Top Down", "https://gaia.cs.umass.edu/kurose_ross/index.html", "book", "Kurose"),
          r("cn-2", "GfG Computer Networks", "https://www.geeksforgeeks.org/computer-network-tutorials/", "article", "GfG"),
        ],
      },
      {
        id: "cs-oops",
        title: "OOPs",
        summary: "Inheritance, polymorphism, SOLID, design principles.",
        resources: [
          r("oop-1", "OOPs Concepts", "https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/", "article", "GfG"),
          r("oop-2", "SOLID Principles", "https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/", "article", "freeCodeCamp"),
        ],
      },
    ],
  },

  {
    slug: "aptitude",
    title: "Aptitude",
    tagline: "Quant, logical & verbal — for OAs and screening rounds.",
    icon: CalculatorIcon,
    color: "75",
    topics: [
      {
        id: "apt-quant",
        title: "Quantitative Aptitude",
        summary: "Numbers, percentages, time-speed-distance, P&C.",
        resources: [
          r("apt-1", "GrindGram", "https://grindgram.in/", "practice", "GrindGram"),
          r("apt-2", "IndiaBix Aptitude", "https://www.indiabix.com/aptitude/questions-and-answers/", "practice", "IndiaBix"),
          r("apt-3", "RS Agarwal — Quant Aptitude", "https://www.amazon.in/Quantitative-Aptitude-Competitive-Examinations-Agarwal/dp/9352534026", "book", "RS Agarwal"),
        ],
      },
      {
        id: "apt-logical",
        title: "Logical Reasoning",
        summary: "Series, syllogism, blood relations, puzzles.",
        resources: [
          r("apt-4", "IndiaBix LR", "https://www.indiabix.com/logical-reasoning/questions-and-answers/", "practice", "IndiaBix"),
        ],
      },
      {
        id: "apt-verbal",
        title: "Verbal Ability",
        summary: "RC, sentence correction, vocabulary.",
        resources: [
          r("apt-5", "IndiaBix Verbal", "https://www.indiabix.com/verbal-ability/questions-and-answers/", "practice", "IndiaBix"),
        ],
      },
    ],
  },

  {
    slug: "python",
    title: "Python (DSA + ML)",
    tagline: "Master Python for both interviews and ML.",
    icon: Code2Icon,
    color: "45",
    topics: [
      {
        id: "py-core",
        title: "Core Python",
        summary: "Data types, comprehensions, generators, decorators, OOP.",
        resources: [
          r("py-1", "Python Official Tutorial", "https://docs.python.org/3/tutorial/", "docs", "Python.org"),
          r("py-2", "Corey Schafer Python Playlist", "https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU", "video", "Corey Schafer"),
          r("py-3", "Real Python", "https://realpython.com/", "article", "Real Python"),
        ],
      },
      {
        id: "py-dsa",
        title: "DSA in Python",
        summary: "Built-ins, collections, heapq, bisect for interviews.",
        resources: [
          r("py-4", "NeetCode Python Solutions", "https://github.com/neetcode-gh/leetcode", "docs", "NeetCode"),
          r("py-5", "LeetCode in Python", "https://leetcode.com/", "practice", "LeetCode"),
        ],
      },
      {
        id: "py-advanced",
        title: "Advanced & Async",
        summary: "asyncio, typing, dataclasses, performance.",
        resources: [
          r("py-6", "Fluent Python (Ramalho)", "https://www.fluentpython.com/", "book", "O'Reilly"),
          r("py-7", "asyncio docs", "https://docs.python.org/3/library/asyncio.html", "docs", "Python.org"),
        ],
      },
    ],
  },

  {
    slug: "math",
    title: "Maths for Engineering",
    tagline: "Stats, probability, linear algebra, calculus for ML+CS.",
    icon: SigmaIcon,
    color: "320",
    topics: [
      {
        id: "m-stats",
        title: "Statistics & Probability",
        summary: "Distributions, hypothesis testing, Bayes.",
        resources: [
          r("m-1", "StatQuest", "https://www.youtube.com/@statquest", "video", "StatQuest"),
          r("m-2", "Khan Academy — Statistics", "https://www.khanacademy.org/math/statistics-probability", "course", "Khan Academy"),
          r("m-3", "Think Stats (free)", "https://greenteapress.com/wp/think-stats-2e/", "book", "Allen Downey"),
        ],
      },
      {
        id: "m-linalg",
        title: "Linear Algebra",
        summary: "Vectors, matrices, eigenvalues, SVD.",
        resources: [
          r("m-4", "3Blue1Brown — Essence of Linear Algebra", "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", "video", "3Blue1Brown"),
          r("m-5", "MIT 18.06 — Gilbert Strang", "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/", "course", "MIT OCW"),
        ],
      },
      {
        id: "m-calc",
        title: "Calculus & Optimization",
        summary: "Derivatives, gradients, gradient descent.",
        resources: [
          r("m-6", "3Blue1Brown — Essence of Calculus", "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr", "video", "3Blue1Brown"),
        ],
      },
      {
        id: "m-discrete",
        title: "Discrete Math",
        summary: "Logic, combinatorics, graph theory.",
        resources: [
          r("m-7", "Discrete Math — TrevTutor", "https://www.youtube.com/playlist?list=PLDDGPdw7e6Ag1EIznZ-m-qXu4XX3A0cIz", "video", "TrevTutor"),
        ],
      },
    ],
  },

  {
    slug: "fullstack",
    title: "Full Stack (MERN)",
    tagline: "HTML/CSS/JS → React → Node → MongoDB → APIs.",
    icon: WorkflowIcon,
    color: "150",
    topics: [
      {
        id: "fs-frontend",
        title: "Frontend (HTML, CSS, JS, React)",
        summary: "Modern web fundamentals + React.",
        resources: [
          r("fs-1", "MDN Web Docs", "https://developer.mozilla.org/en-US/docs/Learn", "docs", "MDN"),
          r("fs-2", "JavaScript.info", "https://javascript.info/", "docs", "javascript.info"),
          r("fs-3", "React Docs", "https://react.dev/learn", "docs", "React"),
          r("fs-4", "Tailwind CSS", "https://tailwindcss.com/docs/installation", "docs", "Tailwind"),
        ],
      },
      {
        id: "fs-backend",
        title: "Backend (Node, Express, REST)",
        summary: "Build REST APIs, auth, deploy.",
        resources: [
          r("fs-5", "Node.js Docs", "https://nodejs.org/en/docs", "docs", "Node.js"),
          r("fs-6", "Express Guide", "https://expressjs.com/en/guide/routing.html", "docs", "Express"),
          r("fs-7", "REST API Tutorial", "https://restfulapi.net/", "article", "RESTful API"),
        ],
      },
      {
        id: "fs-db",
        title: "Databases (MongoDB, MySQL, Firebase)",
        summary: "Schema design, queries, transactions.",
        resources: [
          r("fs-8", "MongoDB University", "https://learn.mongodb.com/", "course", "MongoDB"),
          r("fs-9", "MySQL Tutorial", "https://www.mysqltutorial.org/", "article", "MySQL"),
          r("fs-10", "Firebase Docs", "https://firebase.google.com/docs", "docs", "Firebase"),
        ],
      },
    ],
  },

  {
    slug: "git-linux",
    title: "Git, GitHub & Linux",
    tagline: "Version control + shell mastery.",
    icon: GitBranchIcon,
    color: "30",
    topics: [
      {
        id: "git-1t",
        title: "Git & GitHub",
        summary: "Branching, rebase, PRs, conflict resolution.",
        resources: [
          r("git-1", "Pro Git Book (free)", "https://git-scm.com/book/en/v2", "book", "Scott Chacon"),
          r("git-2", "Learn Git Branching (interactive)", "https://learngitbranching.js.org/", "practice", "LGB"),
          r("git-3", "GitHub Docs", "https://docs.github.com/", "docs", "GitHub"),
        ],
      },
      {
        id: "linux-1t",
        title: "Linux & Shell",
        summary: "File system, permissions, processes, bash.",
        resources: [
          r("lin-1", "Linux Journey", "https://linuxjourney.com/", "course", "Linux Journey"),
          r("lin-2", "MIT Missing Semester", "https://missing.csail.mit.edu/", "course", "MIT"),
          r("lin-3", "Bash Cheatsheet", "https://devhints.io/bash", "article", "devhints"),
        ],
      },
    ],
  },

  {
    slug: "data-science",
    title: "Data Science & Analytics",
    tagline: "EDA, visualization, SQL, BI tools.",
    icon: BarChart3Icon,
    color: "200",
    topics: [
      {
        id: "ds-eda",
        title: "EDA & Visualization",
        summary: "Pandas, Matplotlib, Seaborn, Plotly.",
        resources: [
          r("ds-1", "Kaggle Learn", "https://www.kaggle.com/learn", "course", "Kaggle"),
          r("ds-2", "Seaborn Tutorial", "https://seaborn.pydata.org/tutorial.html", "docs", "Seaborn"),
        ],
      },
      {
        id: "ds-sql",
        title: "SQL for Analytics",
        summary: "Window functions, CTEs, performance.",
        resources: [
          r("ds-3", "Mode SQL Tutorial", "https://mode.com/sql-tutorial/", "course", "Mode"),
          r("ds-4", "LeetCode SQL 50", "https://leetcode.com/studyplan/top-sql-50/", "practice", "LeetCode"),
        ],
      },
      {
        id: "ds-bi",
        title: "BI Tools (Power BI, Tableau)",
        summary: "Dashboards & storytelling.",
        resources: [
          r("ds-5", "Microsoft Power BI Learn", "https://learn.microsoft.com/en-us/power-bi/", "docs", "Microsoft"),
          r("ds-6", "Tableau Free Training", "https://www.tableau.com/learn/training", "course", "Tableau"),
        ],
      },
    ],
  },

  {
    slug: "cloud-devops",
    title: "Cloud & DevOps (AWS, Vercel)",
    tagline: "Deploy, scale, automate.",
    icon: CloudIcon,
    color: "260",
    topics: [
      {
        id: "cd-aws",
        title: "AWS Essentials",
        summary: "EC2, S3, Lambda, IAM, RDS.",
        resources: [
          r("cd-1", "AWS Skill Builder (Cloud Practitioner)", "https://skillbuilder.aws/", "course", "AWS"),
          r("cd-2", "FreeCodeCamp AWS Course", "https://www.youtube.com/watch?v=SOTamWNgDKc", "video", "freeCodeCamp"),
        ],
      },
      {
        id: "cd-deploy",
        title: "Deployment (Vercel, Streamlit, n8n)",
        summary: "Ship apps fast.",
        resources: [
          r("cd-3", "Vercel Docs", "https://vercel.com/docs", "docs", "Vercel"),
          r("cd-4", "Streamlit Docs", "https://docs.streamlit.io/", "docs", "Streamlit"),
          r("cd-5", "n8n Docs", "https://docs.n8n.io/", "docs", "n8n"),
        ],
      },
    ],
  },

  {
    slug: "behavioral",
    title: "Behavioral & SWE Practices",
    tagline: "STAR stories, leadership principles, software engineering.",
    icon: BriefcaseIcon,
    color: "10",
    topics: [
      {
        id: "be-1",
        title: "Behavioral Interviews",
        summary: "STAR, Amazon LP, conflict & ownership stories.",
        resources: [
          r("be-1", "Amazon Leadership Principles", "https://www.amazon.jobs/content/en/our-workplace/leadership-principles", "article", "Amazon"),
          r("be-2", "Cracking the Behavioral Interview (Jackson Gabbard)", "https://www.youtube.com/watch?v=PJKYqLP6MRE", "video", "YouTube"),
        ],
      },
      {
        id: "be-2t",
        title: "Software Engineering Practices",
        summary: "Clean code, testing, code review, agile.",
        resources: [
          r("be-3", "Google Eng Practices", "https://google.github.io/eng-practices/", "docs", "Google"),
          r("be-4", "Clean Code Summary", "https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29", "article", "Gist"),
        ],
      },
    ],
  },
];

export const trackBySlug = (slug: string) => tracks.find((t) => t.slug === slug);
