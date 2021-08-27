



export const uint64 = (property: string = 'uint64'): Object => {
    return BufferLayout.blob(8, property);
};

export const publicKey = (property: string = 'publicKey'): Object => {
    return BufferLayout.blob(32, property);
};