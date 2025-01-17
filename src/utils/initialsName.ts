export const initialsName = (name: string): string => {
  const [firstName, lastName] = name.split(" ");

  const initials =
    firstName && lastName
      ? `${firstName.charAt(0)}${lastName.charAt(0)}`
      : firstName.charAt(0);

  return initials;
};
