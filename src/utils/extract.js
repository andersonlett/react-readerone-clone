export const extractIds = channels => channels.map(channel => channel.id);

export const extractNameById = (id, channels) => {
  const channel = channels.find(el => el.id === id);
  if (channel) {
    return channel.name;
  }
  return '';
};
