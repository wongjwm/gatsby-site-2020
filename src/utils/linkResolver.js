// In src/prismic-configuration.js
export const linkResolver = (doc) => {

    // URL for a case study type
    if (doc.type === 'Project') {
      return `/project/${doc.uid}`;
    }

  // Backup for all other types
  return '/'
}