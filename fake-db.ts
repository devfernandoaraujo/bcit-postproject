// @ts-nocheck
const users = {
  1: {
    id: 1,
    uname: "alice",
    password: "alpha",
  },
  2: {
    id: 2,
    uname: "theo",
    password: "123",
  },
  3: {
    id: 3,
    uname: "prime",
    password: "123",
  },
  4: {
    id: 4,
    uname: "leerob",
    password: "123",
  },
};

const posts = {
  101: {
    id: 101,
    title: "Mochido opens its new location in Coquitlam this week",
    link: "https://dailyhive.com/vancouver/mochido-coquitlam-open",
    description:
      "New mochi donut shop, Mochido, is set to open later this week.",
    creator: 1,
    subgroup: "food",
    timestamp: 1643648446955,
  },
  102: {
    id: 102,
    title: "2023 State of Databases for Serverless & Edge",
    link: "https://leerob.io/blog/backend",
    description:
      "An overview of databases that pair well with modern application and compute providers.",
    creator: 4,
    subgroup: "coding",
    timestamp: 1642611742010,
  },
  103: {
    id: 103,
    title: "Delicious Street Food Finds in Tokyo",
    link: "https://example.com/street-food-tokyo",
    description: "Explore the vibrant street food scene in Tokyo.",
    creator: 2,
    subgroup: "food",
    timestamp: 1643903446955,
    image: "https://source.unsplash.com/featured/?food&sig=103",
  },
  104: {
    id: 104,
    title: "Mastering React Hooks: A Comprehensive Guide",
    link: "https://example.com/react-hooks-guide",
    description: "Learn how to use React hooks for state management and more.",
    creator: 3,
    subgroup: "coding",
    timestamp: 1643973446955,
    image: "https://source.unsplash.com/featured/?coding&sig=104",
  },
  105: {
    id: 105,
    title: "Capturing the Essence of Nature Through Photography",
    link: "https://example.com/nature-photography",
    description: "Embark on a photographic journey through the wonders of nature.",
    creator: 4,
    subgroup: "photography",
    timestamp: 1644043446955,
    image: "https://source.unsplash.com/featured/?photography&sig=105",
  },
  106: {
    id: 106,
    title: "Discovering Hidden Gems in Barcelona",
    link: "https://example.com/barcelona-travel",
    description: "Uncover the charm of lesser-known spots in Barcelona.",
    creator: 1,
    subgroup: "travel",
    timestamp: 1644113446955,
    image: "https://source.unsplash.com/featured/?travel&sig=106",
  },
  107: {
    id: 107,
    title: "Holistic Approach to Fitness: Mind, Body, and Soul",
    link: "https://example.com/holistic-fitness",
    description: "Explore a holistic approach to fitness for a balanced life.",
    creator: 2,
    subgroup: "fitness",
    timestamp: 1644183446955,
    image: "https://source.unsplash.com/featured/?fitness&sig=107",
  },
  108: {
    id: 108,
    title: "Gastronomic Adventures in Paris",
    link: "https://example.com/gastronomic-paris",
    description: "Indulge in the culinary delights of Parisian cuisine.",
    creator: 3,
    subgroup: "food",
    timestamp: 1644253446955,
    image: "https://source.unsplash.com/featured/?food&sig=108",
  },
  109: {
    id: 109,
    title: "Building Scalable APIs with Node.js",
    link: "https://example.com/scalable-apis-nodejs",
    description: "Learn the principles of building scalable APIs using Node.js.",
    creator: 4,
    subgroup: "coding",
    timestamp: 1644323446955,
    image: "https://source.unsplash.com/featured/?coding&sig=109",
  },
  110: {
    id: 110,
    title: "Sunset Photography Techniques",
    link: "https://example.com/sunset-photography",
    description: "Master the art of capturing stunning sunsets through photography.",
    creator: 1,
    subgroup: "photography",
    timestamp: 1644393446955,
    image: "https://source.unsplash.com/featured/?photography&sig=110",
  },
  111: {
    id: 111,
    title: "A Weekend Getaway to Santorini",
    link: "https://example.com/santorini-weekend",
    description: "Experience the enchanting beauty of Santorini on a weekend getaway.",
    creator: 2,
    subgroup: "travel",
    timestamp: 1644463446955,
    image: "https://source.unsplash.com/featured/?travel&sig=111",
  },
  112: {
    id: 112,
    title: "Mindful Yoga for Stress Relief",
    link: "https://example.com/mindful-yoga-stress-relief",
    description: "Practice mindful yoga techniques for effective stress relief.",
    creator: 3,
    subgroup: "fitness",
    timestamp: 1644533446955,
    image: "https://source.unsplash.com/featured/?fitness&sig=112",
  },
  113: {
    id: 113,
    title: "The Art of French Pastry",
    link: "https://example.com/french-pastry",
    description: "Delve into the exquisite art of crafting French pastries.",
    creator: 4,
    subgroup: "food",
    timestamp: 1644603446955,
    image: "https://source.unsplash.com/featured/?food&sig=113",
  },
  114: {
    id: 114,
    title: "Effective Data Modeling in MongoDB",
    link: "https://example.com/data-modeling-mongodb",
    description: "Learn the essentials of data modeling in MongoDB for efficient database design.",
    creator: 1,
    subgroup: "coding",
    timestamp: 1644673446955,
    image: "https://source.unsplash.com/featured/?coding&sig=114",
  },
  115: {
    id: 115,
    title: "Macro Photography: Capturing the Minuscule",
    link: "https://example.com/macro-photography",
    description: "Explore the fascinating world of macro photography and capture the minuscule details.",
    creator: 2,
    subgroup: "photography",
    timestamp: 1644743446955,
    image: "https://source.unsplash.com/featured/?photography&sig=115",
  },
  116: {
    id: 116,
    title: "Unwind with Yoga by the Beach",
    link: "https://example.com/beach-yoga",
    description: "Relax and unwind with rejuvenating yoga sessions by the beach.",
    creator: 3,
    subgroup: "fitness",
    timestamp: 1644813446955,
    image: "https://source.unsplash.com/featured/?fitness&sig=116",
  },
  117: {
    id: 117,
    title: "Sculpting Culinary Masterpieces in Rome",
    link: "https://example.com/culinary-rome",
    description: "Embark on a culinary journey to Rome and discover the art of sculpting culinary masterpieces.",
    creator: 4,
    subgroup: "food",
    timestamp: 1644883446955,
    image: "https://source.unsplash.com/featured/?food&sig=117",
  },
  118: {
    id: 118,
    title: "Distributed Systems: Design and Implementation",
    link: "https://example.com/distributed-systems",
    description: "Gain insights into the design and implementation of distributed systems for scalable applications.",
    creator: 1,
    subgroup: "coding",
    timestamp: 1644953446955,
    image: "https://source.unsplash.com/featured/?coding&sig=118",
  },
  119: {
    id: 119,
    title: "Urban Exploration Photography",
    link: "https://example.com/urban-exploration",
    description: "Embark on an urban exploration through captivating photography.",
    creator: 2,
    subgroup: "photography",
    timestamp: 1645023446955,
    image: "https://source.unsplash.com/featured/?photography&sig=119",
  },
  120: {
    id: 120,
    title: "Adventurous Hiking Trails Around the World",
    link: "https://example.com/hiking-trails",
    description: "Discover exhilarating hiking trails that promise adventure and breathtaking views.",
    creator: 3,
    subgroup: "travel",
    timestamp: 1645093446955,
    image: "https://source.unsplash.com/featured/?travel&sig=120",
  },
  121: {
    id: 121,
    title: "Full-Body Fitness Routine for Busy Professionals",
    link: "https://example.com/fitness-routine",
    description: "Maintain a healthy lifestyle with a full-body fitness routine designed for busy professionals.",
    creator: 4,
    subgroup: "fitness",
    timestamp: 1645163446955,
    image: "https://source.unsplash.com/featured/?fitness&sig=121",
  },
  122: {
    id: 122,
    title: "Post Title 20 - Travel",
    link: "https://example.com/post-20",
    description: "Description for Post 20 about travel",
    creator: 4,
    subgroup: "travel",
    timestamp: 1645683446955,
    image: "https://source.unsplash.com/featured/?travel&sig=122",
  },
};

 


const comments = {
  9001: {
    id: 9001,
    post_id: 102,
    creator: 1,
    description: "Actually I learned a lot :pepega:",
    timestamp: 1642691742010,
  },
  9002: {
    id: 9002,
    post_id: 102,
    creator: 2,
    description: "Great insights! Thanks for sharing.",
    timestamp: 1642701742010,
  },
  9003: {
    id: 9003,
    post_id: 102,
    creator: 4,
    description: "Databases and serverless computing are shaping the future of tech.",
    timestamp: 1645821742010,
  },
  9004: {
    id: 9004,
    post_id: 102,
    creator: 2,
    description: "Your insights on serverless architectures are spot on!",
    timestamp: 1645831742010,
  },
  9005: {
    id: 9005,
    post_id: 103,
    creator: 1,
    description: "Tokyo is on my travel bucket list, especially for the street food!",
    timestamp: 1645841742010,
  },
  9006: {
    id: 9006,
    post_id: 103,
    creator: 3,
    description: "The vibrant street food scene in Tokyo is truly something special.",
    timestamp: 1645851742010,
  },
  9007: {
    id: 9007,
    post_id: 104,
    creator: 2,
    description: "React hooks have changed the way I approach state management. Great guide!",
    timestamp: 1645861742010,
  },
  9008: {
    id: 9008,
    post_id: 104,
    creator: 4,
    description: "I've been looking for a comprehensive guide on React hooks. Thanks!",
    timestamp: 1645871742010,
  },
  9009: {
    id: 9009,
    post_id: 105,
    creator: 1,
    description: "Nature photography is my passion. Your post is truly inspiring!",
    timestamp: 1645881742010,
  },
  9010: {
    id: 9010,
    post_id: 105,
    creator: 3,
    description: "Capturing the essence of nature is an art. Well done!",
    timestamp: 1645891742010,
  },
  9011: {
    id: 9011,
    post_id: 106,
    creator: 4,
    description: "Barcelona is a city full of surprises. Any hidden gems you'd recommend?",
    timestamp: 1645901742010,
  },
  9012: {
    id: 9012,
    post_id: 106,
    creator: 2,
    description: "Your post on Barcelona has me excited for my upcoming trip!",
    timestamp: 1645911742010,
  },
  9013: {
    id: 9013,
    post_id: 107,
    creator: 1,
    description: "Holistic fitness is the way to go for a balanced and healthy life.",
    timestamp: 1645921742010,
  },
  9014: {
    id: 9014,
    post_id: 107,
    creator: 3,
    description: "Mind, body, and soul - the key to holistic well-being. Great post!",
    timestamp: 1645931742010,
  },
  9015: {
    id: 9015,
    post_id: 108,
    creator: 2,
    description: "Parisian cuisine is a culinary dream. Any favorite dishes?",
    timestamp: 1645941742010,
  },
  9016: {
    id: 9016,
    post_id: 108,
    creator: 4,
    description: "Your post has me craving some authentic French pastries!",
    timestamp: 1645951742010,
  },
  9017: {
    id: 9017,
    post_id: 109,
    creator: 1,
    description: "Building scalable APIs with Node.js is a game-changer for developers.",
    timestamp: 1645961742010,
  },
  9018: {
    id: 9018,
    post_id: 109,
    creator: 3,
    description: "Scalable APIs are crucial for modern applications. Thanks for the insights!",
    timestamp: 1645971742010,
  },
  9019: {
    id: 9019,
    post_id: 110,
    creator: 4,
    description: "Sunset photography is a beautiful way to capture the day's end.",
    timestamp: 1645981742010,
  },
  9020: {
    id: 9020,
    post_id: 110,
    creator: 2,
    description: "I've always wanted to master sunset photography. Your post is motivating!",
    timestamp: 1645991742010,
  },
  9021: {
    id: 9021,
    post_id: 111,
    creator: 3,
    description: "Santorini is on my bucket list. Your post has me even more excited to visit!",
    timestamp: 1646001742010,
  },
  9022: {
    id: 9022,
    post_id: 111,
    creator: 1,
    description: "Your weekend getaway sounds like a dream. Any must-visit spots?",
    timestamp: 1646011742010,
  },
  9023: {
    id: 9023,
    post_id: 112,
    creator: 2,
    description: "Mindful yoga is a powerful stress reliever. Do you have any favorite poses?",
    timestamp: 1646021742010,
  },
  9024: {
    id: 9024,
    post_id: 112,
    creator: 4,
    description: "Mindful yoga has transformed my life. Thanks for sharing your insights!",
    timestamp: 1646031742010,
  },
  9025: {
    id: 9025,
    post_id: 113,
    creator: 1,
    description: "French pastries are a work of art. Any recommendations for the best patisserie?",
    timestamp: 1646041742010,
  },
  9026: {
    id: 9026,
    post_id: 113,
    creator: 3,
    description: "Your post has me craving some delicious French pastries. Yum!",
    timestamp: 1646051742010,
  },
  9027: {
    id: 9027,
    post_id: 114,
    creator: 2,
    description: "Data modeling in MongoDB is a crucial skill. Any tips for beginners?",
    timestamp: 1646061742010,
  },
  9028: {
    id: 9028,
    post_id: 114,
    creator: 4,
    description: "Effective data modeling is key to a well-designed MongoDB database. Great post!",
    timestamp: 1646071742010,
  },
  9029: {
    id: 9029,
    post_id: 115,
    creator: 1,
    description: "Macro photography fascinates me. Any favorite subjects for macro shots?",
    timestamp: 1646081742010,
  },
  9030: {
    id: 9030,
    post_id: 115,
    creator: 3,
    description: "Your post on macro photography has inspired me to explore this genre. Thank you!",
    timestamp: 1646091742010,
  },
  9031: {
    id: 9031,
    post_id: 116,
    creator: 2,
    description: "Beach yoga sounds like a serene experience. Do you have any favorite beach yoga spots?",
    timestamp: 1646101742010,
  },
  9032: {
    id: 9032,
    post_id: 116,
    creator: 4,
    description: "Your post on beach yoga makes me want to incorporate it into my routine. Thanks!",
    timestamp: 1646111742010,
  },
  9033: {
    id: 9033,
    post_id: 117,
    creator: 1,
    description: "Culinary masterpieces in Rome? I'm intrigued. Any specific dishes you recommend?",
    timestamp: 1646121742010,
  },
  9034: {
    id: 9034,
    post_id: 117,
    creator: 3,
    description: "Your post has me daydreaming about a culinary adventure in Rome. Delightful!",
    timestamp: 1646131742010,
  },
  9035: {
    id: 9035,
    post_id: 118,
    creator: 2,
    description: "Distributed systems are fascinating. Do you have any book recommendations on the topic?",
    timestamp: 1646141742010,
  },
  9036: {
    id: 9036,
    post_id: 118,
    creator: 4,
    description: "Your insights into distributed systems are valuable. Thanks for sharing!",
    timestamp: 1646151742010,
  },
  9037: {
    id: 9037,
    post_id: 119,
    creator: 1,
    description: "Urban exploration photography is such a unique art. Any favorite locations?",
    timestamp: 1646161742010,
  },
  9038: {
    id: 9038,
    post_id: 119,
    creator: 3,
    description: "Your post has inspired me to explore urban photography. Thanks for the inspiration!",
    timestamp: 1646171742010,
  },
  9039: {
    id: 9039,
    post_id: 120,
    creator: 2,
    description: "Adventurous hiking trails sound amazing. Any trails you recommend for beginners?",
    timestamp: 1646181742010,
  },
  9040: {
    id: 9040,
    post_id: 120,
    creator: 4,
    description: "Your post on hiking trails has me excited to embark on new adventures. Thank you!",
    timestamp: 1646191742010,
  },
  9041: {
    id: 9041,
    post_id: 121,
    creator: 1,
    description: "Maintaining a full-body fitness routine as a busy professional is challenging. Any tips?",
    timestamp: 1646201742010,
  },
  9042: {
    id: 9042,
    post_id: 121,
    creator: 3,
    description: "Your post on a full-body fitness routine is motivating. Thank you for the guidance!",
    timestamp: 1646211742010,
  },
  9043: {
    id: 9043,
    post_id: 122,
    creator: 2,
    description: "Post Title 20 - Travel caught my eye. What's your favorite travel destination?",
    timestamp: 1646221742010,
  },
  9044: {
    id: 9044,
    post_id: 122,
    creator: 4,
    description: "Your post about travel has me daydreaming about my next adventure. Thanks for sharing!",
    timestamp: 1646231742010,
  },
  9045: {
    id: 9045,
    post_id: 110,
    creator: 1,
    description: "Exploring photography with each post. Do you have any photography tips for beginners?",
    timestamp: 1646241742010,
  },
  9046: {
    id: 9046,
    post_id: 119,
    creator: 3,
    description: "Your posts on photography are inspiring. I'm eager to enhance my photography skills.",
    timestamp: 1646251742010,
  },
  9047: {
    id: 9047,
    post_id: 120,
    creator: 2,
    description: "Hiking trails offer a unique experience. Any specific trail you found particularly breathtaking?",
    timestamp: 1646261742010,
  },
  9048: {
    id: 9048,
    post_id: 120,
    creator: 4,
    description: "Your insights on hiking trails have me planning my next outdoor adventure. Thanks!",
    timestamp: 1646271742010,
  },
  9049: {
    id: 9049,
    post_id: 121,
    creator: 1,
    description: "A full-body fitness routine designed for busy professionals? I'm interested. Share some routines!",
    timestamp: 1646281742010,
  },
  9050: {
    id: 9050,
    post_id: 121,
    creator: 3,
    description: "Your post on fitness routines is motivating. Can't wait to incorporate these into my schedule.",
    timestamp: 1646291742010,
  },
};

const votes = [
  { user_id: 2, post_id: 101, value: +1 },
  { user_id: 3, post_id: 101, value: +1 },
  { user_id: 4, post_id: 101, value: +1 },
  { user_id: 3, post_id: 102, value: -1 },
  { user_id: 2, post_id: 122, value: +1 },
  { user_id: 3, post_id: 122, value: +1 },
  { user_id: 4, post_id: 122, value: +1 },
  { user_id: 1, post_id: 122, value: -1 },
];

function debug() {
  console.log("==== DB DEBUGING ====");
  console.log("users", users);
  console.log("posts", posts);
  console.log("comments", comments);
  console.log("votes", votes);
  console.log("==== DB DEBUGING ====");
}

function addUser(firstName:string, lastName:string, uname: string, password: string){
  let id = Math.max(...Object.keys(users).map(Number)) + 1;
  let user = {
    id,
    uname,
    password,
    firstName,
    lastName, 
  };
  users[id] = user;
  return user;
}

function getUser(id) {
  return users[id];
}

function getUserByUsername(uname: any) {
  return getUser(
    Object.values(users).filter((user) => user.uname === uname)[0].id
  );
}

function getVotesForPost(post_id) {
  return votes.filter((vote) => vote.post_id === post_id);
}
 
function getVotesForPostByUser(post_id, user_id) {
  return votes.find((vote) => vote.post_id === post_id && vote.user_id === user_id) ?? null;
}

private function removeVote(post_id, user_id) {
  const index = votes.findIndex((vote) => vote.user_id === user_id && vote.post_id === post_id);
  if (index !== -1) {
    votes.splice(index, 1);
  }
}

function sumVoteValues(post_id) {
  const votesForPost = getVotesForPost(post_id);
  const sum = votesForPost.reduce((accumulator, vote) => accumulator + vote.value, 0); 
  return sum;
}

function addVote(post_id, user_id, value){

  /**Check if there is a vote */
  let vote = getVotesForPostByUser(post_id, user_id);

  if(vote){
    /**Just cancel the vote */
    if(vote.value === value){
      removeVote (post_id,user_id);
      return sumVoteValues(post_id);
    }
    else{
      /** Changed mind and voting negative */
      removeVote (post_id,user_id);
    }
                             
  }

  votes.push({user_id: user_id, post_id: post_id, value: value});
  return sumVoteValues(post_id);
}

function decoratePost(post) {
  post = {
    ...post,
    creator: users[post.creator],
    votes: getVotesForPost(post.id),
    netVotes: sumVoteValues(post.id),
    comments: Object.values(comments)
      .filter((comment) => comment.post_id === post.id)
      .sort((a, b) => b.timestamp - a.timestamp)
      .map((comment) => ({ ...comment, creator: users[comment.creator] })),
      
  };
  return post;
}

/**
 * @param {*} n how many posts to get, defaults to 5
 * @param {*} sub which sub to fetch, defaults to all subs
 */
function getPosts(n = 5, sub: string | undefined = undefined) {
  const result = [];

  let allPosts = Object.values(posts);
  if (sub) {
    allPosts = allPosts.filter((post) => post.subgroup === sub);
  }
  allPosts.sort((a, b) => b.timestamp - a.timestamp);

  allPosts.slice(0, n).forEach((post) => {
    const userId = post.creator;
    const netVotes = sumVoteValues(post.id);

    if (users[userId]) {
      result.push({ ...post, creatorName: users[userId].uname, netVotes: netVotes });
    }
  });


  return result;
}

function getPost(id) {
  return decoratePost(posts[id]);
}

function addPost(title, link, creator, description, subgroup) {
  let id = Math.max(...Object.keys(posts).map(Number)) + 1;
  let post = {
    id,
    title,
    link,
    description,
    creator: Number(creator),
    subgroup,
    timestamp: Date.now(),
  };
  posts[id] = post;
  return post;
}

function editPost(post_id, changes = {}) {
  let post = posts[post_id];
  if (changes.title) {
    post.title = changes.title;
  }
  if (changes.link) {
    post.link = changes.link;
  }
  if (changes.description) {
    post.description = changes.description;
  }
  if (changes.subgroup) {
    post.subgroup = changes.subgroup;
  }
}

function deletePost(post_id) {
  delete posts[post_id];
}

function getSubs() {
  return Array.from(new Set(Object.values(posts).map((post) => post.subgroup))).sort();
}

function decorateComment(comment) {
  comment = {
    ...comment,
    creator: users[comment.creator],
    post: posts[comment.post_id]
  };
  return comment;
}

function getComment(id) {
  return decorateComment(comments[id]);
}

function deleteComment(commentId) {
  delete comments[commentId];
}

function addComment(post_id, creator, description) {
  let id = Math.max(...Object.keys(comments).map(Number)) + 1;
  let comment = {
    id,
    post_id: Number(post_id),
    creator: Number(creator),
    description,
    timestamp: Date.now(),
  };
  comments[id] = comment;
  return comment;
}

export {
  debug,
  getUser,
  getUserByUsername,
  getPosts,
  getPost,
  addPost,
  editPost,
  deletePost,
  getSubs,
  addComment,
  getComment,
  decorateComment,
  decoratePost,
  deleteComment,
  addVote, 
  addUser,
};
