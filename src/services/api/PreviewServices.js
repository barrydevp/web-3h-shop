const baseUrl =
    process.env.NODE_ENV === 'production' && process.env.REACT_APP_PRIMARY_DOMAIN
        ? `https://${process.env.REACT_APP_PRIMARY_DOMAIN}/api/preview`
        : 'https://tile.merch8.com/api/preview'

export const getPreviewURL = (path, size) => {
    return `${baseUrl}/${size}/${path}`
}
