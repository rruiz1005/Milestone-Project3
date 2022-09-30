export const userQuery = (userId) => {
    const query = `*[_type == 'user' && image == '${userId}']`;

    return query;
}