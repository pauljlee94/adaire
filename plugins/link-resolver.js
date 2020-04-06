/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'homepage') {
    return '/'
  }

  if (doc.type === 'legal') {
    return '/legal/' + doc.uid
  }

  return '/not-found'
}