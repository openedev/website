import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
  title: "Samsung ennovateX AX Startup Pitch Finalist",
  slug: "ennovatex",
  excerpt:
    "Edgeble has been selected for Samsung ennovateX 2026's AX Startup Pitch Finale, joining 10 shortlisted deep-tech start-ups presenting before Samsung R&D Institute India - Bangalore.",
  content: `
    <p class="text-xl mb-6">
      As part of <strong>Samsung ennovateX 2026</strong>, the AX Start-up Pitch brought together some of India's most promising deep-tech start-ups, providing them with a platform to present their innovations before an esteemed jury at Samsung R&amp;D Institute India - Bangalore.
    </p>

    <p class="text-xl mb-6">
      Following an overwhelming response to Samsung's open call for applications, 10 exceptional start-ups were shortlisted for the in-person pitch session. Their solutions were evaluated on product strength, core technology, and market validation, while also opening avenues for meaningful conversations around collaboration and innovation.
    </p>

    <p class="text-xl mb-6">
      The event showcased the depth of India's entrepreneurial ecosystem, with founders exchanging ideas, exploring partnerships, and demonstrating technologies that have the potential to shape the future.
    </p>

    <img
      src="/images/ennova2.jpeg"
      alt="Samsung ennovateX AX Startup Pitch finalists"
      class="w-full rounded-xl my-8"
    />

    <p class="text-xl mb-6">
      Edgeble is honored to be among the selected finalists. We are looking forward to the AX Start-up Pitch Finale on <strong>30 July 2026</strong>, with preparation already underway as we continue sharpening our work around self-learning edge AI and physical AI systems.
    </p>

    <p class="text-xl mb-6">
      Congratulations to all participating start-ups, and thank you to Samsung ennovateX for creating a focused platform for deep-tech collaboration and innovation.
    </p>
  `,
  author: "Jagan Teki",
  date: "2026-07-13",
  readTime: "2 min read",
  image: "/images/ennova1.jpeg",
  tags: ["Samsung", "ennovateX", "AX Startup Pitch", "Deep Tech"],
  type: "news",
  category: "Recognition",
};

export default blog;
