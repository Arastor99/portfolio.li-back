export const extractEntityUrn = (urn: string): string => {
  return urn.split(':').slice(3).join(':');
};
