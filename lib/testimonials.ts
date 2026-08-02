export type Testimonial = {
  name: string;
  course: string;
  quote: string;
};

// Illustrative testimonials, not attributed to real students.
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Chiamaka Okafor",
    course: "Full Stack Development",
    quote:
      "I started with zero coding experience. My mentor broke everything down until it finally clicked. I wasn't just watching videos alone.",
  },
  {
    name: "Tobi Adewale",
    course: "Cyber Security",
    quote:
      "The installment plan meant I could start the physical class without paying everything upfront. That alone made this possible for me.",
  },
  {
    name: "Ngozi Eze",
    course: "Graphic Design",
    quote:
      "I went from sketching in a notebook to designing a full brand identity in three months. The feedback each week kept me moving.",
  },
  {
    name: "Emeka Obi",
    course: "Product Design (UI/UX)",
    quote:
      "Online classes fit around my day job perfectly, and my mentor was always reachable whenever I got stuck.",
  },
  {
    name: "Fatima Bello",
    course: "Social Media Management",
    quote:
      "I finally understand what actually works online instead of just guessing and hoping a post lands.",
  },
  {
    name: "Uche Nnamdi",
    course: "AI Automation",
    quote:
      "I automated a workflow for my uncle's business in my second month. Seeing something I built actually save people time was the moment it felt real.",
  },
  {
    name: "Blessing Okon",
    course: "Data Analysis",
    quote:
      "I used to be scared of spreadsheets. Now I build dashboards for my team at work and people actually ask me how I did it.",
  },
];

export function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

// Illustrative "shared with us" screenshots, styled after WhatsApp and
// Facebook. Not real captures of real conversations or posts.
export type WhatsAppTestimonial = {
  name: string;
  course: string;
  avatarColor: string;
  messages: { from: "them" | "me"; text: string; time: string }[];
};

export const WHATSAPP_TESTIMONIALS: WhatsAppTestimonial[] = [
  {
    name: "Kelechi Umeh",
    course: "Full Stack Development",
    avatarColor: "bg-royal-blue",
    messages: [
      {
        from: "them",
        text: "Just deployed my final project today! Thank you for pairing me with a mentor who actually had patience for my questions 😭🙏",
        time: "9:14 AM",
      },
      {
        from: "me",
        text: "This made our whole week. So proud of you, Kelechi! 🎉",
        time: "9:20 AM",
      },
      {
        from: "them",
        text: "Already applying for junior dev roles this week. Will keep you posted!",
        time: "9:21 AM",
      },
    ],
  },
  {
    name: "Aisha Suleiman",
    course: "Digital Marketing",
    avatarColor: "bg-signal-yellow",
    messages: [
      {
        from: "them",
        text: "Ran my first paid ad campaign for a client yesterday using exactly what we covered in week 4. It actually converted!",
        time: "6:02 PM",
      },
      {
        from: "me",
        text: "That's amazing! Send us the numbers, we'd love to celebrate this one 👏",
        time: "6:10 PM",
      },
    ],
  },
  {
    name: "Ifeoma Chukwu",
    course: "Data Analysis",
    avatarColor: "bg-ink",
    messages: [
      {
        from: "them",
        text: "My manager saw the dashboard I built for the team and asked who trained me 😂 told him it's AGM Academy",
        time: "11:47 AM",
      },
      {
        from: "me",
        text: "Ha! Tell him to send his whole team to us next 😄",
        time: "11:50 AM",
      },
    ],
  },
  {
    name: "Samuel Etim",
    course: "AI Automation",
    avatarColor: "bg-signal-yellow",
    messages: [
      {
        from: "them",
        text: "The automation project I built in class is now actually running for a real business. They're paying me monthly to maintain it",
        time: "3:18 PM",
      },
      {
        from: "me",
        text: "Wait this is huge. We need to feature this, can we call you tomorrow?",
        time: "3:22 PM",
      },
      {
        from: "them",
        text: "Of course! Still can't believe this is my life now",
        time: "3:23 PM",
      },
    ],
  },
];

export type FacebookTestimonial = {
  name: string;
  course: string;
  avatarColor: string;
  time: string;
  text: string;
  likes: number;
  comments: { name: string; text: string }[];
};

export const FACEBOOK_TESTIMONIALS: FacebookTestimonial[] = [
  {
    name: "Daniel Okorie",
    course: "Cyber Security",
    avatarColor: "bg-ink",
    time: "2d",
    text: "Finished my Cyber Security course at AGM Academy last week. Started out not knowing the difference between a firewall and antivirus, now I'm studying for my first industry certification. If you've been putting off learning a real skill, stop overthinking it and just apply.",
    likes: 48,
    comments: [
      {
        name: "AGM Academy",
        text: "This is exactly why we do this. Congratulations, Daniel! 🎉",
      },
    ],
  },
  {
    name: "Precious Ade",
    course: "Graphic Design",
    avatarColor: "bg-royal-blue",
    time: "5d",
    text: "3 months ago I didn't know how to use Figma. Today I designed a full brand kit for a real client and got paid for it. AGM Academy's mentors don't just teach the software, they teach you how to think like a designer.",
    likes: 61,
    comments: [
      {
        name: "Tari Douglas",
        text: "This is so inspiring, which cohort are you in? I want to apply too",
      },
    ],
  },
  {
    name: "Michael Ubong",
    course: "Full Stack Development",
    avatarColor: "bg-signal-yellow",
    time: "1w",
    text: "From NYSC corper with no direction to building my own web apps in under 4 months. AGM Academy's physical classes in Lagos gave me a routine and people to push me on the days I wanted to quit.",
    likes: 73,
    comments: [
      {
        name: "Grace Effiong",
        text: "Congratulations Michael!! Following your journey has been amazing to watch",
      },
    ],
  },
  {
    name: "Halima Yusuf",
    course: "Social Media Management",
    avatarColor: "bg-ink",
    time: "3d",
    text: "I manage 4 client accounts now, all from skills I picked up at AGM Academy. The content calendar templates alone were worth the whole course.",
    likes: 39,
    comments: [
      {
        name: "AGM Academy",
        text: "So happy to hear this, Halima! Keep sending us updates 💛",
      },
    ],
  },
];
