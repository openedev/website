import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
  title: 'Presenting at Edge Computing Expo Europe 2023',
  slug: 'edge-expo',
  excerpt: 'Recap of Edgeble presence at the Edge Computing Expo Europe 2023.',
  content: `
    <p>Autonomous vehicles represent one of the most demanding applications for edge AI, requiring real-time processing of massive amounts of sensor data to make split-second decisions that ensure passenger safety.</p>
        
    <h3>Real-Time Processing</h3>
    <p>Edge AI enables vehicles to process sensor data locally, reducing latency and ensuring reliable operation even when connectivity is limited or unavailable.</p>
        
    <h3>Safety and Reliability</h3>
    <p>Our automotive-grade AI accelerators are designed with redundancy and fail-safe mechanisms to meet the stringent safety requirements of autonomous vehicle applications.</p>
      `,
  author: 'Srinivas Patnaik',
  date: '2023-06-14',
  readTime: '6 min read',
  image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
  tags: ['Autonomous Vehicles', 'Safety', 'Real-time'],
  type: "blog",
  category: 'Event'
};

export default blog;
