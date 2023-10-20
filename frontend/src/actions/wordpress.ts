import WPAPI from 'wpapi';

// Types
import { WPPost } from '../types';

// Initialize WPAPI
const wpAgency = new WPAPI({ endpoint: `${process.env.REACT_APP_AGENCY_WP_URL}/wp-json` });
// Initialize WPAPI
const wpPersonal = new WPAPI({ endpoint: `${process.env.REACT_APP_PERSONAL_WP_URL}/wp-json` });

/**
 * Fetches blog posts from WP backend
 * @returns Promise<WPPost[] | null>
 */
export const fetchBlogPosts = async (): Promise<WPPost[] | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      const [agencyPosts, personalPosts] = await Promise.all([
        wpAgency.posts(),
        wpPersonal.posts(),
      ]);
      const blogPosts = [ ...agencyPosts, ...personalPosts ];
      resolve(blogPosts);
    } catch (err) {
      console.error('Fetch blog posts error: ', err);
      reject(err);
    }
  });
};
