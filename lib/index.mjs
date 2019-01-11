import path from 'path'

// Usage:
//
// import meta from 'import-meta'
// const {dirname, filename} = meta(import.meta)
//
export default (meta = {}) => {
  if (!meta.url) {
    throw new TypeError('Import meta, invalid meta data: url is required')
  }

  const url = new URL(meta.url)
  const dirname = path.dirname(url.pathname)
  const filename = path.basename(url.pathname)
  return {url, dirname, filename}
}
