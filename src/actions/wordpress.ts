import WPAPI from 'wpapi';

// Types
import { WPPost } from '../types';

// Initialize WPAPI
const wp = new WPAPI({ endpoint: 'https://sleekapp.io/wp-json' });

/**
 * Fetches blog posts from WP backend
 * @returns Promise<WPPost[] | null>
 */
export const fetchBlogPosts = (): Promise<WPPost[] | null> => {
  return new Promise((resolve, reject) => {
    wp.posts().then(( wpPosts: WPPost[] ) => {
      console.log('Fetched WP Posts', wpPosts);
      resolve(wpPosts);
    }).catch(( err ) => {
      console.error("WP Fetch Error", err);
      reject(null);
    });
  });
};

