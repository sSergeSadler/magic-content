import { BsEmojiSmileFill, BsFileTextFill } from "react-icons/bs";
import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaTwitter,
  FaBlog,
} from "react-icons/fa";
import { SiGooglemarketingplatform, SiLibreofficewriter } from "react-icons/si";
import { TfiWrite } from "react-icons/tfi";

export const contentTemplates = [
  {
    name: "Youtube Video Description",
    desc: "An AI tool that generate youtube video description from your information",
    category: "Youtube",
    icon: FaYoutube,
    aiPrompt:
      "Give me youtube video description Ideas based on given video description outline and title and give me result in Rich Text Editor format with emoticon",
    slug: "youtube-description",
    form: [
      {
        label: "Youtube Video Description Title",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter Video Description Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Video Idea",
    desc: "An AI tool that generate Youtube Video Idea based on given information",
    category: "Youtube",
    icon: FaYoutube,
    aiPrompt:
      "Give me youtube video idea on given video niche & outline topic and give me result in Rich Text Editor format with emoticon",
    slug: "generate-youtube-video-idea",
    form: [
      {
        label: "Enter your video niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter video outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Title",
    desc: "An AI tool that generate blog title depends on yout blog information",
    category: "Blog",
    icon: FaBlog,
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: FaBlog,
    slug: "blog-content-generation",
    aiPrompt:
      "Generate Blog Content based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: FaBlog,
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format",
    form: [
      {
        label: "Enter your Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter your niche outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube",
    icon: FaYoutube,
    slug: "youtube-seo-title",
    aiPrompt:
      "Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format",
    form: [
      {
        label: "Enter your youtube video topic keyowords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtube description Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Instagram Hashtags",
    desc: "An AI tool that generate Instagram hashtags based on your post niche and outline information",
    category: "Instagram",
    icon: FaInstagram,
    aiPrompt:
      "Give me some good examples of instagram hashtags on given niche & outline topic and give me result in Rich Text Editor format with emoticon",
    slug: "generate-instagram-hashtags",
    form: [
      {
        label: "Enter your post niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter post outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube",
    icon: FaYoutube,
    slug: "youtube-tag",

    aiPrompt:
      "Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format",

    form: [
      {
        label: "Enter your youtube title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter youtube video Outline here (Optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  {
    name: "Instagram Post/Reel Idea",
    desc: "An AI tool that generate New and trending instagram idea depends on your niche",
    icon: FaInstagram,
    category: "Instagram",

    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords / Niche for your instagram idea",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter Keywords / Niche for your instagram idea outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "English Grammer Check",
    desc: "AI Model to Correct your english grammer by providing the text",
    icon: TfiWrite,
    category: "English",

    slug: "english-grammer-checker",
    aiPrompt:
      "Rewrite the inputText by correcting the grammer and give output in  in rich text editor format",
    form: [
      {
        label: "Enter text to correct the grammer",
        field: "input",
        name: "inputText",
        required: true,
      },
      {
        label: "Enter text to correct the grammer outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.",
    icon: SiLibreofficewriter,
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite give article without any Plagiarism in rich text editor format",
    form: [
      {
        label:
          "🤖 Provide your Article/Blogpost or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
      {
        label:
          "🤖 Provide your Article/Blogpost or any other content to rewrite. outline",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
    icon: BsFileTextFill,
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format",
    form: [
      {
        label: "Enter text that you want to re-write or improve",
        field: "textarea",
        name: "textToImprove",
      },
      {
        label: "Enter text that you want to re-write or improve outline",
        field: "textarea",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: BsEmojiSmileFill,
    category: "blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Add Emoji to outline text depends on outline and rewrite it in rich text editor format",
    form: [
      {
        label: "Enter your text to add emojis",
        field: "textarea",
        name: "outline",
        required: true,
      },
      {
        label: "Enter your text to add emojis outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: FaInstagram,
    category: "Instagram",

    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your post",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter Keywords for your post outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Tiktok Hashtags",
    desc: "An AI tool that generate Tiktok topic idea based on your post niche and outline information",
    category: "Tiktok",
    icon: FaTiktok,
    aiPrompt:
      "Give me some good examples of instagram hashtags on given niche & outline topic and give me result in Rich Text Editor format with emoticon",
    slug: "generate-tiktok-hashtags",
    form: [
      {
        label: "Enter your post niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter post outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Linkedin Post",
    desc: "An AI tool that generate Linkedin Post idea based on your post niche and outline information",
    category: "Linkedin",
    icon: FaLinkedin,
    aiPrompt:
      "Give me some good examples of Linkedin Post idea on given niche & outline topic and give me result in Rich Text Editor format with emoticon",
    slug: "generate-likedin-post",
    form: [
      {
        label: "Enter your post niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter post outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Product Description",
    desc: "This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.",
    icon: SiGooglemarketingplatform,
    category: "Marketting",

    slug: "product-description",
    aiPrompt:
      "Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Tweet",
    desc: "An AI tool that generate Linkedin Post idea based on your post niche and outline information",
    category: "Tweet",
    icon: FaTwitter,
    aiPrompt:
      "Give me 280 characters of tweet example on given niche & outline topic with emoticon",
    slug: "generate-tweet-post",
    form: [
      {
        label: "Enter your tweet niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter tweet outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
];
