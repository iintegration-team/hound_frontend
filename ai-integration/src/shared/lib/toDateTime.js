export const toDateTime = (date) => !!date ? date.toISOString().slice(0, 19) : null;