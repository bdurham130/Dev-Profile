document.addEventListener('DOMContentLoaded', () => {
    console.log("Developer console loaded.");
  
     // Add blog entries
  const blogPosts = [
    {
      title: "Crypto Thoughts",
      content: "Exploring the world of blockchain and decentralized finance is a daily adventure that im super pationate about #XRPARMY."
    },
    {
      title: "Travel",
      content: "There's nothing like hopping on a plane and going to a new country for the first time."
    },
    {
      title: "Car Culture",
      content: "If it isn't American Muscle what are you doing?"
    }
  ];

  blogPosts.forEach(post => addBlogEntry(post.title, post.content));

  // Check for visitor name from cookie
  const visitorName = getCookie("visitorName") || "Guest";
  console.log(`Loaded visitor name: ${visitorName}`);

  // Welcome Message
  const welcomeMsg = document.createElement('p');
  welcomeMsg.textContent = `Welcome to my page!`;
  const blogHeader = document.querySelector('#blog h2');
  if (blogHeader) {
    blogHeader.insertAdjacentElement('beforebegin', welcomeMsg);
  }

  // Button interaction: toggle dark/light mode
  const btn = document.getElementById('change-theme');
  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('bg-dark');
      document.body.classList.toggle('text-white');
      document.querySelectorAll('.card').forEach(card => {
        card.classList.toggle('card-dark');
      });
      console.log(" Theme toggled by user.");
    });
  }


  // Set the cookie if it's not there
  if (!getCookie("visitorName")) {
    setCookie("visitorName", "Brandon", 7);
  }
});

// Function to add a blog entry dynamically
function addBlogEntry(title, content) {
  const blogSection = document.getElementById('blog');
  if (!blogSection) return;

  const article = document.createElement('article');
  article.className = 'card p-3 mb-3';

  const heading = document.createElement('h5');
  heading.textContent = title;

  const paragraph = document.createElement('p');
  paragraph.textContent = content;

  article.appendChild(heading);
  article.appendChild(paragraph);
  blogSection.appendChild(article);
}

// Cookie utilities
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
  const decoded = decodeURIComponent(document.cookie).split(';');
  for (let c of decoded) {
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(name + "=") === 0) return c.substring(name.length + 1);
  }
  return "";
}
