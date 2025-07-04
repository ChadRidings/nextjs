import type { UserType } from "../types/users";
import Users from "../components/users/Users";
import ThemeToggle from "../components/theme/ThemeToggle";

const Page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserType[] = await response.json();

  return (
    <>
      <ThemeToggle />
      <Users users={users} />
    </>
  );
};

export default Page;
