const Avatar = ({
  fullName,
  className,
}: {
  fullName: string;
  className?: string;
}) => {
  const splittedName = fullName.split(" ");
  let initials = "";
  if (splittedName.length > 1) {
    initials = splittedName[0][0] + splittedName[1][0];
  } else {
    initials = fullName[0];
  }
  return (
    <div
      className={`${className} flex justify-center items-center uppercase p-2 size-10 rounded-full bg-[#d9d9d9] text-black`}
    >
      {initials}
    </div>
  );
};

export default Avatar;
